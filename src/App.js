// Import data

// Import components
import './App.css';
import Gallery from './Components/Gallery'
import Sidebar from './Components/Sidebar';
import Directory from './Components/Directory';
import Searchbar from './Components/Searchbar';


function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <Sidebar/>
        <Gallery/>
        <Directory/>
        <Searchbar/>
      </div>
    </div>
  );
}

export default App;
