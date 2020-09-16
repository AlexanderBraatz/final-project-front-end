import React from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

const SearchBar = ({ handleSubmit, find}) => {

  const [value, setValue ] = useState( "" );
  
  const handleName1 = (e) => ( setValue(e.currentTarget.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    find(value);
  };

  return(
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <Button 
        variant="outline-secondary"
        onClick={ handleSubmit }
        >Search</Button>
    </InputGroup.Prepend>
    <FormControl 
      as= "input"
      value={ value }
      onChange={ handleChange }
      type="search" />
  </InputGroup>
    )
}
export default SearchBar;