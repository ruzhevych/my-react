import './App.css'
import Card from "./components/common/card";
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
// import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import {APP_ENV} from "./env";
import HomePage from './pages/home/index.tsx';

function App() {

    console.log("Rnder component :)", APP_ENV.REMOTE_BASE_URL)

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Card/>} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
