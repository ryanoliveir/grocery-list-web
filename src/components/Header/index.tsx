import Logo from "../../assets/logo.png";

export function Header() {
  return (
    <div className="flex items-center justify-center pt-6 pb-15">
      <img src={Logo} alt="logo" />
    </div>
  );
}
