// DEPRECATED (2012-07-12): to be removed once new add-ons system is up
module.exports = {
  "xcodeproj":function(runtime,params,callback) {

    runtime.readPlist("Project/Info.plist",function(err,data) {
      if (err) return callback(err);

      data["UIStatusBarStyle"] = params.options.iosstyle || "UIStatusBarStyleDefault";
      data["UIStatusBarHidden"] = !!params.options.starthidden;

      runtime.writePlist("Project/Info.plist",data,callback);
    });
        

  }
};
