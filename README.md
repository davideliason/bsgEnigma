# BSG Enigma
## 5/24/2018 and ongoing
###[David Eliason](http://www.davethemaker.com)

### Why?
Code for interactive art sculpture. First for SOAK 5/27/2018 and then CI for 2.0

### Steps

First, this app was written to use mLab's SaaS mongoDB, but the sculpture will be in a remote location so successfully created a semi-CRUD full-stack SPA. This was done by creating a back-end express connected to local mongoDB installation, the data was shared via an api route and proxy script. On the front-end side, react used fetch to grab the server side data, set it into state, and then render accordingly.

Unfortunately, my assumption that installing mongodb onto rpi would be trivial was more optimistic than correct, so pivoted to a node, express serving an html info document to the user. This was the successful deployment for the festival! 

Moving forward for version 2.0, I'd like to build the following:
1. node.js and express on raspberry pi
	1a. create routes so that one route serves a vanilla html document wherein I can play directly with 
      *CSS* : Bootstrap, Material UI, and UIkit, Grid
           : React Styling
           : JS: ES6, service workers, functional programming
           : Build: NPM scripts, Webpack (looking at you React!), optimization

[Build in framework]
Main route: MobX ==>  React + Redux + Router 
GraphQL
Unit Testing

3. Build in back-end database (most likely postgres)

