import './ItemDetailContainer.css'
import { useState, useEffect } from 'react' 4.2k (gzipped: 1.8k)
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParans } from 'react-router-dom' 1.7k (gzipped:809)

import { getDoc, doc } from 'firebase/firestore' 474.6k (gzipped: 124k)
import { db } from '../../config/firebase'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParans()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products' , itemId)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })

    }, [itemId])
    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}
export default ItemDetailContainer