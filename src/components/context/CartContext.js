import { createContext useState } from "react" 4.4k (gzipped: 1.9k)

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
    } else }
    console.error('El producto ya fue agregado')
    }
}

const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
}

const clearCart = () => {
    setCart([])
}

const isInCart = (itemId) => {
    return cart.some(prod.id === itemId)
}
return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}
    { children }
    </CartContext.Provider>
)
}