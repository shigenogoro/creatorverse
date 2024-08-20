import ShowCreators from './pages/ShowCreators/ShowCreators'
import './App.css'

function App() {

  return (
      <div>
        <header>
          <h1>Creatorverse</h1>
          <div className="nav-container">
            <nav>
                <button>
                    <h2>View All Creators</h2>
                </button>
                <button>
                    <h2>Add a Creator</h2>
                </button>
            </nav>
          </div>
        </header>

        <main>
            <ShowCreators />
        </main>
      </div>
  )
}

export default App
