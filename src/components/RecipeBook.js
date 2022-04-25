import React from 'react';
import { Link } from 'react-router-dom';
import { getAllRecipes } from '../lib/api';

const RecipeBook = () => {
  const [recipeBook, setRecipeBook] = React.useState(null);

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
                <p className="card-text">
                  <strong>Name: </strong>
                  {recipe.name} <br />
                  <strong>Prep Time: </strong>
                  {recipe.prep} min <br />
                  <strong>Total Time:</strong> {recipe.total} min{' '}
                </p>{' '}
                <br />
                <figure className="image is-6by7">
                  <img src={recipe.image} alt={recipe.name} />
                </figure>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  // <p>{JSON.stringify(recipeBook)}</p>;
};

export default RecipeBook;
