FROM ubuntu:22.04

RUN apt-get -y update && apt-get -y upgrade
RUN apt-get -y install curl wget gnupg systemctl

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

# MongoDB
RUN curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor
RUN echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-7.0.list
RUN apt-get -y update
RUN apt-get install -y mongodb-org

EXPOSE 3000
EXPOSE 8080
EXPOSE 80
EXPOSE 27127