# Movie-Discovery-App-backend

This backend application was designed and implemented through independent effort. Artificial Intelligence tools (such as Gemini) were used strictly and minimally for isolated syntax troubleshooting, error debugging, and code formatting assistance.

This is the Node.js/Express backend server for the Full-Stack Movie Discovery Application. It interfaces with the TMDB (The Movie Database) API, serves processed movie endpoints, and manages user wishlist persistence using MongoDB.

---

## 🛠️ Tech Stack & Architecture

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB with Mongoose ORM
* **Architecture:** Controller-Service Pattern
  * **Controllers (`/controllers`):** Handle request parameters, response formatting, and HTTP status codes.
  * **Services (`/services`):** Encapsulate business logic, TMDB API calls, and data mapping.

---

## 🔌 API Endpoints

### Movies API (`/api/v1/movies`)

| Method | Endpoint | Description | Query / Body Params |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Get popular movies | `?page=1` |
| `GET` | `/search` | Search movies | `?search=query&page=1` |
| `GET` | `/discover` | Filter/Sort movies | `?genre=28&sortBy=popularity.desc&page=1` |
| `GET` | `/detail/:id` | Fetch movie details | Params: `id` |

### Wishlist API (`/api/v1/wishlist`)

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Get saved wishlist items | None |
| `POST` | `/add` | Save movie to wishlist | `{ movieId, title, poster, rating, releaseDate }` |
| `DELETE` | `/:movieId` | Remove movie from wishlist | Params: `movieId` |

---

## ⚙️ Environment Variables

Create a `.env` file in the `server/` root directory:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/moviedb
TMDB_ACCESS_TOKEN=your_tmdb_bearer_token_here