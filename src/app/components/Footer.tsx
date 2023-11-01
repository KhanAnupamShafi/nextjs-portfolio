const Footer = () => {
  return (
    <footer className="relative mx-auto py-2 text-white h-auto bg-transparent flex justify-center items-center">
      <hr className="w-1/5 sm:w-1/4 lg:w-96 border-pink" />
      <p className="mx-3 md:mx-6 text-sm sm:text-2xl font-light m-auto">
        Coding Your Vision into Reality
        <span
          role="img"
          aria-label="emoji"
          className="mx-2 animate-pulse">
          ❤️
        </span>
        &copy;{' '}
        <span className="text-theme-light break-all whitespace-nowrap">
          Khan Anupam Shafi
        </span>
      </p>
      <hr className="w-1/5 sm:w-1/4 lg:w-96 border-pink" />
    </footer>
  );
};

export default Footer;
