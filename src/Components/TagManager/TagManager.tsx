import { useState } from "react";
import css from "./TagManager.module.css";

const TAGS = ["Apple", "Google", "Samsung"];

function TagManager() {
  const [tags, setTags] = useState<string[]>(TAGS);
  return (
    <div className={css.container}>
      <div>
        {tags.map((tag) => (
          <span key={tag} className={css.tag}>
            {tag} <button className={css.button}>&times;</button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagManager;
