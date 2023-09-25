const CivitaiAPI = require('../../civitai'); // Import your CivitaiAPI class

const civitai = new CivitaiAPI();

const modelId = 1102; // Replace with the actual model ID

civitai
  .getModelById(modelId)
  .then(model => {
    console.log('Model by ID:', model);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
