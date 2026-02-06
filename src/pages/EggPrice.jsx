import React, { useState } from 'react';
import { Egg, MapPin, Building, Calendar, DollarSign, Filter } from 'lucide-react';

const EggPrice = () => {
    const [formData, setFormData] = useState({
        birdType: 'Layer',
        quantity: '',
        price: '',
        startDate: '',
        endDate: '',
        isHatching: false,
        state: '',
        city: '',
        company: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sell Egg Form Data:', formData);
        // Add API call logic here
        alert('Listing created successfully!');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

            {/* Page Header */}
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate flex items-center">
                        <Egg className="h-8 w-8 text-yellow-500 mr-3" />
                        Egg Rates
                    </h2>
                </div>
            </div>

            {/* Today's Price Section */}
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Today's NECC Price (100 Eggs)
                    </h3>
                    <div className="mt-3 sm:mt-0 sm:ml-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            Updated: Just now
                        </span>
                    </div>
                </div>

                {/* Filters */}
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                        <label htmlFor="price-state" className="block text-sm font-medium text-gray-700">State</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MapPin className="h-5 w-5 text-gray-400" />
                            </div>
                            <select id="price-state" name="price-state" className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md">
                                <option>Select State</option>
                                <option>Andhra Pradesh</option>
                                <option>Telangana</option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="price-city" className="block text-sm font-medium text-gray-700">City</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Building className="h-5 w-5 text-gray-400" />
                            </div>
                            <select id="price-city" name="price-city" className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md">
                                <option>All Cities</option>
                                <option>Hyderabad</option>
                                <option>Vijayawada</option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="price-company" className="block text-sm font-medium text-gray-700">Company</label>
                        <select id="price-company" name="price-company" className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                            <option>All Companies</option>
                            <option>NECC</option>
                        </select>
                    </div>
                </div>

                {/* Price Display */}
                <div className="mt-6 bg-yellow-50 overflow-hidden rounded-lg border border-yellow-200">
                    <div className="px-4 py-5 sm:p-6 text-center">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                            Hyderabad Rate
                        </dt>
                        <dd className="mt-1 text-5xl font-bold text-gray-900">
                            ₹545.00
                        </dd>
                        <p className="mt-2 text-sm text-green-600 font-semibold flex items-center justify-center">
                            ▲ +10.00 from yesterday
                        </p>
                    </div>
                </div>
            </div>

            {/* Sell Egg Form */}
            <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6 border-b pb-2">
                        Sell Eggs
                    </h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

                        <div className="sm:col-span-3">
                            <label htmlFor="birdType" className="block text-sm font-medium text-gray-700">Bird Type</label>
                            <select
                                name="birdType"
                                value={formData.birdType}
                                onChange={handleChange}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                            >
                                <option>Layer</option>
                                <option>Broiler Breeder</option>
                            </select>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity (Trays/Boxes)</label>
                            <input
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price (per unit)</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm">₹</span>
                                </div>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="0.00"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3 flex items-end pb-2">
                            <div className="flex items-center">
                                <input
                                    id="isHatching"
                                    name="isHatching"
                                    type="checkbox"
                                    checked={formData.isHatching}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                />
                                <label htmlFor="isHatching" className="ml-2 block text-sm text-gray-900">
                                    Is Hatching Egg?
                                </label>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
                            <input
                                type="date"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
                            <textarea
                                name="comment"
                                rows={3}
                                value={formData.comment}
                                onChange={handleChange}
                                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="sm:col-span-6">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                            >
                                Submit Listing
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EggPrice;
