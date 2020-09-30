#!/bin/bash
docker build -t mygitlab ./ && docker run -itd --restart=on-failure -p 8080:80 -p 8022:22 -p 8443:443 --privileged mygitlab
