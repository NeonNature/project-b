import "../styles/post.css";

const Post = ({ title, body }) => {
    return (
        <div className="post-container">
            <div className="post-title">{title}</div>
            <div className="post-body">{body}</div>
        </div>
    );
};

export default Post;
