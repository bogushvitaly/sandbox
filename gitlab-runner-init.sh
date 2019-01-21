#!/usr/bin/env bash

PROJECT_NAME="sandbox"

kubectl create namespace gitlab-managed-apps
kubectl create serviceaccount gitlab-managed-apps --namespace gitlab-managed-apps
kubectl create clusterrolebinding gitlab-cluster-admin --clusterrole=cluster-admin --group=system:serviceaccounts --namespace=gitlab-managed-apps
helm init --tiller-namespace gitlab-managed-apps
helm repo add gitlab https://charts.gitlab.io
helm install --tiller-namespace gitlab-managed-apps --namespace gitlab-managed-apps --name s3 --values minio-values.yaml stable/minio
helm install --tiller-namespace gitlab-managed-apps --namespace gitlab-managed-apps --name runner --values gitlab-runner-values.yaml gitlab/gitlab-runner

# helm upgrade --tiller-namespace gitlab-managed-apps --namespace gitlab-managed-apps -f minio-values.yaml s3 stable/minio
# helm upgrade --tiller-namespace gitlab-managed-apps --namespace gitlab-managed-apps -f gitlab-runner-values.yaml runner gitlab/gitlab-runner

# kubectl delete pods --namespace gitlab-managed-apps -l app=minio
# kubectl delete pods --namespace gitlab-managed-apps -l app=runner-gitlab-runner