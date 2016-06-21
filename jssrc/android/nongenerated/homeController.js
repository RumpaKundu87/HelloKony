var isMenuOpened = false;

function populateData() {
    var data = [{
        "name": "Sam",
        "designation": "PA",
        "doj": "1-may-2016",
        "image": "cts_logo.png"
    }, {
        "name": "Jack",
        "designation": "SA",
        "doj": "1-june-2016",
        "image": "cts_logo.png"
    }, {
        "name": "Jerry",
        "designation": "SM",
        "doj": "1-july-2016",
        "image": "cts_logo.png"
    }, {
        "name": "Mathew",
        "designation": "A",
        "doj": "1-may-2016",
        "image": "cts_logo.png"
    }, {
        "name": "James",
        "designation": "M",
        "doj": "1-may-2016",
        "image": "cts_logo.png"
    }, {
        "name": "Sami",
        "designation": "PA",
        "doj": "1-may-2016",
        "image": "cts_logo.png"
    }, {
        "name": "Somi",
        "designation": "PA",
        "doj": "1-june-2016",
        "image": "cts_logo.png"
    }, {
        "name": "Sachin",
        "designation": "PA",
        "doj": "1-aug-2016",
        "image": "cts_logo.png"
    }, {
        "name": "Sam",
        "designation": "PA",
        "doj": "1-may-2016",
        "image": ""
    }, {
        "name": "Sama",
        "designation": "PA",
        "doj": "1-may-2016",
        "image": "cts_logo.png"
    }, {
        "name": "Sylvia",
        "designation": "PA",
        "doj": "1-sep-2016",
        "image": "cts_logo.png"
    }, {
        "name": "Christopher",
        "designation": "PA",
        "doj": "1-may-2016",
        "image": "cts_logo.png"
    }, {
        "name": "Mac",
        "designation": "PA",
        "doj": "1-may-2016",
        "image": "cts_logo.png"
    }, {
        "name": "Adira",
        "designation": "A",
        "doj": "1-may-2016",
        "image": "cts_logo.png"
    }, {
        "name": "Sandy",
        "designation": "PA",
        "doj": "1-may-2016",
        "image": "cts_logo.png"
    }, {
        "name": "Sana",
        "designation": "PA",
        "doj": "1-may-2016",
        "image": "cts_logo.png"
    }];
    homeScreen.idListIView.widgetDataMap = {
        idListRowName: "name",
        idListThumbnail: "image"
    };
    homeScreen.idListIView.setData(data);
    populateMenuData();
}

function onSegmentItemClick() {
    var rowData = homeScreen.idListIView.selectedItems;
    homeScreen.idLblName.text = rowData[0].name;
    homeScreen.idLbldoj.text = rowData[0].doj;
    homeScreen.idLblDesignation.text = rowData[0].designation;
}

function openMenu() {
    homeScreen.idHomeRootContainer.animate(
    kony.ui.createAnimation({
        "100": {
            "left": "80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": function() {}
    });
    isMenuOpened = true;
}

function closeMenu() {
    homeScreen.idHomeRootContainer.animate(
    kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": function() {}
    });
    isMenuOpened = false;
}

function showOrHideMenu() {
    if (isMenuOpened) {
        closeMenu()
    } else {
        openMenu()
    }
}

function populateMenuData() {
    var data = [{
        "name": "Inbox "
    }, {
        "name": "Sent"
    }, {
        "name": "Drafts"
    }, {
        "name": "Bin"
    }, {
        "name": "Settings"
    }, {
        "name": "SignOut"
    }];
    homeScreen.idMenuSegment.widgetDataMap = {
        idLblMenu: "name"
    };
    homeScreen.idMenuSegment.setData(data);
}

function callFoxNewsService() {
    alert("HI service");
    var params = {
        appID: "BankAppKonyUI",
        serviceID: "FoxNews",
        channel: "rc"
    };
    var info = {};
    connHandle = kony.net.invokeServiceAsync(appConfig.url, params, callback, info);
}

function callback(status, results, info) {
    alert("Service call successful  :  " + status);
    if (status == 400) {
        alert("Result is --: " + results);
        /*homeScreen.idListIView.widgetDataMap = {idListRowName : "name", idListThumbnail : "image"};
	homeScreen.idListIView.setData(data);
	populateMenuData();*/
    }
}

function deviceBackButton() {
    alert("device back button pressed");
}