# Civitai API Wrapper

# Description: 
"An advanced and robust Node.js library that serves as a comprehensive wrapper for seamless integration with the Civitai API. Designed to enhance your development experience, this library offers features such as automatic rate limit handling, request retries, and cache persistence to ensure reliability and performance. Simplify your interactions with the Civitai API and optimize your application's data retrieval processes with this professional-grade Node.js wrapper."

## Installation

To use this wrapper in your Node.js project, you can install it via npm or yarn:
**Installation requires Node.js 10.9.0 or higher.**

![NPM](https://nodei.co/npm/civitai-api-wrapper.png)
<br>
[![Known Vulnerabilities](https://snyk.io/test/github/zirmith/CivitaiAPI/badge.svg)](https://snyk.io/test/github/zirmith/CivitaiAPI)   [![HitCount](https://hits.dwyl.com/Zirmith/CivitaiAPI.svg?style=flat-square&show=unique)](http://hits.dwyl.com/Zirmith/CivitaiAPI)

```bash
npm install civitai-api-wrapper
# or
yarn add civitai-api-wrapper

# latest
npm install civitai-api-wrapper@latest
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

## Methods

### `getCreators(options)`

Fetch a list of creators.

### `getImages(options)`

Fetch a list of images.

### `getModels(options)`

Fetch a list of models.

### `getModelById(modelId)`

Fetch a model by its ID.

### `getModelVersionById(modelVersionId)`

Fetch a model version by its ID.

### `getModelVersionByHash(hash)`

Fetch a model version by its hash.

### `getTags(options)`

Fetch a list of tags.

## Contributing

Contributions Welcome!

If you'd like to contribute to this wrapper or add new features, please follow these steps:

1. Open an issue to discuss the proposed changes or improvements.

2. Fork the repository on GitHub.

3. Create a new branch for your feature or bug fix.

4. Implement your changes and write tests if applicable.

5. Ensure that your code follows best practices and is well-documented.

6. Test your changes thoroughly.

7. Create a pull request (PR) with a clear description of the changes you've made.

8. Your PR will be reviewed, and any necessary feedback will be provided.

9. Once your PR is approved, it will be merged into the main branch.

Thank you for contributing to this project!


## Examples
See `src/examples/` .