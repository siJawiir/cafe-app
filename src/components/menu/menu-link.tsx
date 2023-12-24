import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface MenuLinkProps {
  to: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({ to, label, active, onClick }) => (
  <li className="h-10">
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={-110}
      duration={500}
      className={`mx-2 text-gray-400 whitespace-nowrap ${
        active ? 'font-bold text-gray-900 pb-2 border-b-4 border-gray-900' : 'font-medium'
      } cursor-pointer hover:text-gray-800 `}
      onClick={onClick}
    >
      {label}
    </ScrollLink>
  </li>
);

export default MenuLink;
