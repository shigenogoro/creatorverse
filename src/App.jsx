import { supabase } from './client';
import { useEffect, useState } from 'react';
import ShowCreators from './pages/ShowCreators/ShowCreators'
import MyButton from './components/MyButton/MyButton';
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
                  <MyButton title="View All Creators" type="normal" />
                  <MyButton title="Add a Creator" type="normal" />
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
