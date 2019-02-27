#!/usr/bin/env bash

kubectl create clusterrolebinding add-on-cluster-admin --clusterrole=cluster-admin --serviceaccount=kube-system:default
kubectl create serviceaccount tiller --namespace kube-system

kubectl apply -f ./tiller-rbac.yaml

helm init --service-account tiller --wait

helm dependency update

export CHE_DOMAIN=$(minikube ip)

helm upgrade --install che --namespace che --set cheImage=eclipse/che-server:latest --set global.cheWorkspacesNamespace="che" --set global.ingressDomain=${CHE_DOMAIN}.nip.io ./

helm upgrade che --set cheImage=eclipse/che-server:nightly --reuse-values .
