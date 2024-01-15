import React from 'react';

export default function DarkModeCheckbox({ user, setDarkModeToUser }) {
    return (
        <input type="checkbox" checked={user?.profile?.isDarkModeEnabled}
               onChange={e => setDarkModeToUser(e.target.checked)}/>
    );
}
