import React from 'react';
//Codigo que gera a barra de pesquisa no site
const SearchBox = (props) => {
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Digite o Nome do Filme'
			></input>
		</div>
	);
};

export default SearchBox;
