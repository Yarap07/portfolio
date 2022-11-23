import '../styles/App.scss';

function App() {
  return (
    <div className='App'>
      <main>
        <section className='hero'>
          <article className='hero__title'>
            <h1 className='hero__welcome'>Hi, I'm Yara</h1>
            <p className='hero__edition'>Front-End Edition</p>
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
      </main>
    </div>
  );
}

export default App;
