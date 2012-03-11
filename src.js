var _ = require('underscore');
var raw = {};
var names = [];
var urls = [];

exports.url = function(name, url, fn){

  if( _.isFunction(url) ){
    fn = url;
    url = undefined;
  };

  if ( _.isUndefined(url) ){
    url = '/' + name;
  };

  names.push(name);
  urls.push(url);

  name = names.join('_');
  url = urls.join('');

  raw[name] = url.replace('//', '/');

  fn && fn();

  names.pop();
  urls.pop();

};

exports.mapper = function(layout){

  raw = {};
  layout();
  return raw;

};
