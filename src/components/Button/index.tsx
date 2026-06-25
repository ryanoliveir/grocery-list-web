interface ButtonProps {
  onClick: () => void;
}

export function Button({ onClick }: ButtonProps) {
  return (
    <button
      className="bg-brand h-11 text-label w-full sm:w-auto text-always-white py-2.5 px-6 rounded-lg  hover:bg-brand-hover"
      onClick={onClick}
    >
      Adicionar item
    </button>
  );
}
