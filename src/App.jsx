import { useState } from "react";
import "./App.css";
import Page_Feed from "./pages/Page_Feed";
import Page_MusicPlayer from "./pages/Page_MusicPlayer";

function App() {
    const [isFeed, setIsFeed] = useState(true);

    return (
        <>
            {isFeed ? (
                <Page_Feed goToMusic={() => setIsFeed(false)} />
            ) : (
                <Page_MusicPlayer goToFeeed={() => setIsFeed(true)} />
            )}
        </>
    );
}

export default App;
