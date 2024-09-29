const axios = require('axios');

async function fetchDataFromCloudFunction() {
  try {
    const response = await axios.get('https://us-central1-testrock-425315.cloudfunctions.net/ConnectionSheet');
    return response.data;  // The stock data
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

module.exports = fetchDataFromCloudFunction;
