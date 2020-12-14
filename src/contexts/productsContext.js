import React, { createContext, useState } from 'react'
import axios from 'axios'

export const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {
    const [ products, setProducts ] = useState([])

    // useEffect(() => {
    //     searchProducts()
    // }, []);

    const searchProducts = async (query) => {
        try {
            const response = await axios.get(`/autocomplete/${query || 'marvel'}`)
            setProducts(response.data.items)
            
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <ProductsContext.Provider value={{ products, searchProducts }}>
            { children }
        </ProductsContext.Provider>
    )
}

export default ProductsProvider