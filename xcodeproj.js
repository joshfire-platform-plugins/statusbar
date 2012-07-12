/**
 * @fileoverview xcodeproj hook that sets status bar parameters
 */
define([], function () {
  return function (runtime, params, callback) {
    runtime.readPlist("Project/Info.plist",function(err,data) {
      if (err) return callback(err);

      data["UIStatusBarStyle"] = params.options.iosstyle || "UIStatusBarStyleDefault";
      data["UIStatusBarHidden"] = !!params.options.starthidden;

      runtime.writePlist("Project/Info.plist",data,callback);
    });
  };
});
