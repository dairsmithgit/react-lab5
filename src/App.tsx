import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import  Header  from './components/Header';
import { ListStoriesRoute } from './components/ListStoriesRoute';
import { StoryContextProvider } from './context/story-context';
import { CreateStoryRoute } from './components/CreateStoryRoute';
import { ViewStoryRoute } from './components/ViewStoryRoute';

function App() {
  return (
    <Router>
      <StoryContextProvider>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/stories/:num">
              <ViewStoryRoute />
            </Route>
          </Switch>
          <ListStoriesRoute />
        </div>
      </StoryContextProvider>
    </Router>
  );
}

export default App;
