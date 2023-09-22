import { HiHome, HiCode, HiPencilAlt, HiPuzzle } from "react-icons/hi";

export const menus = [
    {
        title: "Home",
        icon: <HiHome />,
        link: "/",
    },
    {
        title: "Create Entity",
        icon: <HiCode />,
        link: "/entity",
    },
    {
        title: "Create Uuid",
        icon: <HiPencilAlt />,
        link: "/uuid",
    },
    {
        title: "Vòng quay",
        icon: <HiPuzzle />,
        link: "/spin",
    },
    // {
    //     title: "Create Form",
    //     icon: <FaHome />,
    //     link: "/form",
    // },
    // {
    //     title: "Members",
    //     icon: <FaHome />,
    //     link: "/users",
    //     submenu: true,
    //     submenuItems: [
    //         { title: "Danh sách", link: "/users" },
    //         { title: "Cài đặt", link: "/setting" },
    //     ],
    // },
    // {
    //     title: "Filters",
    //     icon: <FaHome />,
    //     link: "/filters",
    // },
];
