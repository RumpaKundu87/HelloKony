//startup.js file
var appConfig = {
    appId: "BankAppKonyUI",
    appName: "BankAppKony",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.227.94.83",
    serverPort: "8080",
    secureServerPort: "443",
    url: "http://10.227.94.83:8080/middleware/MWServlet",
    secureurl: "http://10.227.94.83:8080/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    homeScreenGlobals();
    loginScreenGlobals();
    spalshScreenGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 6500
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            spalshScreen.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default"]);
    globalhttpheaders = {};
    callAppMenu();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};