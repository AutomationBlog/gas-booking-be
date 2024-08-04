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
- razorpay

npm i bcryptjs cors dotenv express jsonwebtoken mongoose nodemon express-async-handler razorpay

## Testing

npm run start

## .env

        LOCAL_MONGODB_URL= mongodb://localhost:27017/DBNAME
        CLOUD_MONGODB_URL= mongodb+srv://USERNAME:PASSWORD@CLUSTER/DBNAME?retryWrites=true&w=majorityappName=CLUSTER
        PORT=3000
        isLOCAL="false"
        JWT_SECRET=JWT_SECRET
        JWT_EXPIRES_IN=1d
        RAZORPAY_KEY_ID=KEY_ID
        RAZORPAY_KEY_SECRET=KEY_SECRET

## API Endpoints

- /api/auth/register - Register new user
- /api/auth/login - Login user
- /priofile/update - Update user profile
- /priofile/get/:email- Get user profile
- /booking/get/all - Get all user bookings for admin
- /booking/:id - Get booking using username
- /booking/create - Create booking by user
- /booking/:id - Update booking using booking id by both user and admin
- /booking/:id - Delete booking using booking id by both user and admin
- /payment/orders - Create order for payment
- /payment/verify - Verify payment using order id
