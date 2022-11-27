import '../styles/App.scss';
import { useState } from 'react';

function App() {
  //Mouseover sobre menu que cambie a opciones reales con transicion y cambio de color
  //Borde se hace más largo con mouseover
  //Letras de título aumentan al mouseover
  //Letras de inicio se mueven con transición
  //Fonod dinámico
  //Toda la página carga con transición
  const [startGame, setStartGame] = useState(false);

  const handleStart = () => {
    setStartGame(true);
  };

  return (
    <div className='App'>
      <main className='main'>
        <button
          class={`start__btn ${startGame ? 'collapsed' : ''}`}
          onClick={handleStart}
        >
          Press Start
        </button>
        <div className={`${startGame ? '' : 'collapsed'}`}>
          <div className='loading__ring'>
            Start
            <span className='loading__item'></span>
          </div>
          <section className='hero'>
            <article className='hero__title'>
              <h1 className='hero__welcome'>
                Hi, I'm Yara<div className='hero__bottom--border'></div>
              </h1>
              <p className='hero__edition'>Front End Edition</p>
            </article>
            <nav>
              <ul className='hero__menu'>
                <li className='hero__list__item'>
                  <a className='hero__link--newGame' href=''>
                    New Game
                  </a>
                </li>
                <li className='hero__list__item '>
                  <a className='hero__link--continue' href=''>
                    Continue
                  </a>
                </li>
                <li className='hero__list__item'>
                  <a className='hero__link--loadGame' href=''>
                    Load Game
                  </a>
                </li>
                <li className='hero__list__item '>
                  <a className='hero__link--options' href=''>
                    Options
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
