# Google OAuth2.0 login example

This example shows a Google Login from a separate login route outside of react.
Once login has completed succesfully it closes google auth popup and routes user into react app.
This adds a secure react app with google authentication using session cookies.

## Available Scripts

Open 2 terminal windows and run both servers.

- Express server

- cd server
- yarn start

- Create React App development server
  - cd client
  - yarn start

### `yarn start`

Run Express server to test login locally running localhost:8081.

When developing frontend React run development server
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Note this uses CRA proxy so you will not be able to test regular routes from express only apis that are been proxied.

### `yarn build`

Builds the app for production to the `build` folder.\
if testing login locally using express localhost:8081 then you will need to run build evertime you make changes to React front end code.
