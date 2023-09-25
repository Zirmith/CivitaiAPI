const CivitaiAPI = require('../../civitai'); // Import your CivitaiAPI class

const civitai = new CivitaiAPI();

// Optional query parameters for filtering images (limit, postId, modelId, modelVersionId, username, nsfw, sort, period, page)
const options = {
  limit: 50,
  sort: 'Newest',
};

civitai
  .getImages(options)
  .then(images => {
    console.log('Images:', images);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
