# BSG Enigma
## 5/24/2018 and ongoing
###[David Eliason](http://www.davethemaker.com)

### Why?
Code for interactive art sculpture. First for SOAK 5/27/2018 and then CI for 2.0

### Steps

First, this application was written to use mLab's SaaS mongoDB, but the sculpture will be in a remote location so successfully created a semi-CRUD full-stack SPA. This was done by creating a back-end express connected to local mongoDB installation, the data was shared via an api route and proxy script. On the front-end side, react used fetch to grab the server side data, set it into state, and then render accordingly.


Unfortunately, my assumption that installing mongodb onto rpi would be trivial was more optimistic than correct, so pivoted to a node/express instantiation serving an html info document to the user. This was the successful deployment for the festival. Note that the rapsberry pi didn't take too well with my using CRA, either.

### Tech used, skills practiced

- used flexbox, css grid, SASS, grid-container
- spun up express server, built route handlers
- used eventListeners 
- used EJS for rendering
- built custom npm module
- event emitter and listener
- parse request body for desired data

Moving forward to version 2.0, I'm interested in successfully building the first-envisioned embedded system but with web capability, utilizing an embedded web application. Working with the raspberry pi using node.js for the runtime and express as the web framework, I'm interested in pairing that with the low-level C programming structure for dynamically working with input to not only change visual display rendered in the traditional browser window, but in interacting with hardware attached to the device.

