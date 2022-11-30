FROM node:19.1.0

# Set to work as /bin/bash terminal
SHELL ["/bin/bash", "-c"]

# creating the frontend folder
WORKDIR /app/frontend

## copy over the frontend data
COPY . .

## cleaning the cache
RUN npm cache clean --force

## installing global node packages
RUN npm install -g @angular/cli@15.0.1 --silent

### starting the frontend installations
RUN npm install --silent

# exposing the port
EXPOSE 4200

## building the project
RUN npm run build

### starting the service
CMD ["ng", "serve", "--host", "0.0.0.0"]