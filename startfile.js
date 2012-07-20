define([], function () {
  return function(runtime, params, callback) {

    params.content = params.content.replace(/<meta [^>]+apple-mobile-web-app-status-bar-style[^>]+>/ig,"");

    var style;
    
    if (params.options.style=="translucent") {
      style = "black-translucent";
    } else if (params.options.style=="black") {
      style = "black";
    } else if (params.options.style=="default") {
      style = "default";
    } else if (params.options.style=="none") {
      style = false;
    }

    if (style) {
      params.content = runtime.headAppend(params.content, '<meta name="apple-mobile-web-app-status-bar-style" content="'+style+'" />');
    }

    callback(null,params.content);
  };
});