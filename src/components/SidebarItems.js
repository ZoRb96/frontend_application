import * as GiIcons from 'react-icons/gi';

export const SidebarItems = [
    {
        name: "WORKMAN",
        route: '/',
        icon: <GiIcons.GiOfficeChair size={40} style={{ marginRight: "10px" }} />,
    },
    {
        name: "Add Employee",
        route: '/addEmployee'
    },
    {
        name: "View Employee",
        route: '/viewEmployee'
    },
];

export default SidebarItems;