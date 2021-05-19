import React, { useContext, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { StoryContext } from '../context/story-context';
import { Story } from '../model/Story';
import { useHistory } from 'react-router';
import { title } from 'process';

export function CreateStoryRoute() {
    const { addStory } = useContext(StoryContext);
    const history = useHistory();

    const [author, setAuthor] = useState("");
  const [words, setWords] = useState([]);

  function handleSubmit(e: FormEvent) {
      e.preventDefault();

      const story: Story = {
          title: title,
          words: words[]
      };

      addStory(story);
      setAuthor("");
      setWords([]);

      history.push('/');
  }

  return (
      <form className="StoryForm" onSubmit={handleSubmit}>
          <div>
              <label>Your Name:{" "}
                  <input type="text" onChange={(e) => setAuthor(e.target.value)}/>
              </label>
          </div>
          <div>
              <p>Words</p>
              <div>
                  <label>person:{" "}
                  <input type="text" onChange={(e) => setWords([...words, word])}/>
                  </label>
              </div>
              <div>
                  <label>place:{" "}
                  <input type="text" onChange={(e) => setWords([...words, word])}/>
                  </label>
              </div>
              <div>
                  <label>object:{" "}
                  <input type="text" onChange={(e) => setWords([...words, word])}/>
                  </label>
              </div>
              <div>
                  <label>object:{" "}
                  <input type="text" onChange={(e) => setWords([...words, word])}/>
                  </label>
              </div>
          </div>
          <button type="submit">Save &amp; View Story</button>
      </form>
  )
}

export default CreateStoryRoute;