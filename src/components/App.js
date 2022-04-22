import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Navbar from './NavBar';
import Login from './auth/Login';
import Register from './auth/Register';
import RecipeBook from './RecipeBook';
import SingleRecipe from './SingleRecipe';
import CreateRecipe from './CreateRecipe';
import RecipeBox from './RecipeBox';

import '../styles/style.scss';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recipebook" element={<RecipeBook />} />
      <Route path="/singlerecipe/:recipeId" element={<SingleRecipe />} />
      <Route path="/createrecipe" element={<CreateRecipe />} />
      <Route path="/recipebox" element={<RecipeBox />} />
    </Routes>
  </BrowserRouter>
);

export default App;
