function NewPost() {
  return (
    <form className="mx-auto flex w-max flex-col p-4">
      <label>Image Attachment</label>
      <input
        type="file"
        className="cursor-pointer rounded-md border bg-white px-2 py-1"
      />
      <label>Post Title</label>
      <input
        type="text"
        className="rounded-md border bg-white px-2 outline-0"
      />
      <label>Description</label>
      <textarea className="min-h-48 resize-none rounded-md border bg-white p-px outline-0"></textarea>
    </form>
  );
}

export default NewPost;
