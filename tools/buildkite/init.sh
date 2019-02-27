#!/usr/bin/env bash

helm repo add buildkite https://buildkite.github.io/charts/

helm repo update

helm install --name bk-agent --namespace buildkite buildkite/agent --set agent.token=$BUILDKITE_AGENT


