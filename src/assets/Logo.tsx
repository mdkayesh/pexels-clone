import { SiPexels } from "react-icons/si";

type classProps = {
  className: string;
};

const Logo = ({ className }: classProps) => {
  return (
    <div className={className}>
      <SiPexels className={"w-full h-full fill-primary"} />
    </div>
  );
};

export default Logo;
