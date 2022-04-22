import React from 'react';
import { Link } from 'react-router-dom';
import { getAllRecipes } from '../lib/api';

const RecipeBook = () => {
  const [recipeBook, setRecipeBook] = React.useState(null);
  const [liked, setLiked] = React.useState(null);

  React.useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await getAllRecipes();
        setRecipeBook(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    getRecipes();
  }, []);

  if (!recipeBook) {
    return <p>Loading...</p>;
  }

  const handleLikeButton = async () => {
    if (liked === true) {
      // const data = await removeLikedRecipe(recipeId);
      // setRecipe(data);
      setLiked(false);
    } else {
      // const data = await addLikedRecipe(recipeId);
      // setRecipe(data);
      setLiked(true);
    }
  };

  return (
    <section>
      <div className="title is-1 has-text-centered"> Recipe Book </div>
      <div className="container">
        <div className="columns is-multiline">
          {recipeBook.map((recipe) => (
            <div
              key={recipe.id}
              className="column card m-5 is-one-quarter recipe-card"
            >
              <Link to={`/singlerecipe/${recipe.id}`}>
                <strong>Name: </strong>
                {recipe.name} <br />
                <strong>Description: </strong>
                {recipe.description} <br />
                <strong>Prep Time: </strong>
                {recipe.prep} <strong>min</strong> <br />
                <strong>Total Time:</strong> {recipe.total} <br />
                {/* {recipe.ingredients} <br /> */}
                <strong>Directions: </strong>
                <div className="directions">
                  {/* {recipe.directions} <br /> */}
                </div>
                <figure className="image is-5by6">
                  <img src={recipe.image} alt={recipe.name} />
                </figure>
              </Link>
              <button
                className="like-button button is-info"
                onClick={handleLikeButton}
              >
                {liked ? '♥' : '♡'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  // <p>{JSON.stringify(recipeBook)}</p>;
};

export default RecipeBook;
