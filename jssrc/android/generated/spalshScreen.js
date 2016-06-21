//Form JS File
function spalshScreen_spalshScreen_postshow_seq0(eventobject) {
    slideDown.call(this);
};

function addWidgetsspalshScreen() {
    var imgLogo = new kony.ui.Image2({
        "id": "imgLogo",
        "top": "-152dp",
        "left": "111dp",
        "width": "150dp",
        "height": "150dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "src": "cts_logo.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    spalshScreen.add(
    imgLogo);
};

function spalshScreenGlobals() {
    var MenuId = [];
    spalshScreen = new kony.ui.Form2({
        "id": "spalshScreen",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "CopyslForm050aa1e8d14e742",
        "postShow": spalshScreen_spalshScreen_postshow_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsspalshScreen
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
    spalshScreen.setDefaultUnit(kony.flex.DP);
};