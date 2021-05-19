#!/bin/sh

/usr/local/bin/docker-compose -f /home/ubuntu/www/Hilton/docker-compose.yml up -d

/home/ubuntu/www/Hilton/script/start-ftp.sh
/usr/bin/docker start ftp

exit 0
