#!/bin/bash
sudo docker run \
--hostname gitlab.example.com \
--publish 443:443 --publish 80:80 --publish 22:22 \
--restart always \
--volume $GITLAB_HOME/config:/etc/gitlab \
--volume $GITLAB_HOME/logs:/var/log/gitlab \
--volume $GITLAB_HOME/data:/var/opt/gitlab \
-d lovemachine:latest
