import React from 'react'

const SearchField = (props) => {
    return (
        <input
          type="text"
          onChange = {(event) => props.searchProduct(event)}
        />
    )
}
export default SearchField