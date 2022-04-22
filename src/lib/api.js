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
    url: `${baseUrl}/recipes/detail/${recipeId}`,
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

export const getAllLikedRecipesForUser = async (userId) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/users/${userId}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};

export const addLikedRecipe = async (recipeId) => {
  const options = {
    method: 'PUT',
    url: `${baseUrl}/recipe/${recipeId}/like`,
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
    url: `${baseUrl}/recipe/${recipeId}/removeLike`,
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
