import React from 'react';
import { Link } from 'react-router-dom';
import { getAllLikedRecipesForUser } from '../lib/api';

const RecipeBox = () => {
  const [recipeBox, setRecipeBox] = React.useState(null);

  React.useEffect(() => {
    const seeRecipeBox = async () => {
      try {
        const data = await getAllLikedRecipesForUser();
        setRecipeBox(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    seeRecipeBox();
  }, []);

  if (!recipeBox) {
    return <p>Loading...</p>;
  }

  return (
    <div className="recipebox-container">
      <div className="title is-1 has-text-centered"> Noms Box </div>
      <div className="container">
        <div className="columns is-multiline">
          {recipeBox.map((recipe) => (
            <div
              key={recipe.id}
              className="column card m-5 is-one-quarter"
              id="recipebox-card"
            >
              <Link to={`/recipebox/${recipe.id}/`}>
                <p className="card-text">
                  <strong>{recipe.name}</strong> <br />
                  Prep Time: {recipe.prep} min <br />
                  Total Time: {recipe.total} min <br />
                </p>
                <figure className="image is-5by6">
                  <img src={recipe.image} alt={recipe.name} />
                </figure>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeBox;
