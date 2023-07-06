# Chuck Norris

This project is a Chuck Norris Jokes application built with React. It fetches joke categories from the Chuck Norris API and allows users to view random jokes from each category.


# Feature

1. Upon launching the application, it will fetch the list of available joke categories from the Chuck Norris API and display them as clickable cards.
2. When a category card is clicked, a modal overlay will appear with a random Chuck Norris joke from that category. 
3. The user can click the "Next Joke" button to fetch another random joke from the same category. The user can also close the modal by clicking the close button.


# Components

1. App - It fetches the joke categories from the API and renders the CategoryCard component for each category.
2. CategoryCard - It is responsible for fetching and displaying a random joke from the given category when clicked. It also provides the functionality to close the joke modal and fetch the next joke from the same category.

# Getting Started

To run the Chuck Norris application, follow these steps:

1. Install the dependencies:
   npm install

2. Start the development server:
   npm start

3. Open your browser and visit http://localhost:3000 to access the application.

# Dependencies
The following dependencies are used in the Chuck Norris application:

1. @axios: Axios library for data fetching
2. @react-bootstrap: Bootstrap library for UI components.
3. @react-bootstrap-icons: Bootstrap-UI icons library

