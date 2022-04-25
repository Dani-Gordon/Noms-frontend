import React from 'react';
// import { Link } from 'react-router-dom';
import { getSingleRecipeById } from '../lib/api';
import { useParams } from 'react-router-dom';

const RecipeCard = () => {
  const { recipeId } = useParams();
  const [recipeCard, setRecipeCard] = React.useState(null);

  React.useEffect(() => {
    const seeRecipeCard = async () => {
      try {
        const data = await getSingleRecipeById(recipeId);
        setRecipeCard(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    seeRecipeCard();
  }, []);

  if (!recipeCard) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <div className="title is-1 has-text-centered"> Recipe Card </div>
      <div className="container">
        <div className="columns is-multiline">
          <div className="column card m-5 is-one-quarter recipecard-card">
            {/* <Link to={`/recipebox/${recipeCard.id}/`}> */}
            <h1>{recipeCard.name}</h1> <br />
            <strong>Description: </strong>
            {recipeCard.description} <br />
            <strong>Prep Time: </strong>
            {recipeCard.prep} <strong>min</strong>
            <br />
            <strong>Total Time: </strong>
            {recipeCard.total} <strong>min</strong> <br />
            <strong>Ingredients:</strong>
            {recipeCard.ingredients.map((food) => (
              <div key={food.ingredient.id}>
                {food.quantity} - {food.ingredient.name}
              </div>
            ))}
            <strong>Directions: </strong>
            {recipeCard.directions} <br />
            <figure className="image is-5by6">
              <img src={recipeCard.image} alt={recipeCard.name} />
            </figure>
            <br />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
  // <p>{JSON.stringify(recipeBook)}</p>;
};

export default RecipeCard;
