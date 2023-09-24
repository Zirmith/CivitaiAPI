// Import necessary dependencies
const axios = require('axios');

class CivitaiAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
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
        headers: { Authorization: `Bearer ${this.apiKey}` },
        params: { limit, page, query },
      });

      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch creators: ${error.message}`);
    }
  }
}

module.exports = CivitaiAPI;
