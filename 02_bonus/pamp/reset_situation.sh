#!/bin/bash
docker stop pamp_web_1
docker stop pamp_phpmyadmin_1
docker stop pamp_db_1
docker rm pamp_web_1
docker rm pamp_phpmyadmin_1
docker rm pamp_db_1
