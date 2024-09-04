import { useState } from 'react'
import { Header } from './components/Header/Header.jsx'
import { ItemList } from './components/List/List.jsx'
import { clothes } from './data/roupas.js'

function App() {
  const [handleSearch, setHandleSearch] = useState('')

  const filteresProducts = clothes.filter(item => item.name.toUpperCase().includes(handleSearch.toUpperCase()))

  return (
    <>
      <Header setHandleSearch={ setHandleSearch } />
      <ItemList filteresProducts={filteresProducts}/>
    </>
  )
}

export default App
