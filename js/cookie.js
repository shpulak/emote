function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/emote/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getUniqueResponseId(surveyId) {
    var uniqueResponseId = getCookie("uniqueResponseId");
    if (uniqueResponseId.length < 1) {
        var timeStamp = Date.now();
        uniqueResponseId = "" + surveyId + timeStamp;
        setCookie("uniqueResponseId",uniqueResponseId,90); // 90 day expiration for the cookie
    }
    return uniqueResponseId;
}