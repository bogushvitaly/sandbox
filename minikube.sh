#!/usr/bin/env bash

minikube status && kubectl cluster-info || minikube start --cpus 4 --memory 8192 --disk-size "30g"
