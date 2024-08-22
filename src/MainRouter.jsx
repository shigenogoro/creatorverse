import { useRoutes } from 'react-router-dom';
import ViewCreator from './pages/ViewCreator/ViewCreator';

const MainRouter = () => {
    // Routing
    const routes = useRoutes([
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