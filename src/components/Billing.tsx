import React, { useState } from 'react';

interface Client {
  name: string;
  email: string;
  phone: string;
}

const Billing: React.FC = () => {
  const [client, setClient] = useState<Client>({
    name: '',
    email: '',
    phone: '',
  });

  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [billingOption, setBillingOption] = useState<'hours' | 'days'>('hours');
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [bill, setBill] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClient({
      ...client,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setClients([...clients, client]);
    setClient({ name: '', email: '', phone: '' });
    console.log('Client created:', client);
  };

  const handleClientSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = clients.find(c => c.name === e.target.value);
    setSelectedClient(selected || null);
  };

  const handleBillingOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBillingOption(e.target.value as 'hours' | 'days');
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const generateBill = () => {
    if (!selectedClient) return;
    const billContent = `Bill for ${selectedClient.name}\nEmail: ${selectedClient.email}\nPhone: ${selectedClient.phone}\nBilling Option: ${billingOption}\nQuantity: ${quantity}\nPrice: $${price}`;
    setBill(billContent);
    console.log('Bill generated:', billContent);
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Create Client</h2>
        <p className="mt-4 text-lg text-gray-500">Fill in the details to create a new client</p>
      </div>
      <form className="mt-12" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={client.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={client.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={client.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Client
          </button>
        </div>
      </form>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Select Client</h2>
        <select
          className="mt-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          onChange={handleClientSelection}
          value={selectedClient?.name || ''}
        >
          <option value="" disabled>Select a client</option>
          {clients.map((c, index) => (
            <option key={index} value={c.name}>{c.name}</option>
          ))}
        </select>
      </div>
      {selectedClient && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900">Billing Options</h2>
          <div className="mt-2">
            <label htmlFor="billingOption" className="block text-sm font-medium text-gray-700">Billing Option</label>
            <select
              id="billingOption"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              onChange={handleBillingOptionChange}
              value={billingOption}
            >
              <option value="hours">Hours</option>
              <option value="days">Days</option>
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              id="quantity"
              className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              id="price"
              className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={price}
              onChange={handlePriceChange}
            />
          </div>
          <div className="mt-6">
            <button
              type="button"
              onClick={generateBill}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Generate Bill
            </button>
          </div>
        </div>
      )}
      {bill && (
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-gray-900">Generated Bill</h3>
          <pre className="mt-2 text-gray-700">{bill}</pre>
        </div>
      )}
    </div>
  );
};

export default Billing;
