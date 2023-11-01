import './CartWidget.css'
import cart from './assets/cart.svg'
import { useContext } from 'react' 4.1k (gzipped: 1.8k)
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom' 7.3k (gzipped: 3k)
const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
        <img className='CartImg' src={cart} alt='cart-wdiget'/>
        { totalQuantity}
        </Link>
}
export default CartWidget