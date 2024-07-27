## GAS Booking Backend API

Gas booking backend API

## API Endpoints

[Gas Booking Backend API](https://gas-booking-api.onrender.com/)

## Dependencies

- bcryptjs
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- nodemon
- express-async-handler

npm i bcryptjs cors dotenv express jsonwebtoken mongoose nodemon express-async-handler

## Testing

npm run start

## .env

- LOCAL_MONGODB_URL= mongodb://localhost:27017/<DBNAME>
- CLOUD_MONGODB_URL= mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>/<DBNAME>?retryWrites=true&w=majorityappName=<CLUSTER>
- PORT=3000
- isLOCAL="false"
- JWT_SECRET=<JWT_SECRET>
- JWT_EXPIRES_IN=1d
