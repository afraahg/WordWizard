# WordWizard
### INST377 Group Project

## Description
WordWizard aims to create a dictionary website through the use of APIs. We 
include standard dictionary website functionalities such as searching for words,
displaying word informations, getting a random word, etc. WordWizard additionally
provides a random word every load-up, custom and unique word games, and other
accessibility features. 
### Games
#### WordChain game
Users will create a word train using the last letter of a word to start a new word.
Users are timed for a certain amount of time to enter a word, the longer the 
chain of words, the more points the user will get. 
#### Type racer game
Users quickly type words after given a definition. After a word is correctly 
entered, a new definition is displayed and the user will continue playing. The 
more words correctly guessed/the longer the streak, the more points the user will get.

## Target Browsers
Our target audience is very broad, as anyone may need or use a dictionary. 
Our website will serve as a valuable resource for students, writers, 
educators, and anyone interested in expanding their vocabulary and understanding 
of the English language. Our target browser is mainly Google Chrome, however, we
hope to expand to other browsers and devices.

[See our Developer Manual](#developer-manual)


# Developer Manual
## Set-up	
This project heavily uses Node.js for a lot of its services. There will be a link below to download Node.js.

Download Node.js:  https://nodejs.org/en/download/prebuilt-installer

From here, the two dependencies that need to be installed are 1. Express,  2. EJS. The versions of each dependency that has been used most recently is ESJ v 3.1.10, and Express v 4.19.2. 

These can both be installed through the terminal in any IDE that is being used with the following command: 

From here, all that needs to be done is to open up the integrated terminal on the server.js file and the project is being run on a local server. All edits can be seen by placing this in the URL: http://localhost:3000/

## APIs and Libraries
There are a few endpoints that are used. The first one comes from the Dictionary API (https://dictionaryapi.dev/). This is the API that we use to fetch a given searched word. The endpoint for the API is below. 

Dictionary API enpoint: https://api.dictionaryapi.dev/api/v2/entries/en/${given-word}

The next API used is a Random Word API (https://random-word-api.herokuapp.com/home). This one is used in conjunction with the Dictionary API. This API finds a random word, for us to fetch, and uses the given value to fetch the word from the Dictionary API.

Random Word API endpoint: https://random-word-api.herokuapp.com/word?lang=en&number=10 

The last Backend database that is being fetched is a Python database that is in the repository. This database is used to collect the scores of the games that have been played. We post the scores from the site to the database, and then we later fetch the scores to display on the site. The database is under the file db-interface.py.

There are also two front-end libraries libraries that are being used. The first one is a picture slider from a simple slider. This library is used on the games page to display the games available on the site. The documentation for it is below. 

Simple-slider: https://ruyadorno.com/simple-slider/

The next library is a display-changing library called Darkmode.js, which is used on all of the pages. It is displayed as a widget on the bottom right of the page. As the name implies, it toggles the color display of the page between lighter and darker colors. The documentation for it is below.

DarkMode.JS: https://darkmodejs.learn.uno

## Future Ideas
When looking at the future, the first place that we envision the site to go is to expand on the games page. This is the area with the most potential growth and yields the highest user return rate. The next place would be in settings and accessibility. We would like to implement text-to-speech capabilities, allowing those who rely on audio cues to utilize our site more easily.

