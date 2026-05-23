const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1280px] px-6 md:px-10 xl:px-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;