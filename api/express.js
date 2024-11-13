// api/express.js
const express = require('express');
const serverless = require('serverless-http');  // To wrap the Express app

const app = express();

// Define an Express route
app.get('/', (req, res) => {
  res.send('Hello, world from Express on Vercel!');
});

// Export the handler function for Vercel to invoke
module.exports.handler = serverless(app);  // Wrap Express app for serverless
