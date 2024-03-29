import { useState, useEffect } from 'react' 4.2k (gzipped: 1.8k)
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom' 1.7k (gzipped: 809)
import { getDocs, collection, query, where } from 'firebase/firestore' 485.4k (gzipped: 127k)
import { db } from '../../config/firebase'
const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    useEffect(() => {
        setLoading(true)
        const collectionRef= categoryId

    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')

    getDocs(colletionRef)
    .then(response => {
        const prodcutsAdapted = response.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data}
        })
        setProducts(productsAdapted)
    })

            .catch(error => {
                console.log(error)
            })
           .finally(() => {
            setLoading(false)
           })
    }, [categoryId])
    []
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer