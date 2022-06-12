# Server

### Docker
```sh
# Build
docker build -t server .

# Use --no-cache to force re build
docker build --no-cache -t server .


# Run
docker run --name my-server -d -p 3000:3000 server  
```