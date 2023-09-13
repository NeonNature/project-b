import { useEffect, useMemo, useState } from "react";
import Post from "../components/Post";
import "../styles/page_feed.css";

const Page_Feed = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState(0);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((err) =>
                console.error(
                    `Something went wrong while fetching posts: ${err}`
                )
            );
    }, []);

    const postList = useMemo(
        () =>
            posts.map((i, idx) => (
                <Post key={idx} title={i.title} body={i.body} />
            )),
        [posts]
    );

    return (
        <div id="feed-container">
            <div id="feed-action-bar">
                <div className="feed-action">
                    <span>Sort: </span>
                    <button onClick={() => {}}> Ascending </button>
                </div>
                <div className="feed-action">
                    <span>Filter: </span>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value={0}>None</option>
                        <option value={1}>UserID 1</option>
                    </select>
                </div>
            </div>
            <div id="feed-list">{postList}</div>
        </div>
    );
};

export default Page_Feed;
