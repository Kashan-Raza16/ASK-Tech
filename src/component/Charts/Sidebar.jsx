import React from 'react';
import { Home, Package, Heart, MessageSquare, List, User, Briefcase, CheckSquare, Calendar, Table, LogOut } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/img/ask logo.png'; // Adjust the path as necessary

const Sidebar = ({ activeMenuItem, setActiveMenuItem }) => {
  const navigate = useNavigate();

  const sidebarItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Products', icon: Package },
    { name: 'Favorites', icon: Heart },
    {
      name: 'Messages', icon: MessageSquare, subItems: [
        { name: 'Order List', icon: List },
        { name: 'Account', icon: User },
      ]
    },
    { name: 'Contact', icon: Briefcase },
    { name: 'To-Do', icon: CheckSquare },
    { name: 'Calendar', icon: Calendar },
    { name: 'Table', icon: Table },
  ];

return (
    <aside className="w-64 min-h-screen bg-white shadow-2xl p-6 flex flex-col justify-between rounded-r-3xl border-r-4 border-gray-200">
        <div>
            <div className="text-3xl font-extrabold text-gray-800 mb-10 tracking-wide flex items-center gap-2">
                {/* <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 shadow-lg">ASK</span> */}
                <img src={logo} alt="ASK Tech Logo" className="w-15 h-12 cursor-pointer" />
               
            </div>
            <nav>
                <ul>
                    {sidebarItems.map((item) => (
                        <li key={item.name} className="mb-2">
                            <div
                                className={`flex items-center p-3 rounded-xl cursor-pointer transition-colors duration-200 ${
                                    activeMenuItem === item.name ? 'bg-gray-200 text-gray-900 shadow-md' : 'text-gray-600 hover:bg-gray-100'
                                }`}
                                onClick={() => setActiveMenuItem(item.name)}
                            >
                                <item.icon className="w-5 h-5 mr-3" />
                                <span>{item.name}</span>
                            </div>
                            {item.subItems && activeMenuItem === 'Messages' && (
                                <ul className="ml-8 mt-1">
                                    {item.subItems.map((subItem) => (
                                        <li key={subItem.name} className="mb-1">
                                            <div
                                                className={`flex items-center p-2 rounded-xl cursor-pointer transition-colors duration-200 ${
                                                    activeMenuItem === subItem.name ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'
                                                }`}
                                                onClick={() => setActiveMenuItem(subItem.name)}
                                            >
                                                <subItem.icon className="w-4 h-4 mr-2" />
                                                <span>{subItem.name}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
        <div className="mt-8">
            <button
                className="flex items-center justify-center w-full p-3 cursor-pointer bg-gray-200 text-gray-800 rounded-xl shadow-md hover:bg-gray-300 transition-colors duration-200"
                onClick={() => {
                    localStorage.clear();
                    sessionStorage.clear();
                    navigate("/");
                }}
            >
                <LogOut className="w-5 h-5 mr-2 " />
                Log Out
            </button>
        </div>
    </aside>
);
};

export default Sidebar;