import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar
} from 'recharts'; // Using recharts for charts
import { Home, Package, Heart, MessageSquare, List, User, Briefcase, CheckSquare, Calendar, Table, Search, Bell, Settings, LogOut, ChevronDown, ChevronUp } from 'lucide-react'; // Using lucide-react for icons
import { useNavigate } from "react-router-dom"; // Add this import at the top if not present

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A281E1', '#8884d8', '#82ca9d']; // Colors for charts

// Dummy data for charts and cards
const userDataByDevice = [
  { name: 'Windows', users: 40000 },
  { name: 'iOS', users: 30000 },
  { name: 'Mac', users: 20000 },
  { name: 'Android', users: 27800 },
  { name: 'Linux', users: 18900 },
  { name: 'Other', users: 23900 },
];

const userDataByLocation = [
  { name: 'Dhaka', value: 48 },
  { name: 'Chittagong', value: 16 },
  { name: 'Rajshahi', value: 8 },
  { name: 'Jashore', value: 19 },
  { name: 'Cumilla', value: 9 },
];

const purchaseVolumeData = [
  { name: 'Jan', volume: 150000 },
  { name: 'Feb', volume: 170000 },
  { name: 'Mar', volume: 160000 },
  { name: 'Apr', volume: 190000 },
  { name: 'May', volume: 180000 },
];

const paymentData = [
  { name: 'Jan', amount: 20000 },
  { name: 'Feb', amount: 22000 },
  { name: 'Mar', amount: 25000 },
  { name: 'Apr', amount: 23000 },
  { name: 'May', amount: 27000 },
];

const itemPurchaseData = [
  { name: 'Printer 100', value: 1500, fill: '#8884d8' },
  { name: 'License 200', value: 1200, fill: '#82ca9d' },
  { name: 'Monitor 300', value: 900, fill: '#a4de6c' },
  { name: 'Mouse 400', value: 700, fill: '#d0ed57' },
];

