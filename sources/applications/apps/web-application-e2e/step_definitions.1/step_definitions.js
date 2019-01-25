/// <reference path="../steps.d.ts" />

const I = actor();

Given('I have a defined step', () => {
  I.amOnPage('/');
});

Given('I have a second defined step', () => {
  I.amOnPage('/');
});
