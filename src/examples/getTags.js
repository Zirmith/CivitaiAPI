const CivitaiAPI = require('../../civitai'); // Import your CivitaiAPI class

const civitai = new CivitaiAPI();

// Optional query parameters for filtering tags (limit, page, query)
const options = {
  limit: 5,
};

civitai
  .getTags(options)
  .then(tags => {
    console.log('Tags:', tags);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
