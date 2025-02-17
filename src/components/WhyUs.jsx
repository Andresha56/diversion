import React from "react";

const Card = ({ title, description, bgColor, children }) => {
  return (
    <div className={`p-6 rounded-2xl shadow-lg text-white ${bgColor}`}>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm opacity-80">{description}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-fit flex flex-col justify-center bg-gray-100 px-20">
      <h1 className="text-5xl font-bold ml-5 text-purple-700 mb-15 mt-20">
        Why us?
      </h1>
      <div className="flex gap-6 px-10 py-10">
        {/* Manage Inventory */}
        <Card
          title="Manage inventory"
          description="Manage your inventory seamlessly and track or add products easily through the app/web"
          bgColor="bg-purple-600"
        >
          <div className="bg-white p-4 rounded-xl text-gray-900">
            <div className="flex justify-between">
              <div className="text-center">
                <p className="font-bold">Total Products</p>
                <p className="text-xl">300</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-red-500">Low Stock</p>
                <p className="text-xl text-red-500">12</p>
              </div>
            </div>
            <input
              className="w-full mt-2 p-2 border rounded-md"
              type="text"
              placeholder="Search inventory..."
            />
          </div>
        </Card>

        {/* Manage Expenses */}
        <Card
          title="Manage expenses"
          description="Manage expenses seamlessly with the help of useful features in the application/web"
          bgColor="bg-pink-600"
        >
          <div className="bg-white p-4 rounded-xl text-gray-900">
            <p className="font-bold">Total Expenses</p>
            <p className="text-2xl text-purple-700">Rs 4,280.50</p>
            <p className="text-sm opacity-70">Budget: Rs 6,000</p>
            <div className="mt-2 flex justify-between text-sm">
              <span className="bg-green-200 text-green-700 px-2 py-1 rounded-md">
                Completed
              </span>
              <span className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded-md">
                Pending
              </span>
            </div>
          </div>
        </Card>

        {/* Manage Billing */}
        <Card
          title="Manage billing"
          description="Create seamless bills using leveraging features in the app/web"
          bgColor="bg-green-600"
        >
          <div className="bg-white p-4 rounded-xl text-gray-900">
            <input
              className="w-full mb-2 p-2 border rounded-md"
              type="text"
              placeholder="Enter customer name"
            />
            <input
              className="w-full mb-2 p-2 border rounded-md"
              type="text"
              placeholder="Enter customer address"
            />
            <input
              className="w-full mb-2 p-2 border rounded-md"
              type="text"
              placeholder="Enter customer phone number"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
