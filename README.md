```md
# 🚀 Learn with Jiji – Backend (VeidaLabs Assignment)

Backend service for **Learn with Jiji**, an AI-powered learning companion designed to help professionals and students learn AI concepts using curated internal resources.

This project is built as part of the **VeidaLabs Software Developer Hiring Assignment** and focuses on **server-side development**, **Supabase integration**, and **secure API design**.

---

## 🧠 What This Backend Does

1. Accepts a user learning query (example: *"Explain RAG"*)
2. Validates the request and user authentication
3. Fetches relevant learning resources (PPT & Video) from Supabase
4. Returns a structured AI-like response
5. Stores user queries for future analytics

> ⚠️ Note: AI responses are **mocked** as per assignment instructions.  
> Architecture is fully ready for real LLM integration.

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **Supabase**
  - PostgreSQL Database
  - Authentication
  - Storage (PPT & Video)
  - Row Level Security (RLS)
- **JWT-based Authentication**
- **Environment-based configuration**

---

## 📂 Project Structure

```

learn-with-jiji-backend/
│
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   └── supabase.js
│   ├── routes/
│   │   └── jiji.routes.js
│   ├── controllers/
│   │   └── jiji.controller.js
│   ├── services/
│   │   ├── jiji.service.js
│   │   └── profile.service.js
│   ├── middlewares/
│       ├── auth.js
│       └── validateRequest.js
│
├── supabase_schema.sql
├── .env
├── .gitignore
├── package.json
└── README.md

```

---

## 🔐 Security Highlights

- No secrets committed to code
- Environment variables used
- Supabase Row Level Security (RLS) enabled
- User can only access their own queries
- Public access limited to learning resources only

---

## 📦 Supabase Schema

Tables used:
- `profiles` – stores user profiles
- `queries` – stores user search queries
- `resources` – stores PPT & Video links

Schema file included:  
👉 **`supabase_schema.sql`**

---

## 🌐 API Documentation

### 🔹 POST `/api/ask-jiji`

**Headers**
```

Authorization: Bearer <SUPABASE_JWT_TOKEN>
Content-Type: application/json

````

**Request Body**
```json
{
  "query": "Explain RAG"
}
````

**Response**

```json
{
  "answer": "Retrieval-Augmented Generation (RAG) is a technique that combines retrieval with language models...",
  "resources": [
    {
      "title": "Presentation on RAG",
      "type": "ppt",
      "url": "https://supabase-storage-url/presentation.ppt"
    },
    {
      "title": "What is RAG?",
      "type": "video",
      "url": "https://supabase-storage-url/video.mp4"
    }
  ]
}
```

---

## ▶️ Running the Project Locally

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Configure Environment Variables

Create `.env` file:

```env
PORT=4000
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3️⃣ Start Server

```bash
node src/server.js
```

Server will run at:

```
http://localhost:4000
```

---

## 🧪 Demo & Screenshots

### 🔹 API Health Check

![Server Running](screenshots/server-running.png)

### 🔹 Supabase Tables

![Supabase Tables](screenshots/supabase-tables.png)

### 🔹 API Response in Postman

![API Response](screenshots/api-response.png)

> 📌 Screenshots folder can be added to repository to visually demonstrate working flow.

---




---

## 📈 Improvements With More Time

* Real AI integration (OpenAI / Gemini)
* Semantic search over learning resources
* Personalized learning history per user
* Admin dashboard for content management

---

## 👨‍💻 Author

**Tanmay Hingankar**

* LinkedIn: https://www.linkedin.com/in/tanmay-hingankar/


---
