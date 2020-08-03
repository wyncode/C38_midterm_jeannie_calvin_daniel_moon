if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios')

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/api/demo', (request, response) => {
  response.json({
    message: 'Hello from server.js'
  });
});
// END DEMO

// GETS ALL JOBS
app.get('/api/jobs', async (request, response) => {
  try {
    const { data } = await axios.get(`https://jobs.github.com/positions.json`)
    response.json(data)
  } catch (error) {
    console.log(error)
  }
})

// GETS JOB BY SEARCH TERM
app.get('/api/jobs/:search', async (request, response) => {
  const { search } = request.params

  try {
    const { data } = await axios.get(`https://jobs.github.com/positions.json?search=${search}`)
    response.json(data)
  } catch (error) {
    console.log(error)
  }
  
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
