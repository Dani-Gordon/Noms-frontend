import axios from 'axios';

const baseUrl = 'https://nomnomnoms.herokuapp.com';

export const getAllRecipes = async (recipeData) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/recipes/`,
    data: recipeData,
  };
  const { data } = await axios.request(options);
  return data;
};

export const getSingleRecipeById = async (recipeId) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/recipes/detail/${recipeId}/`,
    data: recipeId,
  };
  const { data } = await axios.request(options);
  return data;
};

export const createRecipe = async (recipeData) => {
  const options = {
    method: 'POST',
    url: `${baseUrl}/recipes/create/`,
    data: recipeData,
  };
  const { data } = await axios.request(options);
  return data;
};

export const getAllLikedRecipesForUser = async () => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/recipes/liked`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};

export const addLikedRecipe = async (recipeId) => {
  const options = {
    method: 'POST',
    url: `${baseUrl}/recipes/${recipeId}/like/`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};
export const removeLikedRecipe = async (recipeId) => {
  const options = {
    method: 'PUT',
    url: `${baseUrl}/recipes/${recipeId}/removeLike/`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};

export const getAllIngredients = async () => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/ingredients/`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};

// export const deleteRecipe = async (recipeId) => {
//   const options = {
//     method: 'DELETE',
//     url: `${baseUrl}/recipe/${recipeId}`,
//     headers: {
//       authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
//     },
//   };

//   const { data } = await axios.request(options);
//   return data;
// };
