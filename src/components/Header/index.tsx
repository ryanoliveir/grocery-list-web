import Logo from "../../assets/logo.png";
import { SwitchButton } from "../SwitchButton";

export function Header() {
  return (
    <div className="relative flex items-center justify-center pt-6 pb-15">
      <img src={Logo} alt="logo" />
      <div className="absolute right-0">
        <SwitchButton />
      </div>
    </div>
  );
}
