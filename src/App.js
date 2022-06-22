import React from 'react';
import Menulist from './components/menu-list';

function App() {
  return (
    <>
      <div className="Main-App">
        <section className ="top">
            <h1 className = "App-header">Our Menu</h1>
                <Menulist />
          </section>
      </div>
    </>
  );
}

export default App;
