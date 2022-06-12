# Server

### Docker
```sh
# Build
docker build -t server .

# Use --no-cache to force re build
docker build --no-cache -t server .

# Run
# You might need to switch to port 5001 if 5000 is in use in your local machine
docker run --name my-server -d -p 5000:5000 server
```