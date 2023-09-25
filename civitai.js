const axios = require('axios');
const sqlite3 = require('sqlite3').verbose();
const axiosRetry = require('axios-retry');

class CivitaiAPI {
  constructor() {
    this.baseURL = 'https://civitai.com/api/v1';
    // Configure Axios with retries
    axiosRetry(axios, {
      retries: 3, // Number of retry attempts
      retryDelay: axiosRetry.exponentialDelay, // Exponential backoff delay
      retryCondition: (error) => {
        return error.response && error.response.status === 429; // Retry only on rate limit exceeded
      },
    });
     // Configure SQLite database for cache persistence
     this.db = new sqlite3.Database('civitai_cache.db', (err) => {
      if (err) {
        console.error('Error opening SQLite database:', err.message);
      } else {
        // Check if the 'cache' table exists
        this.db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='cache'", (err, row) => {
          if (err) {
            console.error('Error checking for table existence:', err.message);
          } else if (!row) {
            // The 'cache' table doesn't exist, create it
            this.createCacheTable();
            console.log('Warning: If you see the error "Error: SQLITE_ERROR: no such table: cache" in the logs, it is normal. The table will be created on first use.');
          } else {
            console.log('Connected to database');
          }
        });
      }
    });
  }

  createCacheTable() {
    this.db.run(`
      CREATE TABLE IF NOT EXISTS cache (
        key TEXT PRIMARY KEY,
        value TEXT,
        timestamp INTEGER
      )
    `);
  }


  async getCachedData(key) {
    return new Promise((resolve, reject) => {
      this.db.get('SELECT value FROM cache WHERE key = ?', [key], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row ? JSON.parse(row.value) : null);
        }
      });
    });
  }

  async setCachedData(key, data) {
    const timestamp = Date.now();
    const value = JSON.stringify(data);

    return new Promise((resolve, reject) => {
      this.db.run(
        'REPLACE INTO cache (key, value, timestamp) VALUES (?, ?, ?)',
        [key, value, timestamp],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  async getCreators(options = {}) {
    const cacheKey = `getCreators-${JSON.stringify(options)}`;
    const cachedData = await this.getCachedData(cacheKey);

    if (cachedData) {
      console.log('Using cached data for getCreators');
      return cachedData;
    }

    try {
      const response = await axios.get(`${this.baseURL}/creators`, {
        params: { ...options },
      });

      const responseData = response.data;
      await this.setCachedData(cacheKey, responseData);

      return responseData;
    } catch (error) {
      throw new Error(`Failed to fetch creators: ${error.message}`);
    }
  }

  async getImages(options = {}) {
    const cacheKey = `getImages-${JSON.stringify(options)}`;
    const cachedData = await this.getCachedData(cacheKey);

    if (cachedData) {
      console.log('Using cached data for getImages');
      return cachedData;
    }

    try {
      const response = await axios.get(`${this.baseURL}/images`, {
        params: { ...options },
      });

      const responseData = response.data;
      await this.setCachedData(cacheKey, responseData);

      return responseData;
    } catch (error) {
      throw new Error(`Failed to fetch images: ${error.message}`);
    }
  }

  async getModels(options = {}) {
    const cacheKey = `getModels-${JSON.stringify(options)}`;
    const cachedData = await this.getCachedData(cacheKey);

    if (cachedData) {
      console.log('Using cached data for getModels');
      return cachedData;
    }

    try {
      const response = await axios.get(`${this.baseURL}/models`, {
        params: { ...options },
      });

      const responseData = response.data;
      await this.setCachedData(cacheKey, responseData);

      return responseData;
    } catch (error) {
      throw new Error(`Failed to fetch models: ${error.message}`);
    }
  }

  async getModelById(modelId) {
    const cacheKey = `getModelById-${modelId}`;
    const cachedData = await this.getCachedData(cacheKey);

    if (cachedData) {
      console.log('Using cached data for getModelById');
      return cachedData;
    }

    try {
      const response = await axios.get(`${this.baseURL}/models/${modelId}`);

      const responseData = response.data;
      await this.setCachedData(cacheKey, responseData);

      return responseData;
    } catch (error) {
      throw new Error(`Failed to fetch model: ${error.message}`);
    }
  }

  async getModelVersionById(modelVersionId) {
    const cacheKey = `getModelVersionById-${modelVersionId}`;
    const cachedData = await this.getCachedData(cacheKey);

    if (cachedData) {
      console.log('Using cached data for getModelVersionById');
      return cachedData;
    }

    try {
      const response = await axios.get(`${this.baseURL}/model-versions/${modelVersionId}`);

      const responseData = response.data;
      await this.setCachedData(cacheKey, responseData);

      return responseData;
    } catch (error) {
      throw new Error(`Failed to fetch model version: ${error.message}`);
    }
  }

  async getModelVersionByHash(hash) {
    const cacheKey = `getModelVersionByHash-${hash}`;
    const cachedData = await this.getCachedData(cacheKey);

    if (cachedData) {
      console.log('Using cached data for getModelVersionByHash');
      return cachedData;
    }

    try {
      const response = await axios.get(`${this.baseURL}/model-versions/by-hash/${hash}`);

      const responseData = response.data;
      await this.setCachedData(cacheKey, responseData);

      return responseData;
    } catch (error) {
      throw new Error(`Failed to fetch model version by hash: ${error.message}`);
    }
  }

  async getTags(options = {}) {
    const cacheKey = `getTags-${JSON.stringify(options)}`;
    const cachedData = await this.getCachedData(cacheKey);

    if (cachedData) {
      console.log('Using cached data for getTags');
      return cachedData;
    }

    try {
      const response = await axios.get(`${this.baseURL}/tags`, {
        params: { ...options },
      });

      const responseData = response.data;
      await this.setCachedData(cacheKey, responseData);

      return responseData;
    } catch (error) {
      throw new Error(`Failed to fetch tags: ${error.message}`);
    }
  }
}

module.exports = CivitaiAPI;
