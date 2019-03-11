/// <reference path="../steps.d.ts" />

const dashboardPage = require('../pages/dashboardPage');
const heroDetailsPage = require('../pages/heroDetailsPage');
const heroesPage = require('../pages/heroesPage');
const initialStatePage = require('../pages/initialStatePage');
const messagesPage = require('../pages/messagesPage');

const I = actor();

When(/^I click the "(.*)" button from the top heroes grid$/, function(p1) {
  I.waitForElement(dashboardPage.heroButtonWithName(p1));
  I.click(dashboardPage.heroButtonWithName(p1));
});

Given(/^I see the search bar$/, function() {
  I.seeElement(dashboardPage.searchInput);
});

When(/^I write "(.*)" in the search bar$/, function(p1) {
  I.fillField(dashboardPage.searchInput, p1);
});

When(/^I click on the "(.*)" button from the search result$/, function(p1) {
  I.click(dashboardPage.searchHeroButtonWithName(p1));
});

Then(/^I do not see Messages view$/, function() {
  I.dontSeeElement(messagesPage.rootElement);
});

Given(/^I am on the "(.*)" detail page$/, function(p1) {
  I.amOnPage(heroDetailsPage.heroDetailPageWithId(11));
});

Given(/^I see the "(.*)" in the title$/, function(p1) {
  I.seeInTitle(p1);
});

Given(/^I see the dashboard button$/, function() {
  I.seeElement(initialStatePage.dashboardButton);
  I.seeElement(initialStatePage.heroesButton);
});

Given(/^I see the heroes button$/, function() {
  I.seeElement(initialStatePage.heroesButton);
});

When(/^I click the heroes button$/, function() {
  I.click(initialStatePage.heroesButton);
});

Then(/^I transitioned to the heroes page$/, function() {
  I.seeInCurrentUrl(heroesPage.url);
});

When(/^I click the dashboard button$/, function() {
  I.click(initialStatePage.dashboardButton);
});

When(/^I click the "(.*)" button$/, function(p1) {
  I.amOnPage(heroesPage.url);
  I.waitForElement(heroesPage.heroButtonWithName(p1));
  I.click(heroesPage.heroButtonWithName(p1));
  I.waitForElement(dashboardPage.rootElement);
});

When(/^I click the "(.*)" delete button$/, function(p1) {
  I.click(heroesPage.deleteButtonWithName(p1));
});

Then(/^I do not see the "(.*)" in the heroes list$/, function(p1) {
  I.dontSee(p1);
});

When(/^I type "(.*)" in the add hero bar$/, function(p1) {
  I.fillField(heroesPage.addHeroInput, p1);
});

When(/^I click the add button$/, function() {
  I.click(heroesPage.addButton);
});

Then(/^I see "(.*)" in the heroes list$/, function(p1) {
  I.see(p1);
  I.seeElement(heroesPage.heroButtonWithName(p1));
});

When(/^I type "(.*)" in the name bar$/, function(p1) {
  I.fillField(heroDetailsPage.heroNameInput, p1);
});

When(/^I click the save button$/, function() {
  I.click(heroDetailsPage.saveButton);
});

Then(/^I see the "(.*)" in the top heroes grid$/, function(p1) {
  I.waitForElement(dashboardPage.rootElement);
  I.waitForElement(dashboardPage.heroButtonWithName(p1));
});

When(/^I click the back button$/, function() {
  I.click(heroDetailsPage.backButton);
});

Then(/^I transitioned to the "(.*)" hero details page$/, function(p1) {
  I.amOnPage(initialStatePage.url);
  I.waitForElement(dashboardPage.heroButtonWithName(p1));
  I.click(dashboardPage.heroButtonWithName(p1));
  I.waitForElement(heroDetailsPage.rootElement);
});

Then(/^I see the "(.*)" button in the search result$/, function(p1) {
  I.seeElement(dashboardPage.searchInput);
  I.fillField(dashboardPage.searchInput, p1);
  I.waitForElement(dashboardPage.heroButtonWithName(p1));
});

Then(/^I transitioned to the dashboard page$/, function() {
  I.seeInCurrentUrl(dashboardPage.url);
});

Given(/^I see the dashboard view$/, function() {
  I.see('Top Heroes');
  I.seeElement(dashboardPage.rootElement);
});

Given(/^I see the messages view$/, function() {
  I.amOnPage(messagesPage.url);
  I.waitForElement(messagesPage.rootElement);
});

When(/^I click the clear button$/, function() {
  I.click(messagesPage.clearButton);
});

Then(/^I do not see the messages view$/, function() {
  I.dontSeeElement(messagesPage.rootElement);
});

Given(/^I am on the heroes page$/, function() {
  I.amOnPage(heroesPage.url);
});

Given(/^I am on the dashboard page$/, function() {
  I.amOnPage(initialStatePage.url);
});
