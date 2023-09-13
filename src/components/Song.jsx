import "../styles/song.css";

const Song = ({ src, title }) => {
    return (
        <div className="song-container">
            <p className="song-title">{title}</p>
            <audio controls>
                <source src={src} type="audio/ogg" />
            </audio>
        </div>
    );
};

export default Song;
