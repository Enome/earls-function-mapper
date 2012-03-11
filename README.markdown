# Earls Function Mapper

Custom mapper for earls.

## How do I install it?

``` shell
npm install earls-function-mapper
```

## How do I use it?

``` js
var mapper = require('earls-function-mapper').mapper;
var url = require('earls-function-mapper').url;

earls.register('f', mapper);

earls.f( function(){

  url('products', '/products', function(){

    url('show', '/show/:productid');

  });

});
```

The url property is optional if the name and url match and if you don't need arguments in your url. Like products in the example above.


``` js
var url = require('earls-function-mapper').url;

earls.f( function(){

  url('products', function(){

    url('show', '/show/:productid');

  });

});
```

This mapper works well with Coffee-Script to create concise maps.

``` coffee-script
url 'root', '/', ->
  url 'products', ->
    url 'new'
    url 'create'
    url 'edit'
    url 'update', '/update/:productid'
    url 'show', '/show/:productid'
    url 'destroy'

```

## Run tests

Tests use mocha and should.

``` shell
make unittests
```
