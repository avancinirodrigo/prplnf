function getToken(name) {
    var allcookies = document.cookie;
    cookiearray = allcookies.split(';');
    for (var i = 0; i < cookiearray.length; i++) {
        let key = cookiearray[i].split('=')[0];
        let value = cookiearray[i].split('=')[1];
        if (key == name) {
            return value;
        }
    }
    return null;
}