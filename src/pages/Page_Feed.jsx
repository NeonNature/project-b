import { useEffect, useMemo, useState } from "react";
import Post from "../components/Post";
import "../styles/page_feed.css";

const Page_Feed = () => {
    const [posts, setPosts] = useState([]);

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

    return <div id="feed-container">{postList}</div>;
};

export default Page_Feed;
