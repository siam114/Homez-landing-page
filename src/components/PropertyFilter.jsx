import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

const PropertyFilter = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [lookingFor, setLookingFor] = useState('Type');
  const [location, setLocation] = useState('Location');
  const [minPrice, setMinPrice] = useState('$0');
  const [maxPrice, setMaxPrice] = useState('$5,800');

  const tabs = ['All', 'For Sale', 'For Rent'];

  return (
    <div className="bg-transparent rounded-lg -mt-24 shadow-lg max-w-6xl z-50 relative mx-auto">
      {/* Tabs */}
      <div className="flex space-x-1 bg-white sm:w-fit w-full items-center rounded-t-lg">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filter Form */}
      <div className="grid grid-cols-1 bg-white p-6 rounded-lg rounded-tl-none md:grid-cols-12 gap-4 items-end">
        {/* Search Field */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search
          </label>
          <input
            type="text"
            placeholder="Enter Keywords"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

        {/* Looking For Dropdown */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Looking For
          </label>
          <select
            value={lookingFor}
            onChange={(e) => setLookingFor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
          >
            <option>Type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Condo</option>
            <option>Townhouse</option>
          </select>
        </div>

        {/* Location Dropdown */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
          >
            <option>Location</option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Chicago</option>
            <option>Houston</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price
          </label>
          <div className="flex space-x-2">
            <select
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
            >
              <option>$0</option>
              <option>$500</option>
              <option>$1,000</option>
              <option>$2,000</option>
              <option>$3,000</option>
            </select>
            <span className="flex items-center px-2 text-gray-500">-</span>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="flex-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
            >
              <option>$5,800</option>
              <option>$10,000</option>
              <option>$15,000</option>
              <option>$20,000</option>
              <option>$25,000+</option>
            </select>
          </div>
        </div>

        {/* Advanced Button */}
        <div className="lg:col-span-1">
          <button className="w-full bg-white hover:bg-gray-50 text-black border border-gray-300 px-4 py-2.5 rounded-md flex items-center justify-center focus:outline-none transition-colors">
            <SlidersHorizontal className="w-4 h-4 mr-1" />
            <span className="hidden lg:inline text-sm">Advanced</span>
          </button>
        </div>

        {/* Search Button */}
        <div className="lg:col-span-1">
          <button className="w-full bg-[#EB6753] hover:bg-[#eb6753e8] text-white px-4 py-2 rounded-md flex items-center justify-center focus:outline-none transition-colors">
            <Search className="w-4 h-4 mr-1" />
            <span className="hidden lg:inline">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;