function Dashboard() {
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');
  const [messagesOpen, setMessagesOpen] = useState(false);
  const navigate = useNavigate(); // Add this line

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

  useEffect(() => {
    // This could be used for initial data fetching or auth checks
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100 font-inter">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between rounded-r-xl">
        <div>
          <div className="text-2xl font-bold text-blue-700 mb-8">ASK Tech.</div>
          <nav>
            <ul>
              {sidebarItems.map((item) => (
                <li key={item.name} className="mb-2">
                  <div
                    className={`flex items-center p-3 rounded-xl cursor-pointer transition-colors duration-200 ${
                      activeMenuItem === item.name ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      setActiveMenuItem(item.name);
                      if (item.name === 'Messages') setMessagesOpen(!messagesOpen);
                    }}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    <span>{item.name}</span>
                    {item.name === 'Messages' && (messagesOpen ? <ChevronUp className="ml-auto w-4 h-4" /> : <ChevronDown className="ml-auto w-4 h-4" />)}
                  </div>
                  {item.subItems && messagesOpen && activeMenuItem === 'Messages' && (
                    <ul className="ml-8 mt-1">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name} className="mb-1">
                          <div
                            className={`flex items-center p-2 rounded-xl cursor-pointer transition-colors duration-200 ${
                              activeMenuItem === subItem.name ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-50'
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
            className="flex items-center justify-center w-full p-3 cursor-pointer bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition-colors duration-200"
            onClick={() => {
              // Clear any auth tokens or user data if needed
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

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-5 rounded-xl shadow-md mb-8">
          <div className="relative flex items-center w-64">
            <Search className="absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-500 hover:text-blue-500 cursor-pointer" />
            <Settings className="text-gray-500 hover:text-blue-500 cursor-pointer" />
            <div className="flex items-center space-x-2">
              <img
                src="https://placehold.co/40x40/cbd5e1/000000?text=JD"
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-blue-400"
              />
              <span className="font-semibold text-gray-700">John Doe</span>
            </div>
          </div>
        </header>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card title="Total User" value="50,980" change="+8% Up" color="text-green-500" iconBg="bg-blue-100" icon={<User className="w-6 h-6 text-blue-600" />} />
          <Card title="Total Sales" value="$81,000" change="-7% Down" color="text-red-500" iconBg="bg-pink-100" icon={<List className="w-6 h-6 text-pink-600" />} />
          <Card title="Total Order" value="10,569" change="+2% Up" color="text-green-500" iconBg="bg-green-100" icon={<Package className="w-6 h-6 text-green-600" />} />
          <Card title="Total Pending" value="1,800" change="-1% Down" color="text-red-500" iconBg="bg-yellow-100" icon={<CheckSquare className="w-6 h-6 text-yellow-600" />} />
          <Card title="Total Stock" value="60,000" change="+6% Up" color="text-green-500" iconBg="bg-purple-100" icon={<Table className="w-6 h-6 text-purple-600" />} />
        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User by Device Chart */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">User by Device</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userDataByDevice} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="users" fill="#4A90E2" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* User by Location Chart */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">User by Location</h3>
              <select className="px-3 py-1 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option>2025</option>
                <option>2024</option>
              </select>
            </div>
            <div className="flex-1 flex items-center justify-center h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={userDataByLocation}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    labelLine={false}
                  >
                    {userDataByLocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm">
              {userDataByLocation.map((entry, index) => (
                <div key={index} className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                    {entry.name}
                  </div>
                  <span className="font-medium">{entry.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Total Spend Chart */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Total Spend</h3>
              <select className="px-3 py-1 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option>2025</option>
                <option>2024</option>
              </select>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">$3,67,000</div>
            <div className="flex-1 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={purchaseVolumeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="volume" stroke="#8884d8" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
              <span>Total Item 40</span>
              <button className="text-blue-600 hover:underline">View Details</button>
            </div>
          </div>

          {/* Purchase Volume Chart */}
          <div className="bg-white p-6 rounded-xl shadow-md lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Purchase Volume</h3>
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <span className="font-semibold text-gray-900 mr-2">Jan, 2025</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={purchaseVolumeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="volume" stroke="#8884d8" strokeWidth={3} dot={false} fill="url(#colorVolume)" />
                  <defs>
                    <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                This Year
              </div>
              <span>2025</span>
            </div>
          </div>

          {/* Payment Chart */}
          <div className="bg-white p-6 rounded-xl shadow-md lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment</h3>
            <p className="text-sm text-red-500 mb-4">-14.45% vs last month</p>
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-4 w-fit">
              <span className="text-sm font-semibold text-gray-800">Payment 20,980</span>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={paymentData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="amount" stroke="#FF7300" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Item Purchase Chart */}
          <div className="bg-white p-6 rounded-xl shadow-md lg:col-span-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Item Purchase</h3>
              <select className="px-3 py-1 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option>2025</option>
                <option>2024</option>
              </select>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-4">2000</div>
            <div className="h-64 flex items-end">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={itemPurchaseData} layout="vertical" barCategoryGap="20%">
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" width={10} hide />
                  <Tooltip />
                  <Bar dataKey="value" barSize={15} radius={[0, 10, 10, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm">
              {itemPurchaseData.map((entry, index) => (
                <div key={index} className="flex items-center mb-1">
                  <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.fill }}></span>
                  {entry.name}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const Card = ({ title, value, change, color, iconBg, icon }) => (
  <div className="bg-white p-5 rounded-xl shadow-md flex flex-col items-start">
    <div className={`p-3 rounded-full mb-3 ${iconBg}`}>
      {icon}
    </div>
    <p className="text-sm text-gray-500 mb-1">{title}</p>
    <p className="text-2xl font-bold text-gray-900 mb-2">{value}</p>
    <p className={`text-xs ${color} font-medium`}>
      {change.includes('Up') ? (
        <span className="flex items-center">
          <ChevronUp className="w-3 h-3 inline mr-1" />
          {change} from past week
        </span>
      ) : (
        <span className="flex items-center">
          <ChevronDown className="w-3 h-3 inline mr-1" />
          {change} from yesterday
        </span>
      )}
    </p>
  </div>
);

export default Dashboard;


