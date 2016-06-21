//Form JS File
function loginScreen_idLoginBtn_onClick_seq0(eventobject) {
    validateLoginDetails.call(this);
};

function addWidgetsloginScreen() {
    var idLogo = new kony.ui.Image2({
        "id": "idLogo",
        "top": "19dp",
        "left": "14dp",
        "width": "82dp",
        "height": "76dp",
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
        "containerWeight": 17
    }, {});
    var idUserName = new kony.ui.TextBox2({
        "id": "idUserName",
        "top": "27dp",
        "left": "12dp",
        "width": "260dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Username",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "slTextBox"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var idPassword = new kony.ui.TextBox2({
        "id": "idPassword",
        "top": "18dp",
        "left": "11dp",
        "width": "260dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": true,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "maxTextLength": 8,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Password",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "slTextBox"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var idLoginBtn = new kony.ui.Button({
        "id": "idLoginBtn",
        "top": "35dp",
        "left": "142dp",
        "width": "223dp",
        "height": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Login",
        "skin": "CopyslButtonGlossBlue05259d6184d234c",
        "focusSkin": "slButtonGlossRed",
        "onClick": loginScreen_idLoginBtn_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var FlexContainer074ad80d704794f = new kony.ui.FlexContainer({
        "id": "FlexContainer074ad80d704794f",
        "top": "95dp",
        "left": "0dp",
        "width": "100%",
        "height": "240dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,95]",
        "skin": "slFbox",
        "layoutType": kony.flex.FLOW_VERTICAL
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer074ad80d704794f.setDefaultUnit(kony.flex.DP)
    FlexContainer074ad80d704794f.add(
    idUserName, idPassword, idLoginBtn);
    loginScreen.add(
    idLogo, FlexContainer074ad80d704794f);
};

function loginScreenGlobals() {
    var MenuId = [];
    loginScreen = new kony.ui.Form2({
        "id": "loginScreen",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "CopyslForm0082065ca241d46",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsloginScreen
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        }
    });
    loginScreen.setDefaultUnit(kony.flex.DP);
};