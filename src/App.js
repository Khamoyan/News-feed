import React from 'react'

import PageHeader from './containers/pageHeader'
import Routes from './routes'

function App() {
  return (
    <>
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
