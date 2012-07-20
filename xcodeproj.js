define([], function () {
  return function(runtime, params, callback) {

    runtime.infoPlist["UIStatusBarHidden"] = false;
    
    if (params.options.style=="translucent") {
      runtime.infoPlist["UIStatusBarStyle"] = "UIStatusBarStyleBlackTranslucent";
    } else if (params.options.style=="black") {
      runtime.infoPlist["UIStatusBarStyle"] = "UIStatusBarStyleBlackOpaque";
    } else if (params.options.style=="default") {
      runtime.infoPlist["UIStatusBarStyle"] = "UIStatusBarStyleDefault";
    } else if (params.options.style=="none") {
      runtime.infoPlist["UIStatusBarHidden"] = true;
    }

    callback();
  };
});