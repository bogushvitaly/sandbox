#!/usr/bin/env bash

PROJECT_NAME="sandbox"

helm install --tiller-namespace gitlab-managed-apps-$PROJECT_NAME --namespace gitlab-managed-apps-$PROJECT_NAME --name runner --values values/gitlab-runner-values.yaml gitlab/gitlab-runner
helm install --tiller-namespace gitlab-managed-apps-$PROJECT_NAME --namespace gitlab-managed-apps-$PROJECT_NAME --name s3 --values values/minio-values.yaml stable/minio
helm install --tiller-namespace gitlab-managed-apps-$PROJECT_NAME --namespace gitlab-managed-apps-$PROJECT_NAME --name verdaccio --values values/verdaccio-values.yaml stable/verdaccio