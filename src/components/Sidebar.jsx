import React, { useEffect, useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { menus } from "../constant/global-constant";

function Sidebar() {
    const [activeMenu, setActiveMenu] = useState("");
    const [showSubMenu, setShowSubMenu] = useState(false);

    const handleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        setActiveMenu(path);
    }, [location]);

    return (
        <div className="bg-sidebar">
            <div className="flex-shrink-0 w-64">
                <div className="p-4 border-b">
                    <a href="/" className="flex items-center justify-center">
                        <img src="/tool.svg" alt="Logo" className="w-10 h-10" />
                        <h1 className="text-2xl text-white ml-4 font-bold">
                            NTL TOOL
                        </h1>
                    </a>
                </div>
                <div className="flex-1 overflow-y-auto h-full">
                    <ul className="px-2 py-4">
                        {menus.map((menu, index) => (
                            <li key={index}>
                                {menu.submenu ? (
                                    <button
                                        className={`flex items-center w-full relative text-white p-2 mb-2 rounded gap-x-4 hover:bg-sidebar-hover`}
                                        onClick={handleSubMenu}
                                    >
                                        <span>{menu.icon}</span>
                                        {menu.title}
                                        {showSubMenu ? (
                                            <IoChevronUpOutline className="absolute right-4" />
                                        ) : (
                                            <IoChevronDownOutline className="absolute right-4" />
                                        )}
                                    </button>
                                ) : (
                                    <Link
                                        to={menu.link}
                                        className={`flex items-center text-white p-2 mb-2 rounded gap-x-4 hover:bg-sidebar-hover ${
                                            menu.link === activeMenu &&
                                            "bg-sidebar-hover"
                                        }`}
                                        onClick={() => setShowSubMenu(false)}
                                    >
                                        <span>{menu.icon}</span>
                                        {menu.title}
                                    </Link>
                                )}
                                {menu.submenu && showSubMenu && (
                                    <ul>
                                        {menu.submenuItems.map(
                                            (submenuItem, index) => (
                                                <li key={index}>
                                                    <Link
                                                        to={submenuItem.link}
                                                        className={`flex items-center text-white p-2 mb-2 rounded gap-x-4 hover:bg-sidebar-hover ${
                                                            submenuItem.link ===
                                                                activeMenu &&
                                                            "bg-sidebar-hover"
                                                        }`}
                                                    >
                                                        <span className="pl-6">
                                                            {submenuItem.title}
                                                        </span>
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
