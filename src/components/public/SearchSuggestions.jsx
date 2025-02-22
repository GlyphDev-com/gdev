import style from "./SearchSuggestions.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faBan, faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {useState, useEffect, useRef} from "react";
import miniLogo from "../../assets/miniLogo.png";


const SearchSuggestions = ({searchTerm, onClose, containerStyle, inputWrapperStyle={}}) => {
  const searchInput = useRef(null);
  const [SearchSuggestions, setSearchSuggestions] = useState(["no match"]);


  return (
    <div
      className={style.searchSuggestionsWrapper}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div className={style.container} style={containerStyle} onClick={(e) => e.stopPropagation()}>
        <div className={`${style.header}`}>
          <div className={`${style.searchBarOuterLayer}`}>
            <div className={`${style.searchInputWrapper}`} style={inputWrapperStyle}>
              <div
                className={`${style.closeBtn}  text-light`}
                onClick={() => {
                  onClose();
                }}
              >
                <FontAwesomeIcon icon={faAngleLeft} className="fs-3" />
              </div>
              <input
                ref={searchInput}
                className={`${style.searchInputField}`}
                placeholder={searchTerm}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                }}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className={`${style.searchIcon} text-light`}
              />
            </div>
          </div>
        </div>
        <div className={`${style.suggestionsHolder}`}>
          {SearchSuggestions.length === 0 ? (
            <span className={`text-secondary mt-5`}>
              Please search something
            </span>
          ) : SearchSuggestions[0].toLowerCase() === "no match" ? (
            <>
              <FontAwesomeIcon
                icon={faBan}
                className={`text-secondary mt-5 display-5`}
              />{" "}
              <span className={`text-secondary mt-3 `}>no match found</span>
            </>
          ) : (
            "the search query has gotten some data render it"
          )}
        </div>
        <hr />
        <div className={`${style.searchFooter}`}>
          <div className={`${style.advertSection}`}>
            <span className={`${style.poweredBy} text-secondary`}>
              Powered by
            </span>
            <span>
              <a href="https://gdev.com">
                <img src={miniLogo} className={`${style.miniLogo}`}></img>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestions;