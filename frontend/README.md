## WishList FrontEnd

#### Description

This is a frontend application that lists products and favorite items in a wishlist.

#### Technologies

- React
- Redux
- Material UI
- Jest
- Enzyme

#### Steps to run:

**1. Create docker container**

```
docker build -t miguel/wishlist-frontend .
```

**2. Run docker container**
```
docker run -p 3000:80 miguel/wishlist-frontend
```

**3. Open your browser and go to**
```
http://localhost:3000/login
```

**4. Log in with your gmail account**

Use your gmail account to use the application.

**5. Enjoy the app**

#### Design Decisions:

**1. Security**

Endpoints are being secured in backend and frontend. Backend secures endpoints by requiring frontend to send a JWT 
token in every request. This is being accomplished by **axios** interceptors. Look at **./apis/products.js** for more
details.

In frontend side, routes are protected by using **./common/PrivateRoute.js** component in **App.js** routing configuration.
If you try to access **/products** enddpoint without being authenticated, you will be redirected to login page.

After successfully login in backend, this endpoint is hit **/oauth2/redirect** and **./components/login/OAuth2RedirectHandler.js**
will store JWT token in local storage and call **signIn** action to update state in redux store.


**2. State Management**

State is managed by **redux**. Look at **./actions** for all available actions, and **./reducers** for all reducers. Bear in mind
that reducers are combined in **./reducers/index.js**. To use redux aditional configuration is needed, please look at
**./Root.js** for more boilerplate code including the use of **thunk** as a middleware.

Also, in every class where state is needed we require to make some configuration. For example, take a look at **./pages/ProductsPage.js**
for more details about **connect** and **mapStateToProps**.


**3. Tests**

```
npm test
```