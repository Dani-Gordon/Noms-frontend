import React from 'react';
import { createRecipe, getAllIngredients } from '../lib/api';
import { useNavigate } from 'react-router-dom';

function CreateOwnRecipe() {
  const navigate = useNavigate();
  const [allIngredients, setAllIngredients] = React.useState([
    { id: 0, name: '' },
  ]);

  const [newRecipe, setNewRecipe] = React.useState({
    name: '',
    description: '',
    prep: null,
    total: null,
    ingredients: '',
    directions: '',
    image: '',
  });

  function handleChange(event) {
    setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();

    const getData = async () => {
      try {
        await createRecipe(newRecipe);
        navigate('/recipebox');
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }

  React.useEffect(() => {
    const getIngredients = async () => {
      try {
        const data = await getAllIngredients();
        setAllIngredients(data);
      } catch (err) {
        console.error(err);
      }
    };
    getIngredients();
  }, []);

  const handleIngredientSelect = (e) => {
    setNewRecipe({
      ...newRecipe,
      ingredients: [...newRecipe.ingredients, e.target.dataset.id],
    });
  };

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter box"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">Recipe Name: </label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Recipe Name"
                  name="name"
                  onChange={handleChange}
                  value={newRecipe.name}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Description: </label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Description "
                  name="description"
                  onChange={handleChange}
                  value={newRecipe.description}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Prep Time</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="total Prep time (mins)"
                  name="prep"
                  onChange={handleChange}
                  value={newRecipe.prep}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Total Time</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Prep + Cook time (total mins)"
                  name="total"
                  onChange={handleChange}
                  value={newRecipe.total}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Ingredients</label>
              {allIngredients.map((ingredient) => (
                <button
                  type="checkbox"
                  onChange={handleIngredientSelect}
                  key={ingredient.id}
                  value={ingredient.name}
                  data-id={ingredient.name}
                >
                  {ingredient.name}
                </button>
              ))}
              <div className="control">
                <input
                  className="input"
                  placeholder="ingredients"
                  name="ingredients"
                  onChange={handleChange}
                  value={newRecipe.ingredients}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Directions</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="directions"
                  name="directions"
                  onChange={handleChange}
                  value={newRecipe.directions}
                />
              </div>
              <div className="field">
                <label className="label">Image</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="https://......."
                    name="image"
                    onChange={handleChange}
                    value={newRecipe.image}
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-dark is-fullwidth">
                  Add to your Noms Box!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateOwnRecipe;
