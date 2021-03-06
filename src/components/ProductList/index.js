import React, { useContext } from 'react'
import { ProductsContext } from '../../contexts/productsContext'
import ProductCard from '../ProductCard'
import './style.css'

const ProductList = () => {
    const { products, searchProducts } = useContext(ProductsContext)
    return (
        <section className='productList'>
            <h1 className='productList__title'>
                { !products || !products.items || typeof products.items !== 'object' ? 'Ocorreu um erro, tente novamente mais tarde'
                    : !products.query ? 'Página Inicial'
                    : products.items.length > 0 ? `Busca por '${products.query}'`
                    : `Não encontramos nenhum produto em sua busca por '${products.query}'`}
            </h1>

            {products.query && <span className='productList__back' onClick={() => searchProducts('')}>Voltar para Página Inicial</span>}

            <div className='productList__list'>
                {products.items && products.items.map((item, index) => (
                    <ProductCard product={item} key={index} />
                ))}
            </div>
        </section>
    )
}

export default ProductList
