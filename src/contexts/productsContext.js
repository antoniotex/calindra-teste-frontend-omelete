import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        searchProducts()
    }, []);

    const searchProducts = async (query) => {
        setLoading(true)
        try {
            const response = await axios.get(`/autocomplete/${query || 'marvel'}`)
            setProducts(response.data.items)
            
        } catch (error) {
            console.log(error.message)
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <ProductsContext.Provider value={{ products, searchProducts, loading }}>
            { children }
        </ProductsContext.Provider>
    )
}

export default ProductsProvider