import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../contexts/MyContext';
import RecipeCard from '../components/RecipeCard';
import Loading from '../components/Loading';
import '../styles/explorer.css';

function FoodOrigin() {
  const { mealsOrigin, meals, setMealsUrl } = useContext(MyContext);

  const handleFoodsApiRequest = (value) => {
    console.log(value);
    if (value === 'All') {
      setMealsUrl('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    } else {
      setMealsUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`);
    }
  };
  console.log(meals);
  return (
    <section>
      <Header pageTitle="Explorar Origem" searchFeat />
      <select
        className="explorerLabel"
        data-testid="explore-by-area-dropdown"
        onChange={ (e) => handleFoodsApiRequest(e.target.value) }
      >
        {mealsOrigin.map((origin, index) => (
          <option
            key={ index }
            data-testid={ `${origin.strArea}-option` }
            value={ origin.strArea }
          >
            {origin.strArea}
          </option>
        ))}
      </select>

      <main className="master">
        {
          (
            (!meals.length) ? <Loading />
              : meals.map((meal, index) => (
                <Link key={ index } to={ `/comidas/${meal.idMeal}` }>
                  <RecipeCard
                    key={ index }
                    imgUrl={ meal.strMealThumb }
                    name={ meal.strMeal }
                    index={ index }
                  />
                </Link>
              ))
          )
        }
      </main>
      <Footer />
    </section>
  );
}

export default FoodOrigin;
