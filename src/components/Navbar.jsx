import "../styles/navbar.css";

const Navbar = ({ setIsFeed, isFeed }) => {
    return (
        <nav className="nav-container">
            <button
                onClick={() => setIsFeed(true)}
                type="button"
                className={isFeed && "active"}
            >
                News Feed
            </button>
            <button
                onClick={() => setIsFeed(false)}
                type="button"
                className={!isFeed && "active"}
            >
                Music Player
            </button>
        </nav>
    );
};

export default Navbar;
