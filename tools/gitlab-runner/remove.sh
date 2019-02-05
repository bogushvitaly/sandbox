#!/usr/bin/env bash

PROJECT_NAME="sandbox"

helm delete runner --purge --tiller-namespace gitlab-managed-apps-$PROJECT_NAME
helm delete s3 --purge --tiller-namespace gitlab-managed-apps-$PROJECT_NAME
helm delete verdaccio --purge --tiller-namespace gitlab-managed-apps-$PROJECT_NAME

# kubectl delete pods --namespace gitlab-managed-apps-$PROJECT_NAME --all

# kubectl delete pods --namespace gitlab-managed-apps-$PROJECT_NAME -l app=runner-gitlab-runner