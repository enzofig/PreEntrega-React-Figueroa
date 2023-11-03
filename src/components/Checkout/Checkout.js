import React, { useState, useContext } from 'react';
import CartContext from '../context/CartContext';
import { db } from "./config/firebase";
import { writeBatch, Timestamp, doc, setDoc } from "firebase/firestore";
import CheckoutForm from '../CheckoutForm/CheckoutForm'; // 

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const createOrder = async ({ name, phone, email }) => {
    if (loading) {
      return <h1>Se está generando su orden...</h1>;
    }

    if (orderId) {
      return <h1>El ID de su orden es: {orderId}</h1>;
    }

    setLoading(true);

    try {
      const orderData = {
        buyer: { name, phone, email },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const orderRef = doc(db, 'orders'); 

     
      batch.set(orderRef, orderData);

      
      for (const item of cart) {
        const productRef = doc(db, 'products', item.productId);
      
        const newStock = item.stock - item.quantity;
        batch.update(productRef, { stock: newStock });
      }

    
      await batch.commit();

      setOrderId(orderRef.id); 

      clearCart(); 
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      {orderId ? (
        <h1>El ID de su orden es: {orderId}</h1>
      ) : (
        <CheckoutForm onConfirm={createOrder} />
      )}
    </div>
  );
};

export default Checkout;