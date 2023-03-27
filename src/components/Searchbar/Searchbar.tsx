import React, { FC } from 'react';

import './Searchbar.css';

interface Props {
    activeFilter: string;
    default: string;
    select2: string;
    select3?: string;
    isSelect3: boolean;
    handleFilter: (event: React.MouseEvent<HTMLButtonElement>) => void;
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: FC<Props> = ({ activeFilter, default: defaultFilter, select2, select3, isSelect3, handleFilter, inputText, setInputText }) => {
    return (
        <div className="search-bar flex row">
        </div>
    );
};

export default SearchBar;