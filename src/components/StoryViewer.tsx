import { ReactNode, useState } from 'react';
import {Story} from '../model/Story';

interface Props {
    story: Story;
}

function StoryViewer({story}: Props) {
    const { words, title } = story;

    return (
        
        <p>
            <p>
            {words[0]} by {title}{" "}
            </p>
            Last weekend, I saw
            <em>
                <strong>{" "}{words[0]}{" "}</strong>
            </em>
            at the
            <em>
                <strong>{" "}{words[1]}{" "}</strong>
            </em>
            . I thought it was weird that from his pocket I saw a
            <em>
                <strong>{" "}{words[2]}{" "}</strong>
            </em>
            poking out. They said they were looking for a
            <em>
                <strong>{" "}{words[3]}{" "}</strong>
            </em>
            . Can't say I like em' to be honest.
        </p>
    )
}

export default StoryViewer;