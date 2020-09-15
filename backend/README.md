## WishList Backend

#### Description

This is a backend application that exposes a list of products and a wishList to store favorite items.

#### Technologies

- Java 8
- Spring Boot
- DynamoDB (Product and WishList tables)


#### Steps to run:

**1. Build project and run tests**

```
mvn clean install
```

**2. Create docker image**
```
docker build -t miguel/wishlist .
```


**3. Run docker compose**

This will start dynamoDB and application
```
docker-compose up
```

**4. Create tables**

```
aws dynamodb create-table --cli-input-json file://productTable.json --endpoint-url http://localhost:8000
aws dynamodb create-table --cli-input-json file://wishListTable.json --endpoint-url http://localhost:8000
```

**4. Load initial data for products**
```
aws dynamodb batch-write-item --endpoint-url http://localhost:8000  --request-items file://data.json
```
