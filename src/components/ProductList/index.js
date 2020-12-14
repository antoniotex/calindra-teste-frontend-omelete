import React, { useContext } from 'react'
import { ProductsContext } from '../../contexts/productsContext'
import ProductCard from '../ProductCard'

const ProductList = () => {
    const { products } = useContext(ProductsContext)
    
    return (
        <section>
            {products.map((item, index) => (
                <ProductCard product={item} key={index} />
            ))}
        </section>
    )
}

export default ProductList
