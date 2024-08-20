import { supabase } from './client';
import { useEffect, useState } from 'react';
import ShowCreators from './pages/ShowCreators/ShowCreators'
import './App.css'

function App() {
    // State Management
    const [creators, setCreators] = useState([]);
    
    // Mounting as Page Loaded
    useEffect(() => {
        getCreators();
    }, []);

    // Functions
    const getCreators = async () => {
        const { data } = await supabase.from("creators").select();
        setCreators(data);
    }

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
              <ShowCreators creators={creators} />
          </main>
        </div>
    )
}

export default App
