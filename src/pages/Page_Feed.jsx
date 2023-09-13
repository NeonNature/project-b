import { useEffect, useMemo, useState } from "react";
import Post from "../components/Post";
import "../styles/page_feed.css";

const Page_Feed = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState(-1);
    const [sort, setSort] = useState("");

    console.log(filter);

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

    const users = useMemo(
        () => [...new Set(posts.map((i) => i.userId))],
        [posts]
    );

    const computedData = useMemo(() => {
        var rawData = [...posts];
        switch (sort) {
            case "ASCENDING":
                rawData.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "DESCENDING":
                rawData.sort((a, b) => b.title.localeCompare(a.title));
                break;
        }

        if (filter >= 0) {
            return rawData.filter((i) => i.userId == filter);
        }

        return rawData;
    }, [posts, sort, filter]);

    const postList = useMemo(
        () =>
            computedData.map((i, idx) => (
                <Post
                    key={idx}
                    title={i.title}
                    body={i.body}
                    userId={i.userId}
                />
            )),
        [computedData]
    );

    const optionList = useMemo(
        () =>
            users.map((i, idx) => (
                <option value={i} key={idx}>
                    {i}
                </option>
            )),
        [users]
    );

    return (
        <div id="feed-container">
            <div id="feed-action-bar">
                <div className="feed-action">
                    <span>Sort: </span>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value={""}>None</option>
                        <option value={"ASCENDING"}>Ascending</option>
                        <option value={"DESCENDING"}>Descending</option>
                    </select>
                </div>
                <div className="feed-action">
                    <span>Filter by UserID: </span>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value={-1}>None</option>
                        {optionList}
                    </select>
                </div>
            </div>
            <div id="feed-list">{postList}</div>
        </div>
    );
};

export default Page_Feed;
