import React from 'react';
import { renderRoutes } from 'react-router-config';
import { connect } from 'dva';
import styled from 'styled-components';

const App = connect(({ count }) => ({ count }))(({ route }) => (
  <Container>
    <h1>Koa-React-Start</h1>
    <div className='main'>
      {renderRoutes(route.routes)}
    </div>
  </Container>
));

export default App;

const Container = styled.div`
  .main {
    
  }
`;
