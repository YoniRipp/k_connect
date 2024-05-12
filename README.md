# k_connect

## Description 
SQL queires using MYSQL
## Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js installed (specify minimum version, e.g., Node.js 14.x or newer).
MySQL installed or access to a MySQL database.

## Environment Variables
To run this project, you will need to add/change the following environment variables to your config.json file:

```plaintext
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_DATABASE=itemdb
DB_PORT=3305
API_KEY=your_api_key
```

## Setup and Installation
Follow these steps to get your development environment running:

Clone the repository
```plaintext
https://github.com/YoniRipp/k_connect.git
cd k_connect
```
Install dependencies
```plaintext
npm i
```

## Running the Application
To run the application in  nodemon:
```plaintext
nodemon server.js --setup-db
```
## Accessing the API
Once the server is running, you can access the API at:
```plaintext
http://localhost:8080/
```
