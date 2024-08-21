import { useRoutes } from 'react-router-dom';
import App from './App';
import ViewCreator from './pages/ViewCreator/ViewCreator';
import EditCreator from './pages/EditCreator/EditCreator';
import AddCreator from './pages/AddCreator/AddCreator';

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
        }, 
        {
            path: '/add',
            element: <AddCreator />
        }
    ]);
    
    return (
        <div>
            {routes}
        </div>
    )
}

export default MainRouter;