#!/bin/bash

sudo ln -s /home/ubuntu/www/Hilton/script/start-docker.service /etc/systemd/system/start-docker.service

sudo systemctl daemon-reload
sudo systemctl enable start-docker.service
