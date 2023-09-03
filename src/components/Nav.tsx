import { Location, NavLink, useLocation } from "react-router-dom";

const links: { title: string; url: string }[] = [
  { title: "Home", url: "/" },
  { title: "Videos", url: "/videos" },
];

const Nav = () => {
  const location: Location = useLocation();

  return (
    <div className="nav mt-10">
      <nav>
        <ul className="flex items-center justify-center">
          {links.map((link) => (
            <li
              key={link.title}
              className="[&.active]:bg-primary [&.active]:text-white"
            >
              <NavLink
                to={link.url}
                className={`${
                  location.pathname === link.url
                    ? "bg-primary text-black hover:text-black"
                    : "hover:text-primary"
                } px-4 py-2 rounded-full`}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
