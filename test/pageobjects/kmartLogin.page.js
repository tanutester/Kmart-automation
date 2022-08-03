const KmartPage = require("./page");
const openloginPage = async () => {
    await KmartPage.openKmartPage(" ");
    //await ('[class="right-container"]a:nth-child(4)').click();

};

const enterLoginDetails = async (
    Kmart_username,
    Kmart_password) => {

        const btn = await $('[data-testid="header-kmart-icons"] a:nth-child(4)');
        btn.click();
        await (await $('.login-form-container')).waitForDisplayed({timeout:5000});
        await (await $('input[id="emailLogin"]')).setValue(Kmart_username);
        await (await $('input[id="password"]')).setValue(Kmart_password);
        await (await $('button[id="sign-in-btn"]')).click();
        
    };  


module.exports = {
    openloginPage,
    enterLoginDetails
};