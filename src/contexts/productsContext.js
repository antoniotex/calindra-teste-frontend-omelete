import React, { createContext, useState } from 'react'
import omeleteAPI from '../services/omeleteAPI'

export const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {
    const [ products, setProducts ] = useState([])

    const searchProducts = async () => {
        const response = await omeleteAPI.get('/autocomplete/camiseta')
        console.log(response.data)
    }

    return (
        <ProductsContext.Provider value={{ products, searchProducts }}>
            { children }
        </ProductsContext.Provider>
    )
}

export default ProductsProvider