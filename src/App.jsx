import { supabase } from './client';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
    // Get the state from locataion object
    const location = useLocation();
    
    // Mounting as Page Loaded
    useEffect(() => {
        if(location.state && location.state.page) {
            setPage(location.state.page);
            if(location.state.creatorId) {
                setSelectedCreatorId(location.state.creatorId);
            }
            scrollToMain();
        }
        getCreators();
    }, [location.state]);

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

    const handlePageChange = (newPage) => {
      setPage(newPage);
      if (newPage === 'show') {
          getCreators(); // Refresh the list of creators when returning to the ShowCreators page
      }
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
              {(page === 'show' || page == '' || page === undefined) && (
                  <ShowCreators 
                      creators={creators} 
                      onEdit={(id) => handlePageSwitch('edit', id)} 
                  />
              )}
              {page === 'add' && 
                  <AddCreator onPageChange={handlePageChange} />
              }
              {page === 'edit' && 
                  selectedCreatorId && 
                  <EditCreator creatorId={selectedCreatorId} onPageChange={handlePageChange} />
              }
          </main>
        </div>
    )
}

export default App
