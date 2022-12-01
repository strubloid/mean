FROM mongo

# creating the backend folder
WORKDIR /app/database

COPY init.json /init.json

CMD mongoimport --host=mongo_db --port=27017 \
             --db=backend_database -u=admin -p=admin -c=postmodels \
             --type json --jsonArray --file="/init.json"
