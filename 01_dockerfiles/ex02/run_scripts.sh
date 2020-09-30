#!/bin/bash
docker stop testpage
docker rm testpage
docker image rm ft-rails:on-build
docker image rm webpage:latest
docker build -f Dockerfile.onbuild .  --tag ft-rails:on-build && \
docker build . --tag webpage && \
docker run -it --name testpage -p 3000:3000 -d webpage:latest
