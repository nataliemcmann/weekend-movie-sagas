# General Plan

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
- make GET route in router for a movie details
- make a GET saga function to handle requests to that router
- make a component with /details path that renders the movie details