import { useState } from "react";
import css from "./TagManager.module.css";

const TAGS = ["Apple", "Google", "Samsung"];

function TagManager() {
  const [tags, setTags] = useState<string[]>(TAGS);
  const [search, setSearch] = useState<string>("");

  const handleTagManagerRemove = (tagName: string) => {
    console.log(tagName);
    setTags((prevTags) => prevTags.filter((tag) => tag != tagName));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input
        placeholder="Seatch"
        value={search}
        onChange={handleSearchChange}
      />
      <div className={css.container}>
        {tags.map((tag) => (
          <span key={tag} className={css.tag}>
            {tag}{" "}
            <button
              className={css.button}
              onClick={() => handleTagManagerRemove(tag)}
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagManager;
