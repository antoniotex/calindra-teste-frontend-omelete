import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../contexts/productsContext'
import logo from '../../assets/images/logo-omelete.svg'
import './style.css'

const Header = () => {
    const [query, setQuery] = useState('')

    const { searchProducts } = useContext(ProductsContext)

    function handleSubmit(e){
        e.preventDefault()
        searchProducts(query)
    }

    return (
        <nav className='header'>
            <img src={logo} className='header__logo' alt='Logo da Omelete Store.' title='Logo da Omelete Store' />
            <form className='search' onSubmit={handleSubmit}>
                <input className='search__query' type='text' name='search' value={query} onChange={e => setQuery(e.target.value)} />
                <input className='search__submit' type='submit' value='Buscar' />
            </form>
        </nav>
    )
}

export default Header
