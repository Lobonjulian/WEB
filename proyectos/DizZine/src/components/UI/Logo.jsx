const Logo = ({ className = "", size }) => {
  return (
    <img
      src="/DizZine.svg"
      alt="DizZine"
      width={size}
      height={size}
      className={className}
    />
  );
};

export default Logo;
