import '../App.css';
import { Link } from "react-router-dom";


export function Home() {
  return (
    
    <div className="App">
      <h1>eARth</h1>
      <header className="App-header">
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3>
              Welcome to eARth, Here you can upload your very own 3D Augmented Reality(AR) models and customize them and then use them in our AR app.
            </h3>
            <p>login or sign up for an account to continue to the rest of the website</p>
            <div>
                <Link to="/login">
                <button >Login </button>
                </Link>
                <p>Or</p>
                <Link to="/signup">
                <button >Signup</button>
                </Link>
            </div>
        <div>
     
        </div>
      </header>
    </div>
 
  );
}

export default Home;