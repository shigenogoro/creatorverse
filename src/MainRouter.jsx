import { useRoutes } from 'react-router-dom';
import App from './App';
import ViewCreator from './pages/ViewCreator/ViewCreator';

const MainRouter = () => {
    // Routing
    const routes = useRoutes([
        { 
            path: '/', 
            element: <App />
        },
        {
            path: '/view/:id',
            element: <ViewCreator />
        }
    ]);
    
    return (
        <div>
            {routes}
        </div>
    )
}

export default MainRouter;