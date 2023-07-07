import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ProviderRandomStore } from '../Context';
import { Home, MyAccount, MyOrder, MyOrders, NotFound, Sigin } from '../Pages';
import './App.css';


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/MyAccount', element: <MyAccount /> },
    { path: '/MyOrders', element: <MyOrders /> },
    { path: '/MyOrders/:id', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/SigIn', element: <Sigin /> },
  ]);

  return routes;
};


function App() {

  return (
    <ProviderRandomStore>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ProviderRandomStore>
  )
}

export { App };
