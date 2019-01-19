module.exports = function() {
  this.Before(function(scenario) {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
  });

  this.After(function(scenario) {
    this.actionwords = null;
  });

  this.Given(/^I am on Tour of Heroes$/, function(callback) {
    this.actionwords.iAmOnTourOfHeroes();
    callback();
  });

  this.Given(/^I see the dashboard$/, function(callback) {
    this.actionwords.iSeeTheDashboard();
    callback();
  });

  this.When(/^I click on "(.*)" button from top heroes grid$/, function(p1, callback) {
    this.actionwords.iClickOnP1ButtonFromTopHeroesGrid(p1);
    callback();
  });

  this.Then(/^I am on the "(.*)" hero details page$/, function(p1, callback) {
    this.actionwords.iAmOnTheP1HeroDetailsPage(p1);
    callback();
  });

  this.Given(/^I see the search bar$/, function(callback) {
    this.actionwords.iSeeTheSearchBar();
    callback();
  });

  this.When(/^I write "(.*)" in the search bar$/, function(p1, callback) {
    this.actionwords.iWriteP1InTheSearchBar(p1);
    callback();
  });

  this.Given(/^I see "(.*)" button in the search result$/, function(p1, callback) {
    this.actionwords.iSeeP1ButtonInTheSearchResult(p1);
    callback();
  });

  this.When(/^I click on the "(.*)" button from the search result$/, function(p1, callback) {
    this.actionwords.iClickOnTheP1ButtonFromTheSearchResult(p1);
    callback();
  });

  this.When(/^I click on the clear button$/, function(callback) {
    this.actionwords.iClickOnTheClearButton();
    callback();
  });

  this.Then(/^I can't see the messages page anymore$/, function(callback) {
    this.actionwords.iCantSeeTheMessagesPageAnymore();
    callback();
  });

  this.Given(/^I am on the toh heroes page$/, function(callback) {
    this.actionwords.iAmOnTheTohHeroesPage();
    callback();
  });

  this.Given(/^I see the message page$/, function(callback) {
    this.actionwords.iSeeTheMessagePage();
    callback();
  });

  this.Given(/^I am on the "(.*)" detail page$/, function(p1, callback) {
    this.actionwords.iAmOnTheP1DetailPage(p1);
    callback();
  });

  this.Given(/^I see that the page has the title "(.*)"$/, function(p1, callback) {
    this.actionwords.iSeeThatThePageHasTheTitleP1(p1);
    callback();
  });

  this.Given(/^I see the Dashboard button$/, function(callback) {
    this.actionwords.iSeeTheDashboardButton();
    callback();
  });

  this.Given(/^I see the Heroes button$/, function(callback) {
    this.actionwords.iSeeTheHeroesButton();
    callback();
  });

  this.When(/^I click on heroes button$/, function(callback) {
    this.actionwords.iClickOnHeroesButton();
    callback();
  });

  this.Then(/^I am on the heroes page$/, function(callback) {
    this.actionwords.iAmOnTheHeroesPage();
    callback();
  });

  this.When(/^I click on dashboard button$/, function(callback) {
    this.actionwords.iClickOnDashboardButton();
    callback();
  });

  this.Then(/^I am on the dashboard page$/, function(callback) {
    this.actionwords.iAmOnTheDashboardPage();
    callback();
  });

  this.When(/^I click on the "(.*)" button$/, function(p1, callback) {
    this.actionwords.iClickOnTheP1Button(p1);
    callback();
  });

  this.When(/^I click on the "(.*)" delete button$/, function(p1, callback) {
    this.actionwords.iClickOnTheP1DeleteButton(p1);
    callback();
  });

  this.Then(/^I can't see "(.*)" in the heroes list anymore$/, function(p1, callback) {
    this.actionwords.iCantSeeP1InTheHeroesListAnymore(p1);
    callback();
  });

  this.When(/^I write "(.*)" in the add bar$/, function(p1, callback) {
    this.actionwords.iWriteP1InTheAddBar(p1);
    callback();
  });

  this.When(/^I click on the add button$/, function(callback) {
    this.actionwords.iClickOnTheAddButton();
    callback();
  });

  this.Then(/^I can see "(.*)" in the heroes list$/, function(p1, callback) {
    this.actionwords.iCanSeeP1InTheHeroesList(p1);
    callback();
  });

  this.When(/^I type "(.*)" in the name bar$/, function(p1, callback) {
    this.actionwords.iTypeP1InTheNameBar(p1);
    callback();
  });

  this.When(/^I click on the save button$/, function(callback) {
    this.actionwords.iClickOnTheSaveButton();
    callback();
  });

  this.Then(/^I come back to the dashboard page$/, function(callback) {
    this.actionwords.iComeBackToTheDashboardPage();
    callback();
  });

  this.Then(/^I can see "(.*)" in the top heroes grid$/, function(p1, callback) {
    this.actionwords.iCanSeeP1InTheTopHeroesGrid(p1);
    callback();
  });

  this.When(/^I click on the back button$/, function(callback) {
    this.actionwords.iClickOnTheBackButton();
    callback();
  });

  this.Then(/^I can see "(.*)" button in the search result$/, function(p1, callback) {
    this.actionwords.iCanSeeP1ButtonInTheSearchResult(p1);
    callback();
  });
};
