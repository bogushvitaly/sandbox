#!/usr/bin/env bash

NAME="sandbox"

minikube status && kubectl cluster-info || minikube start --cpus 4 --memory 8192 --disk-size "30g"

helm init
helm repo add gitlab https://charts.gitlab.io

kubectl create clusterrolebinding gitlab-cluster-admin --clusterrole=cluster-admin --group=system:serviceaccounts --namespace=gitlab

helm del --purge gitlab-runner-$NAME
kubectl delete namespace gitlab

helm install --namespace gitlab --name gitlab-runner-$NAME -f ./gitlab-runner-values.yml gitlab/gitlab-runner