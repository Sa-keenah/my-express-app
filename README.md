# 📦 Express + PostgreSQL User API

A simple RESTful API built with **Express.js** and **PostgreSQL** for managing users. It performs basic CRUD operations and connects to a PostgreSQL database using the `pg` library.

## 📁 Project Structure
my-express-app/
├── db/
│ └── db.js # PostgreSQL connection setup
├── routes/
│ └── users.js # API route handlers for CRUD operations
├── index.js # Main server file
├── .gitignore
├── package.json
└── README.md


---

## ⚙️ Prerequisites

Before running this project, make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- npm (comes with Node.js)


## 🛠️ Setup Instructions
1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Install Dependencies
npm install

3. Create the PostgreSQL Database
CREATE DATABASE mydb;

-- Then create a 'users' table:
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);

4. Configure Database Connection
You can either:
Edit db/db.js and hardcode your PostgreSQL credentials
(Recommended) Create a .env file and add your credentials:
DB_USER=postgres
DB_HOST=localhost
DB_NAME=mydb
DB_PASSWORD=yourpassword
DB_PORT=5432

Update db/db.js like this to use environment variables:
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;

5. Start the Server
npm run dev

or for production:
npm start

Visit: http://localhost:3000

📬 API Endpoints
| Method | Route        | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/users`     | Get all users     |
| GET    | `/users/:id` | Get a user by ID  |
| POST   | `/users`     | Create a new user |
| PUT    | `/users/:id` | Update a user     |
| DELETE | `/users/:id` | Delete a user     |

🧪 Sample JSON for POST / PUT
{
  "name": "Amina Ismail",
  "email": "amna@example.com",
  "age": 30
}

📄 .gitignore (included)
The .gitignore file ensures that sensitive and unnecessary files are excluded from version control:
node_modules/
.env
.vscode/
npm-debug.log*

📖 License
This project is licensed under the ISC License.

🙋‍♀️ Author
Amina Ismail Umar
GitHub: @Sa-keenah

### ✅ What to Do Next:
1. Save the above content in a new file: `README.md`
2. Replace `"your-username"` and `"your-repo-name"` with your actual GitHub info
3. If you haven't yet:
   ```bash
   git add README.md
   git commit -m "Add project README"
   git push