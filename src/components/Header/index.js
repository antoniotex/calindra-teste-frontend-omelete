import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../contexts/productsContext'
import logo from '../../assets/images/logo-omelete.svg'
import './style.css'

const Header = () => {
    const [query, setQuery] = useState('')

    const { searchProducts } = useContext(ProductsContext)

    function handleSubmit(e){
        e.preventDefault()

        if(!query){
            alert('Você esqueceu da palavra-chave.')
            return
        }

        if(query.length < 3){
            alert('A palavra-chave deve ter pelo menos 3 letras.')
            return
        }

        searchProducts(query)
    }

    return (
        <nav className='header'>
            <img src={logo} className='header__logo' alt='Logo da Omelete Store.' title='Logo da Omelete Store' onClick={() => searchProducts('')} />
            <form className='search' onSubmit={handleSubmit}>
                <input className='search__query' placeholder='Buscar produtos incríveis' type='text' name='search' value={query} onChange={e => setQuery(e.target.value)} />
                <input className='search__submit' type='submit' value='Buscar' />
            </form>
        </nav>
    )
}

export default Header
