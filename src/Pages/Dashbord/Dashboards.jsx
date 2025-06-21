import React from 'react';
import DashHeader from '../../component/Charts/DashHeader';
import UserByDeviceChart from '../../component/Charts/UserByDeviceChart';
import UserByLocationChart from '../../component/Charts/UserByLocationChart';
import TotalSpendChart from '../../component/Charts/TotalSpendChart';
import PurchaseVolumeChart from '../../component/Charts/PurchaseVolumeChart';
import PaymentChart from '../../component/Charts/PaymentChart';
import Sidebar from '../../component/Charts/Sidebar';
import ItemPurchaseChart from '../../component/Charts/ItemPurchaseChart';

function Dashboards() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-inter">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <DashHeader />
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <UserByDeviceChart />
          <UserByLocationChart />
          <TotalSpendChart />
          <PurchaseVolumeChart />
          <PaymentChart />
          <ItemPurchaseChart />
        </section>
      </main>
    </div>
  );
}

export default Dashboards;