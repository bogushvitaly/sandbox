#!/usr/bin/env bash

gsutil cors set cors.json gs://sandbox-50983.appspot.com/
gsutil acl ch -u AllUsers:R gs://sandbox-50983.appspot.com/**
