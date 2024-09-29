const axios = require('axios');

async function fetchDataFromCloudFunction(req, res) {
  try {
    // Fetch the data from your Google Cloud Function URL
    const response = await axios.get('https://us-central1-testrock-425315.cloudfunctions.net/ConnectionSheet');
    res.status(200).json(response.data);  // Send the data back in the response
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

module.exports = fetchDataFromCloudFunction;
