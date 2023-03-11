function getToken(name) {
    var allcookies = document.cookie;   
    cookiearray = allcookies.split(';');
    for(var i=0; i<cookiearray.length; i++) {
        let key = cookiearray[i].split('=')[0];
        let value = cookiearray[i].split('=')[1];
        console.log("Key is : " + name + " and Value is : " + value);
        if(key == name) {
            return value;
        }
    }    
    return null;
}