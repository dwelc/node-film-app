Node Film App

# Installation

## Dependencies
1. Install Mongodb:
https://www.mongodb.com/download-center/community

Leave the default port (27017) specified and run on localhost

3. Install NodeJS:
https://nodejs.org/en/download/

## Running The Application

1. Clone the repo:
`git clone https://github.com/dwelc/node-film-app`

2. Change to root dir of repo and install dependencies
`npm install`

3. Import The film examples to database
`mongoimport --db films --collection films --films.json`

4. To run both API and React Client together:
`npm run dev`

5. To run the API Server standalone
`npm run server`

6. To run the React Client standalone
`npm run client`
