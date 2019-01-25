#!/usr/bin/env bash

PROJECT_NAME="sandbox"

kubectl create namespace gitlab-managed-apps-$PROJECT_NAME
kubectl create serviceaccount gitlab-managed-apps-$PROJECT_NAME --namespace gitlab-managed-apps-$PROJECT_NAME
kubectl create clusterrolebinding gitlab-cluster-admin --clusterrole=cluster-admin --group=system:serviceaccounts --namespace=gitlab-managed-apps-$PROJECT_NAME
helm init --tiller-namespace gitlab-managed-apps-$PROJECT_NAME
helm repo add gitlab https://charts.gitlab.io
