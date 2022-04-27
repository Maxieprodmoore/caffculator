import { Link} from 'react-router-dom';

function AppHeader (){
    return(
        <div>
            <nav>
                <Link to="/"><h1>Caffculator</h1></Link>

                <div className="linkButtons">
                    <Link to="/">Calculator</Link>
                    <Link to="/resourcesNmaterials">Resources & Materials</Link>
                    <Link to="/shop">Shop</Link>
                </div>            
            </nav>

        </div>
        
    );
}

export default AppHeader;