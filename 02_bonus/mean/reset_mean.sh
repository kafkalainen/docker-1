#!/bin/bash
sudo rm -rf db_data/*
docker stop mean_angular_1
docker stop mean_db_1
docker stop mean_express_1
docker rm mean_angular_1
docker rm mean_db_1
docker rm mean_express_1
docker image rm mean_angular:latest
docker image rm mean_express:latest
docker-compose up -d
