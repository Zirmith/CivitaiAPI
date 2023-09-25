# Civitai API Wrapper

This is a Node.js wrapper for the Civitai API, allowing you to interact with Civitai's services programmatically from your Node.js applications.

## Installation

To use this wrapper in your Node.js project, you can install it via npm or yarn:

```bash
npm install civitai-api-wrapper
# or
yarn add civitai-api-wrapper
```

```js
const CivitaiAPI = require('civitai-api-wrapper');

const civitai = new CivitaiAPI();

// Example: Fetch a list of creators
civitai.getCreators()
  .then(creators => {
    console.log('Creators:', creators);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```

-Methods
getCreators(options): Fetch a list of creators.

getImages(options): Fetch a list of images.

getModels(options): Fetch a list of models.

getModelById(modelId): Fetch a model by its ID.

getModelVersionById(modelVersionId): Fetch a model version by its ID.

getModelVersionByHash(hash): Fetch a model version by its hash.

getTags(options): Fetch a list of tags.

Contributing
Contributions are welcome! If you'd like to improve this wrapper or add new features, please open an issue or submit a pull request.

License
This wrapper is open-source and available under the MIT License.
