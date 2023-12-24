import React, { useEffect, useState } from "react";
import MenuLink from "../components/menu/menu-link";
import menuServices from "../services/menuServices";
import formatter from "../utils/formatter";
import Loading from "../components/loading";

const MenuPage: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>("Seasonal menu");
  const [menuData, setMenuData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await menuServices.getMenuData();
      if (response) {
        setMenuData(response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div className="flex">
        <nav className="fixed top-0 left-0 right-0 bg-white p-4 z-10">
          <div className="flex flex-col justify-center items-center">
            <div className="mb-2">
              <h2 className="font-bold">MENU</h2>
            </div>
            <div className="mx-auto flex w-full justify-center items-center">
              <ul className="flex flex-row gap-4 overflow-x-auto">
                {menuData &&
                  menuData.map((link: any) => (
                    <MenuLink
                      key={link.category_name}
                      to={link.category_name}
                      label={link.category_name}
                      active={activeLink === link.category_name}
                      onClick={() => handleLinkClick(link.category_name)}
                    />
                  ))}
              </ul>
            </div>
          </div>
        </nav>

        <div className="my-20 px-4 w-full">
          {menuData &&
            menuData.map((link: any) => (
              <div
                key={link.category_name}
                id={link.category_name}
                className="my-8"
              >
                <h3 className="font-bold">{link.category_name}</h3>
                {link.menu.map((menuItem: any) => (
                  <div
                    key={menuItem.name}
                    className="flex mt-2 items-center h-32"
                  >
                    <div className="w-16 h-16">
                      <img
                        src={menuItem.photo}
                        className="flex items-center justify-center object-contain"
                        alt="product"
                      />
                    </div>
                    <div className="flex-1 ml-4 w-32">
                      <p className="font-semibold">{menuItem.name}</p>
                      <p className="text-gray-500 line-clamp-3">
                        {menuItem.description}
                      </p>
                    </div>
                    <div className="flex items-start ml-4">
                      <p className="font-semibold">
                        {formatter.formatNumber(menuItem.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
      <Loading isVisible={loading} />
    </div>
  );
};

export default MenuPage;
