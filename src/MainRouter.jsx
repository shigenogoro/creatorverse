import { useRoutes } from 'react-router-dom';
import App from './App';
import ViewCreator from './pages/ViewCreator/ViewCreator';
import EditCreator from './pages/EditCreator/EditCreator';

const MainRouter = () => {
    // Routing
    const routes = useRoutes([
        { 
            path: '/', 
            element: <App />,
            // children: {
            //     path: '/view', element: <ViewCreator />
            // }
        },
        {
            path: '/view/:id',
            element: <ViewCreator />
        },
        {
            path: '/edit/:id',
            element: <EditCreator />
        }
    ]);
    
    return (
        <div>
            {routes}
        </div>
    )
}

export default MainRouter;