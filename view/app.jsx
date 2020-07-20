import React from 'react';
import { renderRoutes } from "react-router-config";
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { connect } from 'dva';
import styled from 'styled-components';

const App = connect(({ count }) => ({ count }))(({ dispatch, route }) => (
  <Container>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Koa-React-Start
        </Typography>
      </Toolbar>
    </AppBar>

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
