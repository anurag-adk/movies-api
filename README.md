# Movies API

## 🎉 Welcome to Movies API! 🎉

The Movies API is a simple RESTful API allowing users to perform CRUD operations on a collection of movies. This API is built using Node.js, Express and MongoDB.

### Installation

1. Clone the repository

   ```
   git clone https://github.com/anurag-adk/movies-api.git
   ```

2. Navigate to the root directory

   ```
   cd movies-api
   ```

3. Install all the dependencies

   ```
   npm install
   ```

4. Set up your `.env` file as below

   ```
   PORT=port-number
   db_conn=your-mongodb-connection-string
   ```

5. start the server

   ```
   npm start
   ```

### API Endpoints

| Method | Endpoint             | Description                                  |
| ------ | -------------------- | -------------------------------------------- |
| GET    | `/movies`            | Get all movies                               |
| POST   | `/movies`            | Add a new movie                              |
| PATCH  | `/movies/:id`        | Update a movie                               |
| DELETE | `/movies?id=movieId` | Delete a movie using `id` as query parameter |

### Contact

For queries or feedback, feel free to reach out to me at [iamanuragadhikari@gmail.com](mailto:iamanuragadhikari@gmail.com)
