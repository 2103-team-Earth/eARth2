import './App.css';
import Routes from "./routes"

import { Navbar } from "./components/Navbar"

export function App() {
  return (
    
    <div className="App">
      <Navbar />
      <h1>eARth</h1>
      <header className="App-header">
      <Routes />
       
      </header>
    </div>
 
  );
}

export default App;


