interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
}

export function Input({ value, onChange, onFocus }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      placeholder="Adicione um novo item"
      className="flex-1 w-full border-2 h-11 border-border-primary hover:border-hover rounded-lg px-4.5 py-2.5 outline-none hover:border-border-hover text-content-tertiary bg-always-white focus:border-brand focus:text-content-primary"
      onChange={onChange}
      onFocus={onFocus}
    />
  );
}
