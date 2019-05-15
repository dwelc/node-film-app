Node Film App
# Description
This is intended as a dummy application for React/Node.js training purposes.

This version of the application allows you to browse and catalogue of films and view their details and Add new film entries to the database.

API Server: /api
React Client: /client
Database: Mongodb

# Installation

## Dependencies
1. Install Mongodb:
https://www.mongodb.com/download-center/community

Leave the default port (27017) specified and run on localhost

2. Install NodeJS:
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

## Tasks

1. Install the New Relic node.js agent onto the API Server 
`https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent`

2. Check that you can see the API listed as an APM Application in New Relic

3. Use Custom Events to extract the film Title, Director and Runtime when a call is made
`https://docs.newrelic.com/docs/agents/nodejs-agent/api-guides/guide-using-nodejs-agent-api#custom-data`

4. Display these custom event values onto an insights Dashboard

5. Instrument the React Client application with the New Relic browser agent
`https://docs.newrelic.com/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent`

6. Check to make sure the application appears in the New Relic browser section

