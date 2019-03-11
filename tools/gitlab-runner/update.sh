#!/usr/bin/env bash

PROJECT_NAME="sandbox"

helm upgrade --tiller-namespace gitlab-managed-apps-$PROJECT_NAME --namespace gitlab-managed-apps-$PROJECT_NAME -f values/gitlab-runner-values.yaml runner gitlab/gitlab-runner
helm upgrade --tiller-namespace gitlab-managed-apps-$PROJECT_NAME --namespace gitlab-managed-apps-$PROJECT_NAME -f values/minio-values.yaml s3 stable/minio
helm upgrade --tiller-namespace gitlab-managed-apps-$PROJECT_NAME --namespace gitlab-managed-apps-$PROJECT_NAME -f values/verdaccio-values.yaml verdaccio stable/verdaccio