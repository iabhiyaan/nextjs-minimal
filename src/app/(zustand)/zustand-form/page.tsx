'use client';

import React from 'react';
import useStore from '@/store/zustand';
import DarkModeCheckbox from '@/app/(zustand)/(components)/DarkModeCheckbox/DarkModeCheckbox';
import BasicInfo from '@/app/(zustand)/(components)/BasicInfo/BasicInfo';

export default function Form(props) {
  const name = useStore(state => state.name);
  const setName = useStore(state => state.setName);
  const email = useStore(state => state.email);
  const setEmail = useStore(state => state.setEmail);
  const user = useStore(state => state.user);
  const setUser = useStore(state => state.setUser);
  const setDarkModeToUser = useStore(state => state.setDarkModeToUser);

  const setNewProfile = () => {
    setUser({
      profile: {
        name,
        email,
        isDarkModeEnabled: false,
      },
    });
  };

  return (
    <div>
      <BasicInfo
        name={name}
        email={email}
        setEmail={setEmail}
        setName={setName}
      />
      <br />
      <button onClick={setNewProfile}>Set Profile</button>
      <div>
        {user && Object.hasOwn(user?.profile, 'isDarkModeEnabled') && (
          <DarkModeCheckbox user={user} setDarkModeToUser={setDarkModeToUser} />
        )}
      </div>
      {JSON.stringify(user, null, 2)}
    </div>
  );
}
