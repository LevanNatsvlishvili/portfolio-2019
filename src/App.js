import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import Theme from 'Theme';
import { ThemeProvider } from '@material-ui/styles';
import { RenderRoutes } from 'Routes';
import Layout from 'Layout'
import 'index.css'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>

        <Layout>
          <CssBaseline />
          <RenderRoutes />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
