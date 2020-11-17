import React from 'react'

const Pagination = ({matchesPerPage, totalMatches, paginate}) => {
    const pageNumbers = []

    for(let i =1; i <= Math.ceil(totalMatches/ matchesPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        {/* Removed the href by purpose, dont add it otherwise the app will break */}
                         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a onClick={()=> paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
