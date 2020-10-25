#!/bin/bash

docker-compose down
docker-compose up
aws dynamodb create-table --cli-input-json file://productTable.json --endpoint-url http://localhost:8000
aws dynamodb create-table --cli-input-json file://wishListTable.json --endpoint-url http://localhost:8000
aws dynamodb create-table --cli-input-json file://userTable.json --endpoint-url http://localhost:8000
aws dynamodb batch-write-item --endpoint-url http://localhost:8000  --request-items file://data.json
