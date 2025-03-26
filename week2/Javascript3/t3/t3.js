function Information(){
    const divTarget = document.getElementById("target");
    const browserChk = navigator.userAgent;
    
    let browserName = "";
    let browserVer = "";
    let osName = "";

    const width = window.screen.availWidth;
    const height = window.screen.availHeight;

    // Detect browser
    if (browserChk.includes("Chrome")){
        browserName = "Chrome";
    } else if (browserChk.includes("Firefox")) {
        browserName = "Firefox";
    } else if (browserChk.includes("Safari")) {
        browserName = "Safari";
    } else if (browserChk.includes("Edg")) {
        browserName = "MS Edge";
    } else if (browserChk.includes("Internet Explorer")) {
        browserName = "MS Internet Esplorer";
    } else {
        browserName = "Unknown browser";
    }

    // Detect opeating system
    if (browserChk.includes("Windows NT 10.0")) {
        osName = "Windows 10";
    } else if (browserChk.includes("Windows NT 6.3")) {
        osName = "Windows 8.1";
    } else if (browserChk.includes("Windows NT 6.2")) {
        osName = "Windows 8";
    } else if (browserChk.includes("Windows NT 6.1")) {
        osName = "Windows 7";
    } else if (browserChk.includes("Mac OS X")) {
        osName = "Mac OS X";
    } else if (browserChk.includes("Linux")) {
        osName = "Linux";
    } else if (browserChk.includes("Android")) {
        osName = "Android";
    } else if (browserChk.includes("like Mac OS X")) {
        osName = "iOS";
    } else {
        osName = "Unknown OS";
    }

    const time = new Date();
    const finnishDatetime = new Intl.DateTimeFormat("fi-FI", {
        dateStyle: "long",
        timeStyle: "medium",
    }).format(time);

    const pBrowser = document.createElement("p");
    const pOs = document.createElement("p");
    const pScreen = document.createElement("p");
    const pTime = document.createElement("p");


    pBrowser.textContent = `Browsers: ${browserName}`;
    divTarget.appendChild(pBrowser);

    pOs.textContent = `Operating system: ${osName}`;
    divTarget.appendChild(pOs);

    pScreen.textContent = `Available screen space for browser: ${width} x ${height}`;
    divTarget.appendChild(pScreen);

    pTime.textContent = `Date: ${finnishDatetime}`
    divTarget.appendChild(pTime);

}

Information();