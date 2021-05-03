import React, { useState } from "react";
import css from "./Content.module.css";
import { useParams, Link } from "react-router-dom";
import ContentCard from "./ContentCard";
import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext.js";
import { Dropdown } from "react-bootstrap";

// Render all content that matches the filter by calling ContentCard for each piece of content.
// Clicking on a content card redirects to FullPage for that content.
function Content() {
  let { filter } = useParams();
  // Default State
  let { content, likes } = useContext(StoreContext);
  const [value, setValue] = useState("Most Liked");
  const [filtered, setFiltered] = useState(
    filter === "mostPopular"
      ? content
      : content.filter((cont) => cont.type === filter)
  );
  const [displayed, setDisplayed] = useState(filtered);
  // Default is all content shown
  let fName = "default";

  if (filter === "article") {
    fName = "Top Articles";
  } else if (filter === "video") {
    fName = "Top Videos";
  } else if (filter === "organization") {
    fName = "Top Organizations";
  } else if (filter === "book") {
    fName = "Top Books";
  } else if (filter === "all") {
    fName = "All Posts";
  } else if (filter === "mostPopular") {
    fName = "Most Popular";
  }

  const handleSelect = (e) => {
    setValue(e);
    resort();
  };

  function resort() {
    if (value === "Most Recent") {
      setDisplayed(
        filtered.sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
      );
    } else if (value === "Least Recent") {
      setDisplayed(
        filtered
          .sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
          .reverse()
      );
    } else if (value === "Most Liked") {
      setDisplayed(filtered.sort((a, b) => b.likes - a.likes));
    } else if (value === "Least Liked") {
      setDisplayed(filtered.sort((a, b) => b.likes - a.likes).reverse());
    }
  }

  let search = function (e) {
    console.log(e.target.value);
    let keyword = e.target.value;

    // searchedAlbums will be a temp holder of the search results
    let results = [];

    // Goes through each album within the album data
    filtered.map((item) => {
      if (
        // Checks if keyword is found with the album name
        item["type"].toLowerCase().includes(keyword.toLowerCase())
      )
        results.push(item);
      else if (
        // Checks if keyword is found with the artist name
        item["title"].toLowerCase().includes(keyword.toLowerCase())
      )
        results.push(item);
      else if (
        // Checks if keyword is found within the genre
        item["desc"].toLowerCase().includes(keyword.toLowerCase())
      )
        results.push(item);
    });
    console.log(results);
    setDisplayed(results);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}> {fName}</h1>
      <div className={css.searchInput}>
        <input
          type="search"
          value={filtered.value}
          onChange={search}
          placeholder="search for resources"
        ></input>
      </div>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle
          className={css.drop}
          variant="success"
          id="dropdown-basic"
        >
          {value}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item className={css.item} eventKey="Most Liked">
            Most Liked
          </Dropdown.Item>
          <Dropdown.Item className={css.item} eventKey="Least Liked">
            Least Liked
          </Dropdown.Item>
          <Dropdown.Item className={css.item} eventKey="Most Recent">
            Most Recent
          </Dropdown.Item>
          <Dropdown.Item className={css.item} eventKey="Least Recent">
            Least Recent
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {displayed.map((c) => (
        <Link className={css.card} key={c.id} to={"/FullPage/".concat(c.id)}>
          <ContentCard content={c} />
        </Link>
      ))}
    </div>
  );
}

export default Content;
