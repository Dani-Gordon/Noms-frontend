import React from 'react';
import { Link } from 'react-router-dom';
import { getAllLikedRecipesForUser } from '../lib/api';
// import { useParams } from 'react-router-dom';

const RecipeBox = () => {
  // const { id } = useParams();
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
    <section>
      <div className="title is-1 has-text-centered"> Recipe Box </div>
      <div className="container">
        <div className="columns is-multiline">
          {recipeBox.map((recipe) => (
            <div
              key={recipe.id}
              className="column card m-5 is-one-quarter recipe-card"
            >
              <Link to={`/recipebox/${recipe.id}/myFavorite`}>
                {recipe.name} <br />
                {recipe.description} <br />
                Prep Time: {recipe.prep} <br />
                Total Time: {recipe.total} <br />
                {/* {recipe.ingredients} <br /> */}
                <div className="directions">
                  {/* {recipe.directions} <br /> */}
                </div>
                <figure className="image is-5by6">
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

export default RecipeBox;
