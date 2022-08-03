const LoginPage = require("../pageobjects/kmartLogin.page");

describe("Kmart login page", () => {
    before(async () => {
        await LoginPage.openloginPage();
    });

    it("should login with valid credentials", async () => {
        await LoginPage.enterLoginDetails(
            process.env.KMART_USERNAME,
            process.env.KMART_PASSWORD
        );
        await browser.pause(5000);
    });
});
