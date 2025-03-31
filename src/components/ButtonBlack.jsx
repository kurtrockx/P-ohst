function ButtonBlack({ size = 48 }) {
  return (
    <button
      className={`mx-auto w-${size} flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-zinc-950 py-2 text-center text-white shadow-[inset_2px_2px_2px_white,inset_-2px_-2px_2px_black] duration-200 hover:-translate-y-1 hover:bg-zinc-800 active:scale-95`}
    >
      <p>Get Started</p>
      <img src="/right-arrow.svg" alt="right-arrow" className="w-6" />
    </button>
  );
}

export default ButtonBlack;
