## Cool Movie List!

Looking for a movie to watch? Check out these films!

## Technology
- PostgresSQL and Postico
- React
- Express
- Node
- React Router
- Redux
- Saga
- Material UI (https://mui.com/)

## Installation

1. Make sure Postgres SQL and Postico are installed. Using Postico, create a database named `saga_movies_weekend`.
2. Run the queries from `database.sql` to set up the database in Postico.
3. Open your text editor of choice and run an `npm install` in your terminal
4. Run `npm run server` in your terminal.
5. Run `npm run client` in your terminal.
6. Upon running `npm run client`, a new browser tab will open for you!

## Usage

Upon opening this app, the user will see a selection of movies. They can click on any movie poster to see its plot synopsis and associated genres. Hitting the back button sends them back to the movie selection page.

![usage](usage_gif/select_movie.gif)

## Technologies
-Javascript -CSS -HTML

## Acknowledgement
Thanks to Prime Digital Academy who equipped me with the skills to make this application a reality.

# General Plan
Want to know how I built this app in a two day sprint? Read on!

# Code Inventory 
What's already here?

Server side: 
- two urls '/api/movie' and '/api/genre'
- movie router contains a get and a post
- genre router contains a get that merely sends 500 (this is a stretch goal thing)

Client side: 
- index.js contains redux and saga boilerplate plus a SAGA get request and state for movies and genres
- component folder contains app and movieList components
- App.js has hashrouter boiler plate with comments to add a details and a movie form...do details first

# Base Mode Plan
- [x] make GET route in router for a movie details
- [x] make a GET saga function to handle requests to that router
- [x] make a component with /details path that renders the movie details
- [x] make a Back to List button

# Stretch Goal Plan
- [x] Fix the detail page refresh (research React-router documentation)
- [x] Style with material ui and add some color (practice using Grid layout)

