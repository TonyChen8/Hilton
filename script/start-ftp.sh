#!/bin/bash

docker run -d -v  /home/ubuntu/www/Hilton/laravel/public/:/home/vsftpd \
-p 20-21:20-21 -p 21100-21110:21100-21110 \
-e FTP_USER=bosco -e FTP_PASS=hilton \
-e PASV_ADDRESS=172.31.13.190 \
-e PASV_MIN_PORT=21100 -e PASV_MAX_PORT=21110 \
-e FILE_OPEN_MODE=0666 \
-e LOCAL_UMASK=0 \
--name ftp --restart=always fauria/vsftpd
