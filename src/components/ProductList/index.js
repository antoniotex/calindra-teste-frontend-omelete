import React, { useContext } from 'react'
import { ProductsContext } from '../../contexts/productsContext'
import ProductCard from '../ProductCard'
import './style.css'

const ProductList = () => {
    const { products } = useContext(ProductsContext)
    
    return (
        <section className='productList'>
            <h1 className='productList__title'>Página Inicial</h1>
            <div className='productList__list'>
                {products.map((item, index) => (
                    <ProductCard product={item} key={index} />
                ))}
            </div>
        </section>
    )
}

export default ProductList
