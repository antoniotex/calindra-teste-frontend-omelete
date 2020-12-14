import React, { useContext } from 'react'
import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import { ProductsContext } from '../../contexts/productsContext'

const Main = () => {
    const { products } = useContext(ProductsContext)

    return (
        <main>
            <Header />
            { products.length > 0 && <ProductList /> }
        </main>
    )
}

export default Main
