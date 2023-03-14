import { BsSearch } from "react-icons/bs";
import {
  Item,
  Dropdown,
  ItemsContainer,
  DropdownContent,
} from "./searchbarstyle";

const dropdownMenuOperation = (text, item) => {
  const searchValue = text.trimLeft();
  const lowerCase = item?.name?.toLowerCase();
  const includes = searchValue && lowerCase.includes(searchValue);
  const startWith = searchValue && lowerCase.startsWith(searchValue);
  return includes || startWith;
};

const items = ({ cards, text, handleMatch }) => (
  <Dropdown>
    {cards
      .filter((item) => {
        return dropdownMenuOperation(text, item);
      })
      .slice(0, 7)
      .map((item, index) => (
        <DropdownContent key={index} onClick={() => handleMatch(item)}>
          <ItemsContainer>
            <Item>{item?.name}</Item>
          </ItemsContainer>
        </DropdownContent>
      ))}
  </Dropdown>
);

export default items;
