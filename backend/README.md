## WishList Backend

#### Description

This is a backend application that exposes a list of products and a wishList to store favorite items.
Endpoints are being secured using Spring Security and Google Oauth2.

#### Technologies

- Java 8
- Spring Boot
- DynamoDB
- redis

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
aws dynamodb create-table --cli-input-json file://userTable.json --endpoint-url http://localhost:8000
```

**4. Load initial data for products**
```
aws dynamodb batch-write-item --endpoint-url http://localhost:8000  --request-items file://data.json
```


#### Design Decisions

**1. Security**

For security we are integrating with Google Oauth2. The flow to login a user is as follows:

1. In Google we need to set up an account with this url as callback **http://localhost:8080/oauth2/callback/google**
and get a client id and secret. This information is then configured in **application.yml**

2. In frontend, there is a button to click and log in using your Google account. This will invoke this
endpoint **http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect** 
 
3. This endpoint is configured inside Oauth2 client from Spring Oauth2 Client, and will invoke Google server.

4. Once Google authenticates this user, it will call the callback endpoint. This backend application will create
a JWT token and send it back to the frontend.

5. This will hit **http://localhost:3000/oauth2/redirect** in frontend. Look at **App.js** where routes
are configured and **OAuth2RedirectHandler.js**.

6. **OAuth2RedirectHandler.js** will store the token in localStorage and signIn the user in redux state.

7. Frontend will send this token in every request. Look at **product.js** where axios interceptor is configured. 

8. When a request is received in backend, this JWT token is validated. In case user is not authorized, backend
will return unauthorized to frontend.

9. Finally, when user logs out, frontend will update its redux state and invoke **/logout** in backend. 
This will blacklist this token in **redis** to avoid misuse of token in case is stolen.

**2. Databases**

1. **DynamoDB**

    DynamoDB stores 3 tables: Products, Wishlist and User. 

- **Products** will store initial catalog for products
- **Wishlist** will store email and a list of product ids
- **User** will store user information: name, email, image

2. **redis**

    redis is being used to blacklist jwt tokens for logout scenario. In every request we will check if token
    is blacklisted or not and when user logs out we will insert the token in redis with an expiration time.

    Use these commands to query redis:
    ```
    docker exec -it container-id bash
    redis-cli
    keys *
    flushall
    ```

**3. API Documentation**

Go to this url: **http://localhost:8080/swagger-ui.html** to access API documentation in Swagger format.
