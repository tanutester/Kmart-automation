const openKmartPage = async (path)=> {
    return browser.url(`https://kmart.com.au/${path}`)
}


module.exports = {
    openKmartPage,
}