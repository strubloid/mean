FROM node:19.1.0

# Set to work as /bin/bash terminal
SHELL ["/bin/bash", "-c"]

# creating the backend folder
WORKDIR /app/backend

## copy over the backend data
COPY . .

## cleaning the cache
RUN npm cache clean --force

## installing global node packages
RUN npm install -g nodemon tsc --silent

### starting the backend installations
RUN npm install --silent

# exposing the port
EXPOSE 3000

### starting the service
ENTRYPOINT ["bash", "start.sh"]

