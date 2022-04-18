import { Route } from 'react-router-dom';
import Home from './home';
import Setting from './setting';
import Detail from './detail';

const NotFound = () => {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 404;
      }
      return (
        <div>
          <h1>404 : Not Found</h1>
        </div>
      );
    }}/>
  );
};


export default function createRouter() {
  return [
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/setting',
      component: Setting
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '*',
      component: Home
    }
  ];  
}
