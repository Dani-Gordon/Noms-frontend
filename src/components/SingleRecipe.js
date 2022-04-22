import React from 'react';
import { Link } from 'react-router-dom';
import { getSingleRecipeById } from '../lib/api';
import { useParams } from 'react-router-dom';

const SingleRecipe = () => {
  const { recipeId } = useParams();
  const [singleRecipe, setSingleRecipe] = React.useState(null);

  React.useEffect(() => {
    const getOne = async () => {
      try {
        const data = await getSingleRecipeById(recipeId);
        setSingleRecipe(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    getOne();
  }, []);

  if (!singleRecipe) {
    return <p>this is where one recipe will show up...</p>;
  }
  return (
    <div>
      <div className="title is-1 has-text-centered"> Noms.... </div>
      <div className="container">
        <div className="columns is-multiline">
          <Link to={`/recipes/detail/${recipeId}`}>
            <div className="column card m-5 is-one-quarter recipe-card">
              <strong>Name: </strong>
              {singleRecipe.name} <br />
              <strong>Description: </strong>
              {singleRecipe.description} <br />
              <strong>Prep Time: </strong>
              {singleRecipe.prep} <strong>min</strong>
              <br />
              <strong>Total Time: </strong>
              {singleRecipe.total} <strong>min</strong> <br />
              <strong>Ingredients:</strong>
              {singleRecipe.ingredients.map((food) => (
                <div key={food.ingredient.id}>
                  {food.quantity} - {food.ingredient.name}
                </div>
              ))}
              <strong>Directions: </strong>
              {singleRecipe.directions} <br />
              <img src={singleRecipe.image} alt={singleRecipe.name} />
              <br />
            </div>

            {/* <div>
          <div>
            <h2>{recipe.name}</h2>
          </div>
          <div>
            <figure>
              <img src={recipe.image} alt={recipe.description} />
            </figure>
          </div>
          <div>
            <h3>
              {recipe.prep} {recipe.total}
            </h3>
          </div>
          <div>
            <h4>[{recipe.ingredients}]</h4>
          </div>
          <div>
            <h5>{recipe.directions}</h5>
          </div>
        </div> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
