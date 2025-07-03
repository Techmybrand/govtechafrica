'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Searchbar.module.scss";

interface SearchbarProps {
  onSearch: (query: string) => void;
  alwaysVisible?: boolean;
  placeholder?: string;
  inputRef?: any
  className?: string
}

const Searchbar = ({
  onSearch,
  alwaysVisible = false,
  placeholder = "Search",
  inputRef,
  className,
}: SearchbarProps) => {
  const [query, setQuery] = useState<string>("");
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [isInputVisible, setInputVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 650);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get("query");
    if (queryParam) {
      setQuery(queryParam);
      const newUrl = window.location.pathname;
      window.history.replaceState(null, "", newUrl);
    }
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(query.trim());
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query.trim());
    const newUrl = query ? `?query=${encodeURIComponent(query)}` : "";
    window.history.replaceState(null, "", newUrl);
  };

  const handleIconClick = () => {
    if (isMobileView && !alwaysVisible) {
      setInputVisible(!isInputVisible);
    }
  };

  return (
    <div className={styles.search_container}>
      <form
        className={`${styles.search_form} ${
          isMobileView && isInputVisible ? styles.mobile_expanded : ""
        }`}
        onSubmit={handleSubmit}
      >
        <button type="button" className={styles.search_button}
          onClick={handleIconClick}
        >
          <Image fill alt="search" src="/svgs/search-dark.svg" />
        </button>
        {(!isMobileView || isInputVisible || alwaysVisible) && (
          <input
            type="text"
            className={`${styles.search_input} ${className}`}
            placeholder={placeholder}
            value={query}
            onChange={handleInputChange}
            ref={inputRef}
          />
        )}
      </form>
    </div>
  );
};

export default Searchbar;
