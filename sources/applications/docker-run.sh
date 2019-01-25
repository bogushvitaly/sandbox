#!/usr/bin/env bash

docker build -t web-application-ssr -f Dockerfile.ssr .
docker build -t web-application-csr -f Dockerfile.csr .
docker run --name web-application-ssr -d -p 4000:4000 web-application-ssr
docker ps
