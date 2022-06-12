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

#### Database
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


## AWS

Deployment to AWS is split to 2 steps:
1. Create the underline infrastructure
2. Deploy docker images to ECS

#### Infra

We use [terraform](https://www.terraform.io/) as our main IaC.
The infrastructure for our app is comprised of:
1. Networking resources such as a VPC, public & private subnets.
2. ECS cluster to host, run and scale our running application as a docker container.
3. RDS Postgres database

##### Prerequisite

1. Install `Terraform` by installing Terraform version manager [tfswitch](https://tfswitch.warrensbox.com/Install/)
2. cd into `infra` and run `tfswitch` cmd.

##### Deployment
To deploy the infrastructure:
1. Authenticate to AWS by setting your credentials:
    ```bash
    $ export AWS_ACCESS_KEY_ID="..."
    $ export AWS_SECRET_ACCESS_KEY="..."
    $ export AWS_REGION="us-west-1"
    ```
2. To deploy to your aws account simply run:
    ```bash
    terraform init
    terraform plan -out plan
    terraform apply
    ```