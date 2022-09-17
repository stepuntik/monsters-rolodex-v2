import { ChangeEvent } from 'react';

import './search-box.styles.css';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;

// EXAMPLES OF TYPESCRIPT

/*
const func: (a: string, b: number, c: boolean) => void = (a,b,c) => { return true}

interface ISearchBoxProps extends IChangeHandler {
  className: string,
  placeholder?: string,
}

interface IChangeHandler {
  onChangeHandler: (a: string) => void,
}



type ItalianAddress = {
  street: string,
  region: string,
}

type CanadianAddress = {
  street: string,
  province: string,
}

type USAddress = {
  street: string,
  state: string,
}

type Address = CanadianAddress | USAddress | ItalianAddress;

const Address: Address = {
  street: 'adas',
  region: 'adadadas'
}
*/
