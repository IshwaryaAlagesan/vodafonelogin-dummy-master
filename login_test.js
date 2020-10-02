
Feature('Login');

Scenario('test something', (I) => {
I.amOnPage('/')
I.fillField("//input[@id='pt1:username::content']","gopinathan.kasiviswanathan@vodafone.com")
I.fillField("//input[@id='pt1:password::content']","Welcome1$")
I.click("//button[@id='pt1:submit']")
I.waitForText('Welcome, to Vodafone Business Portal',30)
I.click("//a[contains(text(),'Orders')]")
I.click("//a[contains(text(),'Create new order')]")
I.waitForText("Page load error",10)
I.see("Page load error")
I.click("//div[@class='vfuk-Header__links-list']//a[1]")
I.click("//a[contains(text(),'Log Out')]")
I.click("//span[contains(text(),'Log Out')]")
I.waitForText("Log in to Vodafone OnePortal",10)

I.see("Log in to Vodafone OnePortal")

});
