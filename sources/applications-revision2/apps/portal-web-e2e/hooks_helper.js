/// <reference path="../steps.d.ts" />

const event = require("codeceptjs").event;

const request = require("request");

module.exports = function() {
  event.dispatcher.on(event.suite.before, function(test) {
    request({
      baseUrl: process.env.APPLICATION_API_URL,
      method: "POST",
      url: "/heroes/restore",
      json: {}
    });
  });
};
