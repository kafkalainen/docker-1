#!/bin/bash
docker-machine create Korhal \
--driver "virtualbox" \
--virtualbox-cpu-count "2" \
--virtualbox-memory "4096"
docker-machine start Korhal
eval $(docker-machine env Korhal)
