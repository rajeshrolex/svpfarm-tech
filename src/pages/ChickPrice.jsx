import React, { useState } from 'react';
import { Filter, MapPin, Feather, Calendar } from 'lucide-react';

const ChickPrice = () => {
    const [formData, setFormData] = useState({
        chickType: 'Broiler',
        quantity: '',
        price: '',
        age: '',
        weight: '',
        vaccinated: false,
        vaccineStartDate: '',
        vaccineEndDate: '',
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
        console.log('Sell Chick Form Data:', formData);
        alert('Chick listing created successfully!');
    };

    // Mock data for the list view
    const chickListings = [
        { id: 1, type: 'Sonali', age: '1 Day', weight: '35g', price: 28, location: 'Hyderabad, TS', company: 'Royal Hatcheries' },
        { id: 2, type: 'Broiler', age: '1 Day', weight: '40g', price: 32, location: 'Vijayawada, AP', company: 'SVP Farms' },
        { id: 3, type: 'Aseel', age: '7 Days', weight: '100g', price: 65, location: 'Warangal, TS', company: 'Desi Chicks' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

            {/* Page Header */}
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl flex items-center">
                <Feather className="h-8 w-8 text-orange-500 mr-3" />
                Chick Rates
            </h2>

            {/* Chick Listings Table */}
            <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center bg-orange-50 border-b border-orange-100">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Available Chicks
                    </h3>
                    <button className="flex items-center text-sm text-primary-600 font-medium hover:text-primary-800">
                        <Filter className="h-4 w-4 mr-1" /> Filter
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age/Weight</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (₹)</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Contact</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {chickListings.map((person) => (
                                <tr key={person.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.type}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.age} / {person.weight}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">₹{person.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center"><MapPin className="h-3 w-3 mr-1" /> {person.location}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.company}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-primary-600 hover:text-primary-900">Contact</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Sell Chick Form */}
            <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6 border-b pb-2">
                        Sell Chicks
                    </h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

                        <div className="sm:col-span-2">
                            <label htmlFor="chickType" className="block text-sm font-medium text-gray-700">Chick Type</label>
                            <select
                                name="chickType"
                                value={formData.chickType}
                                onChange={handleChange}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                            >
                                <option>Broiler</option>
                                <option>Layer</option>
                                <option>Sonali</option>
                                <option>Aseel</option>
                                <option>Kadaknath</option>
                            </select>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price (per chick)</label>
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

                        <div className="sm:col-span-2">
                            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age (in days)</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight (grams)</label>
                            <input
                                type="number"
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="sm:col-span-2 flex items-end pb-2">
                            <div className="flex items-center">
                                <input
                                    id="vaccinated"
                                    name="vaccinated"
                                    type="checkbox"
                                    checked={formData.vaccinated}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                />
                                <label htmlFor="vaccinated" className="ml-2 block text-sm text-gray-900">
                                    Vaccinated?
                                </label>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="vaccineStartDate" className="block text-sm font-medium text-gray-700">Vaccine Date (Start)</label>
                            <input
                                type="date"
                                name="vaccineStartDate"
                                value={formData.vaccineStartDate}
                                onChange={handleChange}
                                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="vaccineEndDate" className="block text-sm font-medium text-gray-700">Vaccine Date (End)</label>
                            <input
                                type="date"
                                name="vaccineEndDate"
                                value={formData.vaccineEndDate}
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
                                Submit Chick Listing
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChickPrice;
