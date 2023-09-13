import synthOrganAudio from "../assets/synth-organ.ogg";
import newWaveKit from "../assets/new-wave-kit.ogg";
import Song from "../components/Song";

const Page_MusicPlayer = () => {
    return (
        <div id="music-container">
            <Song src={newWaveKit} title="Sample Music" />
            <Song src={synthOrganAudio} title="THE FINAL COUNTDOWN" />
        </div>
    );
};

export default Page_MusicPlayer;
