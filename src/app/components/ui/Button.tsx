interface Props {
  text: string;
  type: 'solid' | 'outlined';
  onClickHandler: () => void;
}
const Button = ({ text, type, onClickHandler }: Props) => {
  return (
    <>
      <button
        type="button"
        onClick={onClickHandler}
        className={`font-regular
                    px-2 sm:px-3 xl:px-4 py-2 w-full sm:w-52 md:w-56 2xl:w-60 text-2xl transition-all
                    rounded overflow-hidden border-2 border-transparent
                    hover:shadow-light-xl
                    ${
                      type === 'solid'
                        ? 'bg-theme-light dark:bg-pink text-blue hover:outline-none hover:bg-transparent hover:text-pink hover:border-pink focus:outline-none'
                        : 'text-pink bg-transparent border-pink hover:outline-none hover:bg-pink hover:text-blue hover:border-pink focus:outline-none'
                    }
                   `}>
        {text}
      </button>
    </>
  );
};

export default Button;
