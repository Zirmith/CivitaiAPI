const CivitaiAPI = require('../../civitai'); // Import your CivitaiAPI class

const civitai = new CivitaiAPI();

// Optional query parameters for filtering models (limit, page, query, tag, types, sort, period, rating, favorites, etc.)
const options = {
  limit: 10,
  sort: 'Highest Rated',
  period: 'Month',
};

civitai
  .getModels(options)
  .then(models => {
    console.log('Models:', models);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
