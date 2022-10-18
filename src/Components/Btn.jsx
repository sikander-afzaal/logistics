const Btn = ({ text }) => {
  return (
    <button className="uppercase font-bold text-white bg-orange h-[50px] md:h-[60px] px-3 md:px-6 text-lg md:text-xl">
      {text}
    </button>
  );
};

export default Btn;
