const products = [
    {
        id:'1',
        name: 'Camiseta de Argentina'
        price:1000,
        category: 'camisetas',
        img:'https://camisetasdefutbolbaratas.shop/store/camiseta-argentina-3-estrellas/'
        stock: 45,
        description:'Descripcion de la camiseta de la Seleccion Argentina'
    },
    {id: '2', name: 'Camisete de Argentina Alternativa', price:800, category: 'camisetas', img:'https://gauchofood.com/es/camiseta-argentina-alternativa-2022-mujer-argentina-soccer-team-alternative-shirt/'}

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
          
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))

        },500)
    })
}
