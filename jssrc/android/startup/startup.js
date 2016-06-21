//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "BankAppKonyUI",
    appName: "BankAppKony",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.2.28",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "BankAppKonyUI",
    isMFApp: false,
    eventTypes: [],
    url: "https://cognizantdigital-dev.konycloud.com/BankAppKonyUI/MWServlet",
    secureurl: "https://cognizantdigital-dev.konycloud.com/BankAppKonyUI/MWServlet"
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
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6500
    })
};

function themeCallBack() {
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            spalshScreen.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes
    }
    kony.setupsdks(sdkInitConfig, null, null);
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;