import { useState } from "react";
import "./App.css";
import Page_Feed from "./pages/Page_Feed";
import Page_MusicPlayer from "./pages/Page_MusicPlayer";
import Navbar from "./components/Navbar";

function App() {
    const [isFeed, setIsFeed] = useState(false);

    return (
        <>
            <Navbar setIsFeed={setIsFeed} />
            {isFeed ? <Page_Feed /> : <Page_MusicPlayer />}
        </>
    );
}

export default App;
