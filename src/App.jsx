import { supabase } from './client';
import { useEffect, useState } from 'react';
import ShowCreators from './pages/ShowCreators/ShowCreators';
import AddCreator from './pages/AddCreator/AddCreator';
import EditCreator from './pages/EditCreator/EditCreator';
import MyButton from './components/MyButton/MyButton';
import './App.css'

function App() {
    // State Management
    const [creators, setCreators] = useState([]);
    const [page, setPage] = useState('show');
    // Store selected creator's ID
    const [selectedCreatorId, setSelectedCreatorId] = useState(null);  
    
    // Mounting as Page Loaded
    useEffect(() => {
        getCreators();
    }, []);

    // Functions
    const getCreators = async () => {
        const { data } = await supabase.from("creators").select();
        setCreators(data);
    }

    const handlePageSwitch = (newPage, id = null) => {
        setPage(newPage);
        setSelectedCreatorId(id);  // Set the selected creator's ID if provided
        scrollToMain();
    }

  // Scroll to Main-Div
  const scrollToMain = () => {
      const mainDiv = document.querySelector('#main-page');
      if (mainDiv) {
          mainDiv.scrollIntoView({ behavior: 'smooth' });
      }
  }

    return (
        <div>
          <header>
            <h1>Creatorverse</h1>
              <div className="nav-container">
                  <nav>
                      <MyButton 
                          title="View All Creators" 
                          type="normal" 
                          onClick={() => handlePageSwitch('show')} 
                      />
                      <MyButton 
                          title="Add a Creator" 
                          type="normal" 
                          onClick={() => handlePageSwitch('add')} 
                      />
                  </nav>
              </div>
          </header>

          <main id='main-page'>
              {page === 'show' && (
                      <ShowCreators 
                          creators={creators} 
                          onEdit={(id) => handlePageSwitch('edit', id)} 
                      />
              )}
              {page === 'add' && <AddCreator />}
              {page === 'edit' && selectedCreatorId && <EditCreator creatorId={selectedCreatorId} />}
          </main>
        </div>
    )
}

export default App
