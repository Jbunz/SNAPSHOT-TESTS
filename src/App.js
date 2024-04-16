// App.js
import React from 'react';
import './App.css';
import GitHubCard from './GitHubCard'; // Import the GitHubCard component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GitHubCard 
          username="Jbunz"
          imageUrl="/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"
          blurb="Photos make me nervous!"
        />
        <h2>What's Up!?</h2>
        <p></p>
      </header>
    </div>
  );
}

export default App;
