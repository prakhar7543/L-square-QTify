import React, { useState } from 'react';
import { styled } from '@mui/system';
// import { ReactComponent as SearchIcon } from "../assets/Search-icon.svg";
// import useAutocomplete from "@base-ui-components/react/useAutocomplete";
// import  truncate  from "../helper/helper";
// import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import './search.css';
import SearchIcon from '@mui/icons-material/Search';






const Listbox = styled('ul')`
  width: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  border-radius: 8px 8px 16px 8px;
  border: 1px solid var(--color-primary);
  top: 68px;
  max-height: 100px;
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
  }
`;

function Search({ searchData, placeholder }) {
  const [value, setValue] = useState('');
  const [groupedOptions, setGroupedOptions] = useState(searchData || []);
  let [isPressed, setIsPressed] = useState(false);

  let searchButton=()=> {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false)
    }, 200)
  }

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);

    // Filter options based on input value
    const filteredOptions = searchData.filter(option =>
      option.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setGroupedOptions(filteredOptions);
  };

  return (
    <div>
      <div className='inputDiv'>
      <input
      className='searchInp'
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
      <button className="searchIco"
      onClick={searchButton}
      >
      <SearchIcon />
      </button>
      </div>
     
      <Listbox>
        {groupedOptions.map((option, index) => (
          <li key={index}>
            <div>
              <p>{option.title}</p>
            </div>
          </li>
        ))}
      </Listbox>
    </div>
  );
}

export default Search;


// const Listbox = styled("ul")(() => ({
//   width: "100%",
//   margin: 0,
//   padding: 0,
//   position: "absolute",
//   borderRadius: "0px 0px 10px 10px",
//   border: "1px solid var(--color-primary)",
//   top: 60,
//   height: "max-content",
//   maxHeight: "500px",
//   zIndex: 10,
//   overflowY: "scroll",
//   left: 0,
//   bottom: 0,
//   right: 0,
//   listStyle: "none",
//   backgroundColor: "var(--color-black)",
//   overflow: "auto",
//   "& li.Mui-focused": {
//     backgroundColor: "#4a8df6",
//     color: "white",
//     cursor: "pointer",
//   },
//   "& li:active": {
//     backgroundColor: "#2977f5",
//     color: "white",
//   },
// }));



// function Search({ searchData, placeholder }) {
//   const {
//     getRootProps,
//     // getInputLabelProps,
//     value,
//     getInputProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//   } = useAutocomplete({
//     id: "use-autocomplete-demo",
//     options: searchData || [],
//     getOptionLabel: (option) => option.title,
//   });

//   const navigate = useNavigate();
//   const onSubmit = (e, value) => {
//     e.preventDefault();
//     console.log(value);
//     navigate(`/album/${value.slug}`);
//     //Process form data, call API, set state etc.
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       <form
//         className={styles.wrapper}
//         onSubmit={(e) => {
//           onSubmit(e, value);
//         }}
//       >
//         <div {...getRootProps()}>
//           <input
//             name="album"
//             className={styles.search}
//             placeholder={placeholder}
//             required
//             {...getInputProps()}
//           />
//         </div>
//         <div>
//           <button className={styles.searchButton} type="submit">
//             <SearchIcon />
//           </button>
//         </div>
//       </form>
//       {groupedOptions.length > 0 ? (
//         <Listbox {...getListboxProps()}>
//           {groupedOptions.map((option, index) => {
//             // console.log(option);
//             const artists = option.songs.reduce((accumulator, currentValue) => {
//               accumulator.push(...currentValue.artists);
//               return accumulator;
//             }, []);

//             return (
//               <li
//                 className={styles.listElement}
//                 {...getOptionProps({ option, index })}
//               >
//                 <div>
//                   <p className={styles.albumTitle}>{option.title}</p>

//                   <p className={styles.albumArtists}>
//                     {truncate(artists.join(", "), 40)}
//                   </p>
//                 </div>
//               </li>
//             );
//           })}
//         </Listbox>
//       ) : null}
//     </div>
//   );
// }

// export default Search;
