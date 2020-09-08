import React from 'react';
import 'typeface-roboto';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import { HashRouter } from 'react-router-dom';
import dva from 'dva';
import count from './model/count';

const app: any = dva();
app.model(count);

const App = function () {
  return (
    <div className="App">
      <HashRouter>{renderRoutes(routes)}</HashRouter>
    </div>
  );
};

app.router(() => <App />);
app.start('#root');

export const store = app._store;
