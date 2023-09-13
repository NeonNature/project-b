import { useState } from "react";
import "./App.css";

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
