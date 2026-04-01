interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, type = "button", onClick, className = "" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-coral hover:bg-coral-dark text-white font-bold py-3 px-8 rounded-full transition-colors cursor-pointer text-sm md:text-base ${className}`}
    >
      {children}
    </button>
  );
}
