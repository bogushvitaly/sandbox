#!/usr/bin/env bash

# docker stop frontend
# docker rm -v frontend
docker build -t frontend-ssr -f Dockerfile.ssr .
docker build -t frontend-csr -f Dockerfile.csr .
docker run --name frontend-ssr -d -p 4000:4000 frontend-ssr
docker ps
