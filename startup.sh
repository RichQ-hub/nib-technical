#!/bin/sh

# If dockerfiles changed or docker image hasn't already been built, we first build the image. This
# ensures that the image stays up to date. Otherwise, `docker-compose up` would simply use the pre-existing
# image (old image) instead of the updated image when we chaged the dockerfile.
docker compose build &&

# Run containers from those images.
docker compose up

# Once exited (Crtl+C), we delete all running containers.
docker compose down