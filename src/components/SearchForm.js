import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";

const SearchForm = (props) => {
    const [term, setTerm] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if(term.trim() !== '') {
            setError('')
            props.handleSearch(term)
        }
        else {
            setError('Enter an album or artist to search!')
        }
    }

    const searchStyle = {
        padding: 10,
        border: 'none',
        width: 300, 
        borderBottom: '1px solid',
        fontSize: 16
    }
    const buttonStyle = {
        border: 'none',
        fontSize: 20, 
        verticalAlign: 'sub'
    }

    return(
        <div>
            <form action='' onSubmit={handleSearch}>
                {error && <p className="errorMsg">{error}</p>}
                <input 
                    style={searchStyle}
                    type='text'
                    name="searchTerm"
                    placeholder="Search for album or artist..."
                    value={term}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <button type="submit" style={buttonStyle}><BsSearch/></button>
            </form>
        </div>
    )
}

export default SearchForm;