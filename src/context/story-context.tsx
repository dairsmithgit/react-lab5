import { createContext, ReactNode, useState } from 'react';
import { Story } from '../model/Story';

interface StoryContextValue {
    stories: Story[];
    addStory: (story: Story) => number;
}

const defaultValue: StoryContextValue = {
    stories: [],
    addStory: () => 0,
};

export const StoryContext = createContext(defaultValue);

export function StoryContextProvider({ children }: { children: ReactNode }) {
    const [ stories, setStories ] = useState<Story[]>([]);

    function addStory(story: Story): number {
        setStories([...stories, story]);
        return stories.length;
    }
    return (
        <StoryContext.Provider value={{stories, addStory}}>
            {children}
        </StoryContext.Provider>
    );
}