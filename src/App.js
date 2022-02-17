import React from 'react';
import './App.css';
import Signup from './Components/Signup';

function App() {
  return (<>

    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 mt-3">
          <h1>Description</h1><hr />
          <ul>
            <a href="/"> <li>Home</li> </a><hr />
            <a href="/"> <li>Features</li> </a><hr />
            <a href="/"> <li>Services</li> </a><hr />
            <a href="/"> <li>Prices</li> </a><hr />
            <a href="/"> <li>Reviews</li> </a><hr />
            <a href="/"> <li>About</li> </a><hr />
            <a href="/"> <li>Contact</li> </a><hr />

          </ul>
        </div> {/* col-md-7 */}

        <div className="col-md-6">
          <Signup />
        </div>{/* col-md-5 */}


      </div>
    </div>

  </>);
}

export default App;
