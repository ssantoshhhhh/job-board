# MERN Stack App

A basic MERN (MongoDB, Express.js, React.js, Node.js) stack application.

## 📝 About

This is a full-stack web app built using the MERN stack. It includes:

- React for the frontend  
- Express.js and Node.js for the backend  
- MongoDB for the database

---

## 🚀 Getting Started

Follow these instructions to set up and run this project on your local machine.

### 1. Clone the Repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Backend (Server) Dependencies

```
cd server
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file inside the `server` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

> Replace `your_mongodb_connection_string` with your MongoDB URI.  
> Replace `your_jwt_secret_key` with a secure random string.

### 4. Install Frontend (Client) Dependencies

```
cd ../client
npm install
```

### 5. Run the Application

#### Option 1: Run Separately in Two Terminals

**Terminal 1: Start Backend**

```
cd server
npm start
```

**Terminal 2: Start Frontend**

```
cd client
npm start
```

#### Option 2: Run Both with `concurrently`

**Step 1: Install concurrently in the root directory**

```
npm install concurrently --save-dev
```

**Step 2: Update `package.json` in the root folder**

```
"scripts": {
  "start": "concurrently \"npm run server\" \"npm run client\"",
  "server": "cd server && npm start",
  "client": "cd client && npm start"
}
```

**Step 3: Start the app**

```
npm start
```

---

## 📁 Project Structure

```
/client     # React frontend
/server     # Express backend
```

---

## 🛠 Built With

- MongoDB  
- Express.js  
- React.js  
- Node.js

---

## 🙌 Contribution

Feel free to fork the repo and create pull requests.  
If you find bugs or have suggestions, feel free to open an issue!

---

## 📄 License

This project is licensed under the MIT License.
