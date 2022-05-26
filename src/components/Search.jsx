import React from 'react';
import { useState } from 'react';

function Search(props) {
  props.searchItem(Event.target.value);
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <form>
        <label htmlForm="search">Buscar:</label>
        <input type="text" name="search" onChange={handleSearch} value />
      </form>
    </div>
  );
}

export default Search;
