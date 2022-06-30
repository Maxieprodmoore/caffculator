import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import Navbar from './views/components/header';
import Homepage from './views/pages/homepage';
import Shop from './views/pages/shop';
import ResourcesNMaterials from './views/pages/resourcesNMaterials.js';
import Footer from './views/components/footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Set the base path to the folder you copied Shoelace's assets to
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.77/dist/');

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />              
            <Route path='shop/*' element={<Shop />} />
            <Route path='resourcesNmaterials/*' element={<ResourcesNMaterials />} />              
          </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
