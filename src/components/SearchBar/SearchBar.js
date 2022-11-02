import React, { useState } from 'react'
import './SearchBar.css'

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
} 

const SearchBar = ({ searchYelp }) => {
    const [term, setTerm] = useState(undefined)
    const [location, setLocation] = useState(undefined)
    const [sortBy, setSortBy] = useState('best_match')

    // This function gets triggered when user selects the sortBy and changes its colour
    const changeClassName= sortByOption => {
        if (sortByOption === sortBy) {
            return 'active'
        } else {
            return ''
        }
    }

    // This function changes the term when user types in search business section
    const changeTerm = event => {
        const newTerm = event.target.value
        setTerm(newTerm)
    }   

    // This function changes the location when user types in search location section
    const changeLocation = event => {
        const newLocation = event.target.value
        setLocation(newLocation)
    }

    // This function changes the sortBy when user selects the sortBy
    const changeSortBy = sortByOption => {
        if (sortByOption === sortBy) {
            return
        }
        setSortBy(sortByOption);
    }

    // This is the onclick function which starts the search and invokes the function in the App component
    const startSearch = () => {
        searchYelp(term, location, sortBy)
    }

    // This renders the individual sortBy list and binds each list with the changeSortBy function
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption]
            return <li onClick={changeSortBy.bind(this, sortByOptionValue)} key={sortByOptionValue} className={changeClassName(sortByOptionValue)}>{sortByOption}</li>
        })
    }

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input onChange={changeTerm}placeholder="Search Businesses" />
                <input onChange={changeLocation} placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <button className='search-button' onClick={startSearch}>Let's Go</button>
            </div>
        </div>
    )
}

export default SearchBar
