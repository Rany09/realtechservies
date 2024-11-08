const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

export const API_ENDPOINTS = {
  user: {
      login: `${BASE_URL}/user/login`,
      signin: `${BASE_URL}/user/signin`,
      checkEmail: `${BASE_URL}/user/check-email`,
      details: `${BASE_URL}/user/`,
      update: `${BASE_URL}/user`,
  },
  property: {
      add: `${BASE_URL}/properties`,
      details: `${BASE_URL}/properties/`,
      getLatest: `${BASE_URL}/properties/latest-properties`,
      getAll: `${BASE_URL}/properties`,
      getByOwner: `${BASE_URL}/properties/owner/`,
      update: `${BASE_URL}/properties`,
      delete: `${BASE_URL}/properties/`,
  },
  contact: {
    add: `${BASE_URL}/contacts`,
    owner: `${BASE_URL}/contacts/owner/`
  }
};

// Cloudinary Image API
export const PROPERTY_IMAGE = `https://res.cloudinary.com/${import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME}/image/upload/`;
