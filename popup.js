function getMainDomain(fullUrl){
    try{
        const urlObj = new URL(fullUrl);

        let hostname = urlObj.hostname;

        return hostname.replace('www.' , '');
    } catch(e) {
        return "unkown"
    }
}