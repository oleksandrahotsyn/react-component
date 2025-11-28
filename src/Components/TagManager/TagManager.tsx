import { useState } from "react";

const TAGS = ["Apple", "Google", "Samsung"];

function TagManager() {
  const [tags, setTags] = useState<string[]>(TAGS);
  return (
    <div>
      <div>
        {tags.map((tag) => (
          <span key={tag}>
            {tag} <button>&times;</button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagManager;
