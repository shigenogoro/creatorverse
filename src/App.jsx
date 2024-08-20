import backgroundImgSrc from './assets/static/creatorverse.jpg';
import CardDeck from './components/CardDeck';
import './App.css'

function App() {

  return (
      <div>
        <header>
          <h1>Creatorverse</h1>
          <nav>
            <button>View All Creators</button>
            <button>Add new Creator</button>
          </nav>
        </header>
        <main>
            <CardDeck />
        </main>
      </div>
  )
}

export default App
