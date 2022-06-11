# Restaurant Management

## Dockerized Environment

Spins up local development environment with `docker compose`.
Reference can be found [here](https://blog.logrocket.com/containerized-development-nestjs-docker/)
```sh
# Start
docker-compose up -d

# Stop all
docker-compose down 
```

This will create:
1. API server
2. `Postgres` databse
3. [pgAdmin](https://www.pgadmin.org/) portal to manage your local databse.

All `postgres` data (tables & data) will stay persistent when starting and stopping docker by utilising docker `volumes`. The data will persist as long as the volumes doesn't get deleted.

### Database
Once `docker-compose` started successfully and Postgres container is up, you can connect to it by:
1. Going to: http://localhost:8080
2. Enter credentials from [docker.db](docker.db) file
3. Click `Ass New Server`
4. Give it a name `local`
5. Switch to `Connection` tab
6. Insert `host.docker.internal` in `Host name` field
7. Insert password from [docker.db](docker.db) file
8. Confirm connection is successful
9. Left side expand: `Servers` > `local` > `Databases` > `restaurant`
```sh
# To ssh to the running postgres container
docker exec -it postgres /bin/bash

# Login to 'restaurant' db
psql -U admin -d restaurant

# To list all tables in selected database run:
\dt
```

This steps are needed to be execute only once. The connection will persist between docker-compose runs as the data will be stored in volumes on the host. To delete all data, simply delete all volumes by running: `docker volume rm $(docker volume ls -q)`