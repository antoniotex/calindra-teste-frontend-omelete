import React, { useContext } from 'react'
import { ProductsContext } from '../../contexts/productsContext'
import ProductCard from '../ProductCard'
import './style.css'

const ProductList = () => {
    const { products } = useContext(ProductsContext)
    return (
        <section className='productList'>
            <h1 className='productList__title'>
                { !products.query ? 'Página Inicial'
                    : products.items.length > 0 ? `Busca por '${products.query}'`
                    : `Não encontramos nenhum produto em sua busca por '${products.query}'`}
            </h1>

            <div className='productList__list'>
                {products.items && products.items.map((item, index) => (
                    <ProductCard product={item} key={index} />
                ))}
            </div>
        </section>
    )
}

export default ProductList
