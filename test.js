var bogart     = require('bogart');
var viewEngine = bogart.viewEngine('mustache')
  , router     = bogart.router();

router.get('/', function(req) {
    return viewEngine.respond('test.html', {locals:{},partials:{'partial1':'partial1.html','partial2':'partial2.html'}});
});

var app = bogart.app();
app.use(bogart.batteries);
app.use(router);
app.start(8080);
