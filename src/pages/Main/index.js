import React, { useContext } from 'react'
import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import { ProductsContext } from '../../contexts/productsContext'

const Main = () => {
    const { products, loading } = useContext(ProductsContext)

    return (
        <main>
            <Header />
            { loading && <Loading /> }
            { products.length > 0 && !loading && <ProductList /> }
        </main>
    )
}

export default Main
