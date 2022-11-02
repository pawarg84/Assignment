import React from 'react'
import { useState } from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import BusinessList from '../BusinessList/BusinessList'
import { Yelp } from '../../util/Yelp'


const App = () => {

  const [businesses, setBusinesses] = useState([])
  
  // This function gets called when nuser starts a business search and it send an api request
  const searchYelp = (term='restaurants', location='Chicago', sortBy) => {
    Yelp.search(term, location, sortBy).then(businesses => {
      setBusinesses(businesses)      
    })

  }

  return (
    <div className="App">
      <h1>Restaurants</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses}/> 
    </div>
  )
}

export default App
