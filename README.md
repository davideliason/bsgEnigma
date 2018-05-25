# BSG Enigma
## 5/24/2018

### Why?
Code for interactive art sculpture

### Steps

First, this app was written to use mLab's SaaS mongoDB, but the sculpture will be in a remote location so...

Second, on the GitHub 'master' branch, successfully created a semi-CRUD full-stack SPA. This was done by creating a back-end express connected to local mongoDB installation, the data was shared via an api route and proxy script.

On the front-end side, react used fetch to grab the server side data, set it into state, and then render accordingly.

To use:
- you need to have mongodb installed on your local machine
- open up two terminal tabs, and in one spin up the daemon with $ mongod and in the second open up the client with $mongo.  
-Since we don't have the convenience of the cloud to sync for us, you will need to create the database and collection yourself. In the second, mongo, tab you should see a '>' prompt. First type 'use bsgenigma' (which creates the db), then 'db.createCollection("comments")'
- Now, you can open a third terminal tab and spin up the app, from the top-level, with $ npm run dev.
-Enjoy

---------------------

Third, unfortunately, my assumption that installing mongodb onto rpi would be trivial was more optimistic than correct, so pivoting to a postgres installation [branch postgres on GitHub] 