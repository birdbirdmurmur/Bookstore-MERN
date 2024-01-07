# Bookstore-MERN Project

This project is a full-stack web application for a bookstore, built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to view a list of books, add new books, edit existing books, and delete books.

## Features

- List all books
- Add a new book
- Edit an existing book
- Delete a book
- Responsive web design

## Technologies

- MongoDB
- Express.js
- React
- Node.js
- Axios for API requests
- React Router for navigation
- Vite for front-end tooling
- notistack for Snackbar notifications

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/birdbirdmurmur/Bookstore-MERN.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and enter your environment variables:
   ```sh
   echo "MONGODB_URL=your_mongodb_url_here" > .env
   ```

## Usage

For development, you can run the front-end and back-end servers separately for a better debugging experience.

- To start the front-end server:
  ```sh
  npm run start:frontend
  ```
- To start the back-end server:
  ```sh
  npm run start:backend
  ```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
