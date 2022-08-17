# Users API
This API allows you to sign up a new user and signin using jwt security.

## Get started

clone the repository into you machine using this command below (And please make sure you are running the master branch):
```
git clone https://github.com/SinethembaDlova/auth-jwt-api.git
```

Now that you have the repository, to make sure the API runs on your machine you will need to install all the dependencies using the command below: 

```
npm install
```

There are unit tests in the `\tests` repository. The unit tests in `\tests` starts up the routes via `supertest` and check that the routes does behave appropriately. **Don't change**  `tests` repository or files in it. To run the test please run the command below 
```
npm test
``` 

And finally to run the API please run the command below:
```
npm start
```