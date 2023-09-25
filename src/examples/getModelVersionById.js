const CivitaiAPI = require('../../civitai'); // Import your CivitaiAPI class

const civitai = new CivitaiAPI();

const modelVersionId = 1318; // Replace with the actual model version ID

civitai
  .getModelVersionById(modelVersionId)
  .then(modelVersion => {
    console.log('Model Version by ID:', modelVersion);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
