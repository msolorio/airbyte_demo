# Airbyte Demo

Demonstration of an airbyte connection flow that pulls data from a source api and pushes it to a postgres database.

install airbyte
```
curl -LsfS https://get.airbyte.com | bash -
abctl local install
```
get credentials
```
abctl local credentials
```

run connected services
```
docker compose up -d
```
