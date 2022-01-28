Feature('login');

Scenario('Login to dribble page', ({ I }) => {
    I.amOnPage('https://dribbble.com/')
    I.click('Sign in');
    I.fillField('login', "erank@email.com");
    I.pressKey('Tab');
    I.fillField('password', "pass12345");
    pause();
    I.pressKey('Enter');
    I.see('We could not find an account matching');

});
