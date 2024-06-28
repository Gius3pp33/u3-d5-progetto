import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import TrendingNow from './components/TrendingNow';
import WatchItAgain from './components/WatchItAgain';
import NewReleases from './components/NewReleases';
import Filters from './components/Filters';
import EditProfile from './components/EditProfile'; 
import Error from './components/Error';

function App() {
  const [page, setPage] = useState('home'); 
 // funzione per renderizzare la pagina in base allo stato pagina
  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <>
            <Filters />
            <TrendingNow />
            <WatchItAgain />
            <NewReleases />
            <MyFooter />
          </>
        );
      case 'edit-profile':
        return <EditProfile />;
      default:
        return <Error message="Pagina non trovata"/>;
    }
  };

  return (
    <div className="bg-dark text-white">
      <MyNavbar setPage={setPage} /> 
      <main className='container-fluid mt-4'>
        {renderPage()}
      </main>
 
    </div>
  );
}

export default App;
