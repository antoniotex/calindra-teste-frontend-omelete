import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {
    const [ products, setProducts ] = useState({})
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        searchProducts()
    }, []);

    /**
     * Função para buscar os produtos de acordo com a palavra-chave
     * @param {*} query 
     */
    const searchProducts = async (query) => {
        setLoading(true)
        try {
            let items = null;

            console.log('passe')

            // Esta verificação é feita só para preencher os produtos na página inicial
            if(!query){
                await axios.all([
                    axios.get(`/autocomplete/${'marvel'}`),
                    axios.get(`/autocomplete/${'batman'}`),
                    axios.get(`/autocomplete/${'caneca'}`)
                ]).then(axios.spread((res1, res2, res3) => {
                    items = [...res1.data.items, ...res2.data.items, ...res3.data.items]
               }))
            }else{
                const result = await (await axios.get(`/autocomplete/${query}`))
                items = result.data.items
            }

            setProducts({
                items,
                query
            })
            
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