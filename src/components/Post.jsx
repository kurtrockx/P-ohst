import { useState } from "react";

function Post({ post }) {
  const [liked, setLikes] = useState(false);

  function handleLike() {
    setLikes((liked) => !liked);
  }

  return (
    <div className="cursor-pointer bg-white p-2 shadow-md duration-100 hover:scale-110 hover:-rotate-5 hover:shadow-[0_0_1rem_rgba(0,0,0,.25)]">
      <h1 className="truncate">{post.title}</h1>
      <h4 className="text-sm text-amber-700">{post.author}</h4>
      <img
        src="/homer-eat.png"
        alt={post.title}
        className="bg-zinc-800 hover:animate-[wiggle-2_1s_infinite_alternate-reverse_ease-in-out]"
      />
      <div className="flex items-center justify-end gap-1 py-2">
        <p className="text-sm">{post.likes}</p>
        <button>
          <img
            src={`/${liked ? "heart.svg" : "unheart.svg"}`}
            alt="heart"
            onClick={handleLike}
            className="w-8 cursor-pointer duration-100 active:scale-90"
          />
        </button>
      </div>
    </div>
  );
}

export default Post;
