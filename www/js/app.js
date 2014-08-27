  // Wait for device API libraries to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        navigator.splashscreen.hide();
        setTimeout(function() {
                navigator.splashscreen.hide();
            }, 2000);
    }