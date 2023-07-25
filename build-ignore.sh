#!/bin/bash

if [[ $HEAD == "changeset-release" ]]
then
  exit 0
else
  exit 1
fi
