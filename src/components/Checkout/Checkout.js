import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import {db} from "./config/firebase";

import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {

        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
            date: Timestamp.fromDate(new Date())          }
        }

        const batch = writeBatch(db)

        const outOfStock = []
        
        if(loading) {
            return <h1>Se esta generando su orden...</h1>
        }

        if(orderId) {
            return <h1>El id de su orden es: {orderId}</h1>
        }

        return (
            <div>
                <h1>Checkout</h1>
                <CheckoutForm onConfirm={createOrder}/>
            </div>
        )

}

export default Checkout