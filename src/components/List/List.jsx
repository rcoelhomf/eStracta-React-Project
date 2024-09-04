import { useState } from "react"
import ReactPaginate from "react-paginate"
import './index.css'

export const ItemList = ({ filteresProducts }) => {
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 25

    const startItemsPage = currentPage * itemsPerPage
    const endItemsPage = startItemsPage + itemsPerPage

    const currentItems = filteresProducts.slice(startItemsPage, endItemsPage)

    const handlePage = (e) => {
        setCurrentPage(e.selected)
    }

    return (
        <div className="listContainer">
            <ul className="list-group actualList">
                {currentItems.map((item) => (
                    <li key={item.id} className="list-group-item listItem">
                        <img src={item.image} />
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
            <ReactPaginate 
                previousLabel={'<<'}
                nextLabel={'>>'}
                breakLabel={'...'}
                pageCount={Math.ceil(filteresProducts.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePage}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    )
}