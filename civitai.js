const axios = require('axios');



class CivitaiAPI {
  constructor() {
    this.baseURL = 'https://civitai.com/api/v1';
  }

  /**
   * Get a list of creators from the Civitai API.
   *
   * @param {Object} options - Optional query parameters (limit, page, query).
   * @returns {Promise<Object[]>} - A Promise that resolves to an array of creators.
   */
  async getCreators(options = {}) {
    const { limit = 20, page = 1, query = '' } = options;

    try {
      const response = await axios.get(`${this.baseURL}/creators`, {
        params: { limit, page, query },
      });

      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch creators: ${error.message}`);
    }
  }

/**
   * Get a list of images from the Civitai API.
   *
   * @param {Object} options - Optional query parameters (limit, postId, modelId, modelVersionId, username, nsfw, sort, period, page).
   * @returns {Promise<Object[]>} - A Promise that resolves to an array of images.
   */
async getImages(options = {}) {
    const {
      limit = 100,
      postId,
      modelId,
      modelVersionId,
      username,
      nsfw,
      sort,
      period,
      page = 1,
    } = options;

    try {
      const response = await axios.get(`${this.baseURL}/images`, {
        params: {
          limit,
          postId,
          modelId,
          modelVersionId,
          username,
          nsfw,
          sort,
          period,
          page,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch images: ${error.message}`);
    }
  }

  async getModels(options = {}) {
    const {
      limit = 100,
      page = 1,
      query = '',
      tag = '',
      types = [],
      sort = 'Highest Rated',
      period = 'AllTime',
      rating = undefined,
      favorites = false,
      hidden = false,
      primaryFileOnly = false,
      allowNoCredit = false,
      allowDerivatives = false,
      allowDifferentLicenses = false,
      allowCommercialUse = 'None',
      nsfw = true,
    } = options;

    try {
      const response = await axios.get(`${this.baseURL}/models`, {
        params: {
          limit,
          page,
          query,
          tag,
          types: types.join(','),
          sort,
          period,
          rating,
          favorites,
          hidden,
          primaryFileOnly,
          allowNoCredit,
          allowDerivatives,
          allowDifferentLicenses,
          allowCommercialUse,
          nsfw,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch models: ${error.message}`);
    }
  }



    /**
   * Get a model by its ID from the Civitai API.
   *
   * @param {number} modelId - The ID of the model to retrieve.
   * @returns {Promise<Object>} - A Promise that resolves to the model data.
   */
    async getModelById(modelId) {
        try {
          const response = await axios.get(`${this.baseURL}/models/${modelId}`);
    
          return response.data;
        } catch (error) {
          throw new Error(`Failed to fetch model: ${error.message}`);
        }
      }


        /**
   * Get a model version by its ID from the Civitai API.
   *
   * @param {number} modelVersionId - The ID of the model version to retrieve.
   * @returns {Promise<Object>} - A Promise that resolves to the model version data.
   */
  async getModelVersionById(modelVersionId) {
    try {
      const response = await axios.get(`${this.baseURL}/model-versions/${modelVersionId}`);

      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch model version: ${error.message}`);
    }
  }


   /**
   * Get a model version by its hash from the Civitai API.
   *
   * @param {string} hash - The hash of the model version to retrieve.
   * @returns {Promise<Object>} - A Promise that resolves to the model version data.
   */
   async getModelVersionByHash(hash) {
    try {
      const response = await axios.get(`${this.baseURL}/model-versions/by-hash/${hash}`);

      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch model version by hash: ${error.message}`);
    }
  }

  /**
   * Get a list of tags from the Civitai API.
   *
   * @param {Object} options - Optional query parameters (limit, page, query).
   * @returns {Promise<Object[]>} - A Promise that resolves to an array of tags.
   */
  async getTags(options = {}) {
    const { limit = 20, page = 1, query = '' } = options;

    try {
      const response = await axios.get(`${this.baseURL}/tags`, {
        params: { limit, page, query },
      });

      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch tags: ${error.message}`);
    }
  }
    

  

}

module.exports = CivitaiAPI;
