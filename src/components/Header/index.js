import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../contexts/productsContext'
import Loading from '../Loading'

const Header = () => {
    const [query, setQuery] = useState('')

    const { searchProducts } = useContext(ProductsContext)

    function handleSubmit(e){
        e.preventDefault()
        searchProducts(query)
    }

    return (
        <nav>
            <div className='logo'>LOGO</div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='search' value={query} onChange={e => setQuery(e.target.value)} />
                <input type='submit' value='Buscar' />
            </form>
            <Loading/>
        </nav>
    )
}

export default Header
