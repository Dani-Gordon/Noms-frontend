import React from 'react';
import { createRecipe, getAllIngredients } from '../lib/api';
import { useNavigate } from 'react-router-dom';

function CreateOwnRecipe() {
  const navigate = useNavigate();
  const [allIngredients, setAllIngredients] = React.useState([
    { id: 0, name: '' },
  ]);
  const [selectedIngredients, setSelectedIngredients] = React.useState([]);
  const [newRecipe, setNewRecipe] = React.useState({
    name: '',
    description: '',
    prep: null,
    total: null,
    ingredients: [],
    directions: '',
    image: '',
  });

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
  }, [selectedIngredients]);

  function handleChange(event) {
    setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await createRecipe({ ...newRecipe, ingredients: selectedIngredients });
      navigate('/recipebook');
    } catch (err) {
      console.error(err);
    }
  }

  const handleIngredientSelect = (e) => {
    e.preventDefault();
    console.log({ selectedIngredients });
    setSelectedIngredients(
      selectedIngredients.includes(e.target.dataset.id)
        ? selectedIngredients.filter((i) => i !== e.target.dataset.id)
        : [...selectedIngredients, e.target.dataset.id]
    );
  };

  console.log({ selectedIngredients });

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
                  value={newRecipe.prep || 0}
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
                  value={newRecipe.total || 0}
                />
              </div>
            </div>
            <div className="field checkboxes">
              <label className="label">Ingredients</label>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {allIngredients.map((ingredient) => {
                  //is ground beef an alredy selected ingredient?
                  console.log('IGNREDIENTS ARE', newRecipe.ingredients);
                  const isChecked = selectedIngredients.includes(
                    ingredient.name
                  );
                  return (
                    <div style={{ width: '50%' }} key={ingredient.id}>
                      <label
                        htmlFor={ingredient.id}
                        style={{ display: 'block' }}
                      >
                        {ingredient.name}
                        <input
                          style={{ marginLeft: '5px' }}
                          checked={isChecked}
                          id={ingredient.id}
                          type="checkbox"
                          onChange={handleIngredientSelect}
                          value={ingredient.name}
                          data-id={ingredient.name}
                        ></input>
                      </label>
                    </div>
                  );
                })}
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
                  Add to Recipe Book!
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
