export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/brain_animation.gif" alt="Loading..." className="w-50 h-50" />
      <div className="py-[20px] ml-[30px]">
        <p className="text-3xl text-center font-semibold">Please wait...</p>
        <p className="text-xl text-gray-400">This may take 6 to 15 seconds.</p>
      </div>
    </div>
  );
};

export default Loader;
