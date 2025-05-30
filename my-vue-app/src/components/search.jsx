import React, { useState } from "react";
import { styled } from "@mui/system";
import { Tooltip } from "@mui/material";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";

const Listbox = styled("ul")`
  width: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  border-radius: 8px 8px 16px 8px;
  border: 1px solid var(--color-primary);
  top: 68px;
  max-height: auto;
  z-index: 10;
  overflow-y: scroll;
  left: 0;
  bottom: 0;
  right: 0;
  list-style: none;
  background-color: var(--color-black);
  overflow: auto;
  & li {
    background-color: var(--color-black);
    color: white;
    cursor: pointer;
    border: 1px solid white;
  }
`;

const ListboxContainer = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 200px;
  justify-content: center;
  align-items: normal;
  color: black;
  background-color: #ffffff30;
`;

function Search({ searchData = [], placeholder }) {
  const [value, setValue] = useState("");
  const [groupedOptions, setGroupedOptions] = useState(searchData);
  let [isPressed, setIsPressed] = useState(false);

  let searchButton = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 200);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);

    // Filter options based on input value
    const filteredOptions = searchData.filter((option) =>
      option.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setGroupedOptions(filteredOptions);

    console.log("Filtered Options:", filteredOptions);
  };

  return (
    <div className="SearchBar">
      <input
        className="searchInp"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
      <button className="searchIco" onClick={searchButton}>
        <SearchIcon />
      </button>

      {value && groupedOptions.length > 0 && (
        <ListboxContainer>
          <Listbox>
            {groupedOptions.map((option, index) => (
              <li key={index}>
                <div>
                  <p>{option.title}</p>
                </div>
              </li>
            ))}
          </Listbox>
        </ListboxContainer>
      )}
    </div>
  );
}

export default Search;
