const CivitaiAPI = require('../../civitai'); // Import your CivitaiAPI class

const civitai = new CivitaiAPI();

// Optional query parameters for filtering creators (limit, page, query)
const options = {
  limit: 10,
  page: 1,
  query: 'exampleUsername',
};

civitai
  .getCreators(options)
  .then(creators => {
    console.log('Creators:', creators);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
