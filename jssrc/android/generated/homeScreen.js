//Form JS File
function homeScreen_homeScreen_postshow_seq0(eventobject) {
    callFoxNewsService.call(this);
};

function homeScreen_homeScreen_onDeviceMenu_seq0(eventobject) {
    deviceBackButton.call(this);
};

function homeScreen_idListIView_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onSegmentItemClick.call(this);
};

function homeScreen_idMenuIcon_onTouchEnd_seq0(eventobject, x, y) {
    callFoxNewsService.call(this);
};

function addWidgetshomeScreen() {
    var idMenuSegmentbox = new kony.ui.FlexContainer({
        "id": "idMenuSegmentbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "70dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var idMenuSegment = new kony.ui.SegmentedUI2({
        "id": "idMenuSegment",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "idLblMenu": "idLblMenu"
        },
        "data": [{
            "idLblMenu": "Label"
        }, {
            "idLblMenu": "Label"
        }, {
            "idLblMenu": "Label"
        }],
        "Location": "[0,0]",
        "rowTemplate": idMenuSegmentbox,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    var idLblMenu = new kony.ui.Label({
        "id": "idLblMenu",
        "top": "9dp",
        "left": "38dp",
        "centerX": "50%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slLabel"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 96
    }, {
        "textCopyable": false
    });
    idMenuSegmentbox.add(
    idLblMenu);
    var idMenuContainer = new kony.ui.FlexContainer({
        "id": "idMenuContainer",
        "top": "0dp",
        "left": "0dp",
        "width": "80%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    idMenuContainer.setDefaultUnit(kony.flex.DP)
    idMenuContainer.add(
    idMenuSegment);
    var idListIViewbox = new kony.ui.FlexContainer({
        "id": "idListIViewbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "80dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var idListIView = new kony.ui.SegmentedUI2({
        "id": "idListIView",
        "left": "0dp",
        "bottom": "0dp",
        "width": "100%",
        "height": "50%",
        "zIndex": 2,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "idListRowName": "idListRowName",
            "idListThumbnail": "idListThumbnail"
        },
        "data": [{
            "idListRowName": "Label",
            "idListThumbnail": "imagedrag.png"
        }, {
            "idListRowName": "Label",
            "idListThumbnail": "imagedrag.png"
        }, {
            "idListRowName": "Label",
            "idListThumbnail": "imagedrag.png"
        }],
        "Location": "[0,225]",
        "rowTemplate": idListIViewbox,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "onRowClick": homeScreen_idListIView_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    var idListRowName = new kony.ui.Label({
        "id": "idListRowName",
        "top": "28dp",
        "left": "70dp",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "CopyslLabel0ae24af2eb3d145"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 76
    }, {
        "textCopyable": false
    });
    var idListThumbnail = new kony.ui.Image2({
        "id": "idListThumbnail",
        "top": "5dp",
        "left": "10dp",
        "width": "50dp",
        "height": "50dp",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": "imagedrag.png"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 23
    }, {});
    idListIViewbox.add(
    idListRowName, idListThumbnail);
    var idLblName = new kony.ui.Label({
        "id": "idLblName",
        "top": "0",
        "centerX": "50%",
        "centerY": "20%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Sam",
        "skin": "CopyslLabel0271604d5f4b34f"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var idLblDesignation = new kony.ui.Label({
        "id": "idLblDesignation",
        "top": "0dp",
        "left": "0dp",
        "centerX": "50%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "PA",
        "skin": "CopyslLabel04d690c17f1d344"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var idLbldoj = new kony.ui.Label({
        "id": "idLbldoj",
        "top": "0",
        "left": "0",
        "centerX": "50%",
        "centerY": "75%",
        "zIndex": 1,
        "isVisible": true,
        "text": "1-May-2016",
        "skin": "CopyslLabel0d450904df7ec41"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var idMiddleContainer = new kony.ui.FlexContainer({
        "id": "idMiddleContainer",
        "top": "0",
        "left": "0",
        "width": "60.94%",
        "height": "152dp",
        "centerX": "50.00%",
        "centerY": "27.50%",
        "zIndex": 2,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[88,47]",
        "skin": "idContainer1",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    idMiddleContainer.setDefaultUnit(kony.flex.DP)
    idMiddleContainer.add(
    idLblName, idLblDesignation, idLbldoj);
    var idScrollContainer = new kony.ui.FlexScrollContainer({
        "id": "idScrollContainer",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "100.0%",
        "zIndex": 5,
        "isVisible": true,
        "enableScrolling": true,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "horizontalScrollIndicator": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "Location": "[0,0]",
        "skin": "CopyslFSbox022828301c29d40",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    idScrollContainer.setDefaultUnit(kony.flex.DP);
    idScrollContainer.add(
    idListIView, idMiddleContainer);
    var idLblTitle = new kony.ui.Label({
        "id": "idLblTitle",
        "top": "9dp",
        "left": "134dp",
        "centerX": "50%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Title",
        "skin": "skinLblTitle"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var idMenuIcon = new kony.ui.Image2({
        "id": "idMenuIcon",
        "top": "14dp",
        "left": "20dp",
        "width": "56dp",
        "height": "35dp",
        "centerX": "9.38%",
        "centerY": "50.00%",
        "zIndex": 1,
        "isVisible": true,
        "onTouchEnd": homeScreen_idMenuIcon_onTouchEnd_seq0,
        "src": "menu_icon.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var idHeaderContainer = new kony.ui.FlexContainer({
        "id": "idHeaderContainer",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "45dp",
        "zIndex": 6,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "CopyslFbox01d9e71e103c244",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    idHeaderContainer.setDefaultUnit(kony.flex.DP)
    idHeaderContainer.add(
    idLblTitle, idMenuIcon);
    var idHomeRootContainer = new kony.ui.FlexContainer({
        "id": "idHomeRootContainer",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "100%",
        "zIndex": 5,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    idHomeRootContainer.setDefaultUnit(kony.flex.DP)
    idHomeRootContainer.add(
    idScrollContainer, idHeaderContainer);
    homeScreen.add(
    idMenuContainer, idHomeRootContainer);
};

function homeScreenGlobals() {
    var MenuId = [];
    homeScreen = new kony.ui.Form2({
        "id": "homeScreen",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "CopyslForm0ddbf1422455944",
        "postShow": homeScreen_homeScreen_postshow_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetshomeScreen
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "onDeviceMenu": homeScreen_homeScreen_onDeviceMenu_seq0,
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
    homeScreen.setDefaultUnit(kony.flex.DP);
};