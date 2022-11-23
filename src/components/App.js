import '../styles/App.scss';

function App() {
  return (
    <div className='App'>
      <main>
        <section className='hero'>
          <h1 className='hero__title'>Hi, I'm Yara</h1>
          <nav>
            <ul className='hero__menu'>
              <li>New Game</li>
              <li>Continue</li>
              <li>Load Game</li>
              <li>Options</li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default App;
