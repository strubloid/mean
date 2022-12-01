FROM mongo:6.0.3

# Set to work as /bin/bash terminal
SHELL ["/bin/bash", "-c"]

# creating the backend folder
WORKDIR /app/database

## copy the users to add
COPY import_database/creating-users.js /docker-entrypoint-initdb.d/creating-users.js
COPY import_database/init.json /init.json

## exposing the port
EXPOSE 27017