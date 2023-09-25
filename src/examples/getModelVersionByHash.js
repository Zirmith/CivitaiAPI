const CivitaiAPI = require('../../civitai'); // Import your CivitaiAPI class

const civitai = new CivitaiAPI();

const hash = 'your_hash_here'; // Replace with the actual hash

civitai
  .getModelVersionByHash(hash)
  .then(modelVersion => {
    console.log('Model Version by Hash:', modelVersion);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
