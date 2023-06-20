import { NavBar } from '../NavBar';
import './Layout.css';

function Layout( {children} ) {
    
    return(
        <main>
            <NavBar></NavBar>
            {children}
        </main>
    );
}

export { Layout };