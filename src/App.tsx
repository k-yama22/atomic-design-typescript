import {BrowserRouter} from "react-router-dom";
import React from 'react';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { HeaderOnly } from './components/templates/HeaderOnly';
import { DefaultLayout } from "./components/templates/DefaultLayout";

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
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
