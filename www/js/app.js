  
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        navigator.splashscreen.hide();
        setTimeout(function() {
                navigator.splashscreen.hide();
            }, 2000);
    }