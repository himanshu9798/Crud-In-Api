import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Display from './component/Display';
import ApiExplanation from './component/ApiExplanation';

function App() {
  return (
    <>
     <div class="moving-light"></div>
    <div className="App-header">
    <div>
      <ul style={{listStyle:"none",display:"flex",textDecoration:"none",justifyContent:"space-between",
        marginLeft:"50px",
        marginRight:"150px"
      }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/display">Display</Link></li>
        <li><Link to="/add">Add</Link></li>
        {/* <li><Link to="/edit/:id">Edit</Link></li> */}
      </ul>
     
    </div>
    </div>

   
    </>
  );
}


export default App;
