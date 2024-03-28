interface NavItem {
  name: string;
}

const Navbar = () => {
  const items: NavItem[] = [
    {
      name: "Home",
    },
    {
      name: "Skills",
    },
    {
      name: "About Me",
    },
    {
      name: "Projects",
    },
  ];
  return (
    <nav>
        <ul className="flex justify-center gap-x-10">
            {items.map((navItem: NavItem) => (
                <li>
                    <a href="#">{navItem.name}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
};

export default Navbar;
