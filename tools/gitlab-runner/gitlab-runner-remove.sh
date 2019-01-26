#!/usr/bin/env bash

PROJECT_NAME="sandbox"

# kubectl delete pods --namespace gitlab-managed-apps-$PROJECT_NAME -l app=minio
# kubectl delete pods --namespace gitlab-managed-apps-$PROJECT_NAME -l app=runner-gitlab-runner
kubectl delete pods --namespace gitlab-managed-apps-$PROJECT_NAME --all
