import "../styles/post.css";

const Post = ({ title, body }) => {
    return (
        <div className="post-container">
            <p className="post-title">{title}</p>
            <p className="post-body">{body}</p>
        </div>
    );
};

export default Post;
