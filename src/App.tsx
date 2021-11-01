import React from 'react';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';

const user = {
    name: "yama",
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12345@eee.ee.ee",
    phone: "090-0000-0000",
    company: {
      name: "テスト会社"
    },
    website: "https://google.com"
}

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}

export default App;
