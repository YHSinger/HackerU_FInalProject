import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import {
  SearchContainer,
  InputWrapper,
  SearchInput,
  SearchButton,
  ClearText,
} from "./searchbarstyle";
/* import data from "../Cards/data.json"; */
import Items from "./Items";

const Search = (props) => {
  const [text, setText] = useState("");

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const handleMatch = (item) => setText(item.bizName);

  const handleSearch = (callback) => {
    const search = props.data?.find(
      (card) => card.bizName.toLowerCase() === text?.toLowerCase().trim()
    );
    if (!search) {
      return;
    }
    callback(search);
    setText("");
  };

  const handleClear = ({ target }) => {
    setText("");
  };

  return (
    <SearchContainer>
      <InputWrapper>
        <SearchInput
          type="text"
          placeholder="Search"
          value={text}
          text={text}
          onChange={handleChange}
          // onSelect={handleClear}
        />
        <ClearText>{text && <FiX onClick={handleClear} />}</ClearText>
        <SearchButton text={text} onClick={() => handleSearch(props.openModal)}>
          <BsSearch size="47" />
        </SearchButton>
      </InputWrapper>
      <Items cards={props.data} text={text} handleMatch={handleMatch} />
    </SearchContainer>
  );
};

export default Search;
