import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../contexts/MyContext';

function ExplorerFoods() {
  const { randomMeals } = useContext(MyContext);

  if (randomMeals.length) {
    return (<h3>Carregando...</h3>);
  }
  return (
    <section>
      <Header pageTitle="Explorar Comidas" searchFeat={ false } />
      <nav>
        <Link to="/explorar/comidas/ingredientes">
          <button
            data-testid="explore-by-ingredient"
            type="button"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button
            data-testid="explore-by-area"
            type="button"
          >
            Por Local de Origem
          </button>
        </Link>
        <Link to={ `/comidas/${randomMeals.meals[0].idMeal}` }>
          <button
            data-testid="explore-surprise"
            type="button"
          >
            Me Surpreenda!
          </button>
        </Link>
      </nav>
      <Footer />
    </section>
  );
}

export default ExplorerFoods;
