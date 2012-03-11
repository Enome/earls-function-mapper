var url = require('./src').url;
var functionMapper = require('./src').mapper

describe('Function mapper', function(){

  describe('Simple', function(){

    var layout = function(){
      url('my', '/my');
      url('yours', '/yours');
    };

    it('returns simple url map', function(){
      functionMapper(layout).should.eql({ 'my': '/my', 'yours': '/yours' });
    });

  });

  describe('Nested', function(){

    var layout = function(){
      url('my', '/my', function(){
        url('products', '/products', function(){
          url('show', '/show/:productid');
          url('destroy', '/destroy', function(){
            url('extra', '/extra');
          });
        });
      })
    };

    it('returns a nested url map', function(){

      functionMapper(layout).should.eql({
        'my': '/my',
        'my_products': '/my/products',
        'my_products_show': '/my/products/show/:productid',
        'my_products_destroy': '/my/products/destroy',
        'my_products_destroy_extra': '/my/products/destroy/extra'
      });

    });

  });


  describe('Nested with one, two or three params', function(){

    var layout = function(){

      url('root', '/');

      url('products', '/', function(){
        url('destroy', function(){
          url('extra');
        });
        url('show');
      });

    };

    it('returns the nested map without double slashes', function(){

      functionMapper(layout).should.eql({
        'root': '/',
        'products': '/',
        'products_show': '/show',
        'products_destroy': '/destroy',
        'products_destroy_extra': '/destroy/extra'
      });

    });

  });

});
