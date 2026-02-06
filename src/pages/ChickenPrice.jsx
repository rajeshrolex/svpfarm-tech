import React, { useState } from 'react';
import { ShoppingBag, MapPin, Calendar, Clock } from 'lucide-react';

const ChickenPrice = () => {
    const [formData, setFormData] = useState({
        birdType: 'Broiler',
        quantity: '',
        price: '',
        startDate: '',
        endDate: '',
        state: '',
        city: '',
        company: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sell Chicken Form Data:', formData);
        alert('Chicken listing created successfully!');
    };

    // Mock data for the list view
    const chickenListings = [
        { id: 1, type: 'Broiler', quantity: '500 kg', price: 92, dateRange: '07 Feb - 09 Feb', location: 'Hyderabad, TS', company: 'SVP Farms' },
        { id: 2, type: 'Layer', quantity: '1000 Birds', price: 65, dateRange: '08 Feb - 10 Feb', location: 'Vijayawada, AP', company: 'Royal Traders' },
        { id: 3, type: 'Broiler', quantity: '2000 kg', price: 90, dateRange: '07 Feb Only', location: 'Warangal, TS', company: 'Desi Chicks' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

            {/* Page Header */}
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl flex items-center">
                <ShoppingBag className="h-8 w-8 text-red-500 mr-3" />
                Chicken Rates & Listings
            </h2>

            {/* Chicken Listings Table */}
            <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center bg-red-50 border-b border-red-100">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Current Farm Rates
                    </h3>
                    <span className="text-sm text-red-600 font-medium">Live Market Updates</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bird Type</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (₹)</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available Dates</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Action</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {chickenListings.map((listing) => (
                                <tr key={listing.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{listing.type}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{listing.quantity}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">₹{listing.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center"><Calendar className="h-3 w-3 mr-1" /> {listing.dateRange}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><span className="flex items-center"><MapPin className="h-3 w-3 mr-1" /> {listing.location}</span></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-primary-600 hover:text-primary-900">Contact Seller</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Sell Chicken Form */}
            <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6 border-b pb-2">
                        Sell Chicken / Create Listing
                    </h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

                        <div className="sm:col-span-2">
                            <label htmlFor="birdType" className="block text-sm font-medium text-gray-700">Bird Type</label>
                            <select
                                name="birdType"
                                value={formData.birdType}
                                onChange={handleChange}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                            >
                                <option>Broiler</option>
                                <option>Layer</option>
                                <option>Cull Bird</option>
                                <option>Breeder</option>
                            </select>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity (kg/birds)</label>
                            <input
                                type="text"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                placeholder="e.g. 500kg"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price (per kg/bird)</label>
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

                        <div className="sm:col-span-3">
                            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Available From</label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">Available Until</label>
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
                                Post Listing
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChickenPrice;
