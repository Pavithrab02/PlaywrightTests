import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';


import { faker } from '@faker-js/faker';


test('Verify Contact form submission', async ({ page }) => {
  
  await page.goto('https://www.demoblaze.com/');
  await page.context().clearCookies();
  await page.setViewportSize({ width: 1280, height: 720 });


  const randomEmail = 'pavijnv2002@gmail.com'; // or faker.internet.email();
  const randomName = faker.person.fullName();
  const randomMessage = faker.lorem.sentence();

  console.log('Generated Email:', randomEmail);
  console.log('Generated Name:', randomName);
  console.log('Generated Message:', randomMessage);


  const homePage = new HomePage(page);
  await homePage.clickContact();

  const contactPage = new ContactPage(page);
  await contactPage.setContactEmail(randomEmail);
  await contactPage.setContactName(randomName);
  await contactPage.setMessage(randomMessage);
  await contactPage.clickSendMessage();

  
});