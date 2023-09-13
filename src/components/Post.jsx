import "../styles/post.css";

const Post = ({ title, body, userId }) => {
    return (
        <div className="post-container">
            <p className="post-title">{title}</p>
            <p className="post-body">{body}</p>
            <p className="post-user">User#{userId}</p>
        </div>
    );
};

export default Post;
