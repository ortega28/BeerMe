![imageAlt](https://media.giphy.com/media/xT8qBhrlNooHBYR9f2/giphy.gif)

Link to site 
https://clever-kilby-9b7c42.netlify.app/

# BeerMe

# Description
BeerMe is an app that uses an API with data about different kinds of beer. My goal is to have a list of beers available and the app allows the user to choose one and get information about that specific beer. There will be a home page with the options of beers to choose from and when the user clicks on the beer they're interested in, the page will show the relevant details of that beer.

# Wireframes
https://imgur.com/a/Ax7WhVr

imageAlt

https://imgur.com/a/kjvSvMU

imageAlt

https://imgur.com/a/5GpdrUn

imageAlt

https://imgur.com/a/x57tkZC

imageAlt

https://imgur.com/a/DTeJlsO

imageAlt

https://imgur.com/a/xb51nMN

imageAlt

# Component Heirarchy
src |
    components/ 
    | App.js |
    |_ Header.js |Title 
    |_ Nav.js 
    |_ Home.js (class) 
        |_HomeImage 
        |_HomeParagraph 
        |_BeerIcon 
        |BeerName 
    |_ ShowBeer.js (functional) |_BeerImage (prop) |Description (prop) 
    |_ Footer.js

# API
https://www.brewerydb.com/developers/apps

Url : https://sandbox-api.brewerydb.com/v2/


# MVP
My goal for MVP is to have a functioning react app. The minimum functionality includes succesfully calling from the api, rendering data based on what the user clicks on, and styling to make the site more attractive. The app needs to be able to show the details of the images rendered.

# Post-MVP
I want to include a search button and search field to render all the beers with some kind of key word. For example, if the user types in IPA and presses the button, the page reders all the beers with IPA in their title or description.

# SWOT Analysis
Strengths: I am pretty comfortable with calling the API and getting the data I am looking for.

Weaknesses: Styling with css. I still have trouble getting things to go to where I want them to go.

Opportunities: This is an oppurtunity to make a project from scratch and practice all the skills learned during this unit. This is also a good oppurtunity to practice with flex-box.

Threats: The only threats I forsee all have to do with getting stuck and not being able to unstick myself. IF I get stuck I am worried I will waste a lot of time trying to solve the isasue on my own. Luckily we have the token system and I hope it doesn't come to me using all 5.
