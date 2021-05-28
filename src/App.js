import React from 'react'

import PageHeader from './containers/pageHeader'
import Routes from './routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ToastContainer />
      <header>
        <PageHeader />
      </header>
      <main>
        <Routes />
      </main>
    </>
  );
}

export default App;
