# Gurucoolurl

## Description
"Shoreten URL" is likely a project or service related to URL shortening. URL shortening involves creating concise versions of long web addresses, making them easier to share, especially in contexts with character limitations. Users can use these shortened URLs to share links more efficiently, commonly on platforms like social media. To learn more, it is recommended to check official documentation or relevant online sources for detailed information on this specific project.

## Getting Started
1. Clone the repository: `git clone https://github.com/alka0814/Gurucoolurl.git`
2. Install dependencies: `npm install`
3. Set up environment variables: Create a `.env` file and add necessary variables.
4. Start the server: `npm start`

## Usage

### URL Shortener
1. Create a short URL:
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"url": "https://example.com"}' http://localhost:8500/url
    ```
2. Redirect to a short URL:
   Open a web browser and visit http://localhost:8500/your-short-id

### User Registration and Login
1. Register a new user:
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com", "password": "yourpassword"}' http://localhost:8500/user/register
    ```
2. Login:
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"email": "john@example.com", "password": "yourpassword"}' http://localhost:8500/user/login
    ```

## Environment Variables
- `8500`: The port on which the server will run.
- `mongodb+srv://alkatrivedi0814:alkatrivedi@cluster0.08hlzdp.mongodb.net/urldata?retryWrites=true&w=majority`: The URL for your MongoDB database.
- `masai`: Secret key for JWT token generation.

## Contributing
If you'd like to contribute, please fork the repository and create a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
