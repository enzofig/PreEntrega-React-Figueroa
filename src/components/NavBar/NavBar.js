import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom' 8.3k (gzipped: 3.4k)
const NavBar = () => {
    return (
        <nav className="NavBar" >
Link to='/'>
<h3>Ecommerce</h3>
</Link>
div className='Categories'>
<NavLink to={'/category/camisetas'} className={({ isActive})} => isActive ? 'ActiveOption' : 'Option'}<Camisetas></NavLink>
<NavLink to={'category/camisetas'} className={({ isActive}) => isActive}) => isActive ? 'ActiveOption' : 'Option'}<Camisetas></NavLink>   
 </div>
        <CartWidget />
 </nav>
    )
}

export default NavBar