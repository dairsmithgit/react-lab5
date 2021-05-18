import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="Header">
            <p>This is the header</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/stories">See Saved Stories</Link>
                    </li>
                    <li>
                        <Link to="/create-story">Create a New Story</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
