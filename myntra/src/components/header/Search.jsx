

// import { InputBase, Box, styled, Typography } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import { useState, useEffect, useRef } from 'react';

// const SearchContainer = styled(Box)`
//   background: #f0f0f0;
//   width: 38%;
//   border-radius: 2px;
//   margin-left: 120px;
//   display: flex;
//   position: relative; /* Needed for absolute positioning of suggestions */
// `;

// const Input = styled(InputBase)`
//   padding-left: 20px;
//   width: 100%;
//   font-size: unset;
// `;

// const IconWrapper = styled(Box)`
//   color: black;
//   padding: 5px;
//   display: flex;
// `;

// const SuggestionList = styled(Box)`
//   position: absolute;
//   top: 100%;
//   color: #999;
//   left: 0;
//   width: calc(100% - 40px);
//   background-color: #fff;
//   border-radius: 2px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
//   padding: 5px;
//   max-height: 200px;
//   z-index: 10;
// `;

// const SuggestionItem = styled(Typography)`
//   cursor: pointer;
//   padding: 5px;
//   &:hover {
//     background-color: #eee;
//   }
// `;

// const Search = () => {
//   const [searchText, setSearchText] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const searchRef = useRef(null); // Ref to the search container

//   // Simulated kurti data (replace with your actual data source)
//   const kurtiData = [
//     { id: 1, name: 'Blue Anarkali Kurti' },
//     { id: 2, name: 'Printed A-Line Kurti' },
//     { id: 3, name: 'Embroidered Straight Kurti' },
//     { id: 4, name: 'Floral Maxi Kurti' },
//     { id: 5, name: 'Georgette Kaftan Kurti' },
//     { id: 6, name: 'Anarkali with Zari Work' },
//     { id: 7, name: 'Cotton Straight Kurti' },
//     { id: 8, name: 'Pencil Cut Kurti' },
//     { id: 9, name: 'Multicolor Layered Kurti' },
//     { id: 10, name: 'Short Printed Kurti' },
//     { id: 11, name: 'Elegant Chikan Kurti' },
//     { id: 12, name: 'Long Party Wear Kurti' },
//     { id: 13, name: 'Silk Embroidered Kurti' },
//     { id: 14, name: 'Block Printed Kurti' },
//     { id: 15, name: 'Straight Fit Kurtis with Pockets' },
//   ];

//   const handleSearchChange = (event) => {
//     const newText = event.target.value.toLowerCase();
//     setSearchText(newText);

//     // Generate suggestions based on search text
//     if (newText) {
//       const filteredSuggestions = kurtiData
//         .filter(kurti => kurti.name.toLowerCase().includes(newText))
//         .map(kurti => kurti.name);
//       setSuggestions(filteredSuggestions);
//     } else {
//       setSuggestions([]);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchText(suggestion);
//     setSuggestions([]); // Hide suggestions after selection
//   };

//   const handleClickOutside = (event) => {
//     if (searchRef.current && !searchRef.current.contains(event.target)) {
//       setSuggestions([]); // Close suggestions on outside click
//     }
//   };

//   useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.key === 'Escape') {
//         setSuggestions([]); // Hide suggestions on Escape key press
//       }
//     };

//     document.addEventListener('keydown', handleEscape);
//     document.addEventListener('mousedown', handleClickOutside); // Add click outside listener

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.removeEventListener('mousedown', handleClickOutside); // Clean up listener
//     };
//   }, []);

//   return (
//     <SearchContainer ref={searchRef}>
//       <Input
//         placeholder="Search for products, brands and more"
//         value={searchText}
//         onChange={handleSearchChange}
//       />
//       <IconWrapper>
//         <SearchIcon />
//       </IconWrapper>
//       {suggestions.length > 0 && (
//         <SuggestionList>
//           {suggestions.map((suggestion) => (
//             <SuggestionItem key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
//               {suggestion}
//             </SuggestionItem>
//           ))}
//         </SuggestionList>
//       )}
//     </SearchContainer>
//   );
// };

// export default Search;

import { InputBase, Box, styled, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect, useRef } from 'react';

const SearchContainer = styled(Box)`
  background: #f0f0f0;
  width: 38%;
  border-radius: 2px;
  margin-left: 120px;
  display: flex;
  position: relative; /* Needed for absolute positioning of suggestions */
`;

const Input = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const IconWrapper = styled(Box)`
  color: black;
  padding: 5px;
  display: flex;
`;

const SuggestionList = styled(Box)`
  position: absolute;
  top: 100%;
  color: #999;
  left: 0;
  overflow-y: auto;
  width: calc(100% - 40px);
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 5px;
  max-height: 200px;
  z-index: 10;
`;

const SuggestionItem = styled(Typography)`
  cursor: pointer;
  padding: 5px;
  &:hover {
    background-color: #eee;
  }
`;

const Placeholder = styled(Typography)`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.2s ease all;
  color: #999;
  pointer-events: none;
  font-size: 16px;
`;

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [placeholderText, setPlaceholderText] = useState('Search for products, brands and more');
  const searchRef = useRef(null);

  // Simulated kurti data
  const kurtiData = [
    { id: 1, name: 'Blue Anarkali Kurti' },
    { id: 2, name: 'Printed A-Line Kurti' },
    { id: 3, name: 'Embroidered Straight Kurti' },
    { id: 4, name: 'Floral Maxi Kurti' },
    { id: 5, name: 'Georgette Kaftan Kurti' },
    { id: 6, name: 'Anarkali with Zari Work' },
    { id: 7, name: 'Cotton Straight Kurti' },
    { id: 8, name: 'Pencil Cut Kurti' },
    { id: 9, name: 'Multicolor Layered Kurti' },
    { id: 10, name: 'Short Printed Kurti' },
    { id: 11, name: 'Elegant Chikan Kurti' },
    { id: 12, name: 'Long Party Wear Kurti' },
    { id: 13, name: 'Silk Embroidered Kurti' },
    { id: 14, name: 'Block Printed Kurti' },
    { id: 15, name: 'Straight Fit Kurtis with Pockets' },
  ];

  const handleSearchChange = (event) => {
    const newText = event.target.value.toLowerCase();
    setSearchText(newText);

    // Generate suggestions based on search text
    if (newText) {
      const filteredSuggestions = kurtiData
        .filter(kurti => kurti.name.toLowerCase().includes(newText))
        .map(kurti => kurti.name);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    setSuggestions([]);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSuggestions([]);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Typing effect for placeholder
  useEffect(() => {
    const typingEffect = (text, index = 0) => {
      if (index < text.length) {
        setPlaceholderText(text.slice(0, index + 1));
        setTimeout(() => typingEffect(text, index + 1), 100);
      } else {
        setTimeout(() => typingEffect(text, 0), 2000); // Restart typing after a pause
      }
    };

    typingEffect('Search for products, brands and more');
  }, []);

  return (
    <SearchContainer ref={searchRef}>
      <Input
        placeholder={placeholderText}
        value={searchText}
        onChange={handleSearchChange}
      />
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      {suggestions.length > 0 && (
        <SuggestionList>
          {suggestions.map((suggestion) => (
            <SuggestionItem key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </SuggestionItem>
          ))}
        </SuggestionList>
      )}
    </SearchContainer>
  );
};

export default Search;


