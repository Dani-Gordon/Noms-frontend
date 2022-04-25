import React from 'react';
// import { Link } from 'react-router-dom';
import { getSingleRecipeById } from '../lib/api';
import { getLoggedInUserId } from '../lib/authentication';
import { addLikedRecipe } from '../lib/api';
import { removeLikedRecipe } from '../lib/api';
// import { isLiked } from '../lib/likedFunction';
import { useParams } from 'react-router-dom';
// import { getCurrentUserById } from '../lib/auth';

const SingleRecipe = () => {
  const { recipeId } = useParams();
  const [singleRecipe, setSingleRecipe] = React.useState(null);
  const [liked, setLiked] = React.useState(null);

  React.useEffect(() => {
    const getOne = async () => {
      const recipedata = await getSingleRecipeById(recipeId);
      if (window.sessionStorage.token) {
        // const user = await getCurrentUserById(getLoggedInUserId());
        // setLiked(isLiked(user, recipedata));
      }
      setSingleRecipe(recipedata);
    };
    getOne();
  }, [liked]);

  if (!singleRecipe) {
    return <p>this is where one recipe will show up...</p>;
  }

  const handleLikeButton = async (e) => {
    e.preventDefault();
    if (liked === true) {
      console.log('already liked');
      const data = await removeLikedRecipe(recipeId);
      console.log('unliked', data);
      // setSingleRecipe(data);
      setLiked(false);
    } else {
      const data = await addLikedRecipe(recipeId);
      console.log('liked', data);
      // setSingleRecipe(data);
      setLiked(true);
    }
  };
  return (
    <div>
      <div className="singlerecipe-container">
        <div className="columns">
          {/* <Link to={`/recipes/detail/${recipeId}`}> */}
          <div className="column card m-5 is-one-quarter single-recipe-card">
            <h1>{singleRecipe.name} </h1>
            <br />
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
            <figure className="image is-1by1">
              <img src={singleRecipe.image} alt={singleRecipe.name} />
            </figure>
            {/* <img src={singleRecipe.image} alt={singleRecipe.name} /> */}
            <br />
            {getLoggedInUserId() && (
              <>
                <button
                  className="like-button button is-info"
                  onClick={handleLikeButton}
                >
                  {liked ? '♥' : '♡'}
                </button>
              </>
            )}
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
