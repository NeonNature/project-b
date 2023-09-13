import "../styles/navbar.css";

const Navbar = ({ setIsFeed }) => {
    return (
        <nav className="nav-container">
            <button onClick={() => setIsFeed(true)}>News Feed</button>
            <button onClick={() => setIsFeed(false)}>Music Player</button>
        </nav>
    );
};

export default Navbar;
