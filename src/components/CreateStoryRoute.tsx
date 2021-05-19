import React, { useContext, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { StoryContext } from '../context/story-context';
import { Story } from '../model/Story';
import { useHistory } from 'react-router';
import { title } from 'process';

export function CreateStoryRoute() {
    const { addStory } = useContext(StoryContext);
    const history = useHistory();

  const [words, setWords] = useState([]);

  const [title, setTitle] = useState("");
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");
  const [word4, setWord4] = useState("");

  function handleSubmit(e: FormEvent) {
      e.preventDefault();

      const story: Story = {
          title: title,
          words: [word1, word2, word3, word4]
      };

      addStory(story);
      setWords([]);

      history.push(`/stories/:{num}`);
  }

  return (
      <form className="StoryForm" onSubmit={handleSubmit}>
          <div>
              <label>Your Name:{" "}
                  <input type="text" onChange={(e) => setTitle(e.target.value)}/>
              </label>
          </div>
          <div>
              <p>Words</p>
              <div>
                  <label>person:{" "}
                  <input type="text" onChange={(e) => setWord1(e.target.value)}/>
                  </label>
              </div>
              <div>
                  <label>place:{" "}
                  <input type="text" onChange={(e) => setWord2(e.target.value)}/>
                  </label>
              </div>
              <div>
                  <label>object:{" "}
                  <input type="text" onChange={(e) => setWord3(e.target.value)}/>
                  </label>
              </div>
              <div>
                  <label>object:{" "}
                  <input type="text" onChange={(e) => setWord4(e.target.value)}/>
                  </label>
              </div>
          </div>
          <button type="submit">Save &amp; View Story</button>
      </form>
  )
}

export default CreateStoryRoute;