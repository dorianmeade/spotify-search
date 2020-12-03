import React from 'react'
import { connect } from 'react-redux';

import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import {getResult} from '../actions/result'

const Dashboard = ({albums, artists}) => {
    const result = { albums, artists };

    const handleSearch = (term) => {
        getResult(term)
        console.log(term)
    }
    
    return (
        <div>
            <h1>Dashboard</h1>

            <SearchForm
                handleSearch={handleSearch}
                />
            <SearchResults
                result={result}
                
            />
        </div>
    )
};

export default connect()(Dashboard)


