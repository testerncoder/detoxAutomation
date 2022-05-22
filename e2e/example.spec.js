describe('Example', () => {
  before(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should have home screen', async () => {
    // home title should be visible
    await expect(element(by.id('homeTitle'))).toBeVisible();
  });
  
  it(`home screen should have 'go to store' button`, async () => {
    // 'go to store' button should be visible
    await expect(element(by.id('storeBtn'))).toBeVisible();
    // it should tap on 'go to store' button
    await element(by.id('storeBtn')).tap();  
    // it should navigate to store screen and validate store title is visible
    await expect(element(by.id('storeTitle'))).toBeVisible();

  });
  
});