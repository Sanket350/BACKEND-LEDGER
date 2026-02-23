📌 Project Description

Backend Ledger API is a RESTful backend application built using Node.js, Express.js, and MongoDB. 
It provides secure user authentication and ledger management functionality. 
Users can register, login, and manage ledger entries securely using JWT authentication.

🚀 Features

- User Registration

- User Login & Logout

- JWT Authentication

- Add Ledger Entry

- View Ledger Entries

- Update Ledger Entry

- Delete Ledger Entry

- Secure API using middleware

- Cookie-based authentication

  

🛠️ Technologies Used

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Token)

Cookie-parser

dotenv

bcryptjs

📂 Project Structure
backend-ledger/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── .env
├── server.js
└── package.json


🔒 Authentication

- This project uses JWT authentication. Token is stored in cookies and verified using middleware.

Auth APIs

* Register User
- POST /api/auth/register
- Description: Register a new user
- Protected: No

* Login User
- POST /api/auth/login
- Description: Login user
- Protected: No

* Logout User
- POST /api/auth/logout
- Description: Logout user
- Protected: Yes

Account APIs
* Create Account
- POST /api/accounts/
- Description: Create new account
- Protected: Yes

* Get User Accounts
- GET /api/accounts/
- Description: Get all accounts of logged-in user
- Protected: Yes

* Get Account Balance
- GET /api/accounts/balance/:accountId
- Description: Get balance of specific account
- Protected: Yes

* Transaction APIs
- Create Transaction
- POST /api/transactions/
- Description: Create new transaction
- Protected: Yes

* Create Initial Funds (System)
- POST /api/transactions/system/initial-funds
- Description: Add initial funds to account (system only)
- Protected: Yes (System user only)


🧪 Testing

You can test APIs using:
- Postman
