# Task Management System

A simple Task Management System built using **React** for the frontend and **Express.js + Node.js** for the backend.

This project allows users to manage tasks through a simple interface.

---

## Features

- Create tasks
- View task list
- Update tasks
- Delete tasks
- React frontend
- Express backend with API routes

---

## Tech Stack

### Frontend
- React
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

---

# Project Structure

project-folder/

├── frontend/

│ ├── src/

│ ├── public/

│ └── package.json

│

├── backend/

│ ├── routes/

│ ├── server.js

│ └── package.json

│

└── README.md


---

# Installation

Clone the repository:

```bash
git clone https://github.com/Tejas-0570/Cravita-Technical-Assessment.git
```

Move into project folder:

```bash
cd folder_name
```

---

# Run Backend

Move to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start backend server:

```bash
npm start
```

OR (if using nodemon):

```bash
npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

---

# Run Frontend

Open another terminal.

Move to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start React application:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

# API Example

Example routes:

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | /tasks | Get all tasks |
| POST | /tasks | Add new task |
| PUT | /tasks/:id | Update task |
| DELETE | /tasks/:id | Delete task |

---

# Environment Variables

Create `.env` file inside backend:

```env
PORT=3000
```

Example:

```env
PORT=3000
```

---

# Screenshots

<img width="1918" height="907" alt="image" src="https://github.com/user-attachments/assets/bc7ca7bb-c74d-480b-a39c-f323426c0397" />


Example:

```
screenshots/
├── home.png
├── tasks.png
```

---

# Future Improvements

- User authentication
- Database integration
- Task filtering
- Task deadline notifications

---

# Author
Tejas Waydande

GitHub: https://github.com/Tejas-0570/Cravita-Technical-Assessment.git

---

## License

This project is open-source and available under the MIT License.
