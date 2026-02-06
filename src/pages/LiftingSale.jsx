import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Truck, MapPin, Calendar, Weight, Info } from 'lucide-react';

const LiftingSale = () => {
    const [filters, setFilters] = useState({
        date: '',
        birdType: '',
        priceMin: '',
        priceMax: '',
        state: '',
        city: ''
    });

    const listings = [
        {
            id: 1,
            breed: 'Cobb 500',
            price: 92,
            totalBirds: 5000,
            age: '40 Days',
            avgWeight: '2.4',
            location: 'Hyderabad, Telangana',
            date: '2025-02-07',
            image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=300&h=200'
        },
        {
            id: 2,
            breed: 'Ross 308',
            price: 88,
            totalBirds: 3000,
            age: '42 Days',
            avgWeight: '2.6',
            location: 'Vijayawada, AP',
            date: '2025-02-08',
            image: 'https://images.unsplash.com/photo-1587593810167-a6492031e99d?auto=format&fit=crop&q=80&w=300&h=200'
        },
        {
            id: 3,
            breed: 'Sonali',
            price: 180,
            totalBirds: 2000,
            age: '3 Months',
            avgWeight: '1.2',
            location: 'Warangal, Telangana',
            date: '2025-02-09',
            image: 'https://images.unsplash.com/photo-1563223552-30d013fa9ae4?auto=format&fit=crop&q=80&w=300&h=200'
        }
    ];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

            {/* Header */}
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate flex items-center">
                        <Truck className="h-8 w-8 text-blue-500 mr-3" />
                        Lifting Sales (Bulk Birds)
                    </h2>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                    <Link to="/lifting-sale/new" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                        Post New Sale
                    </Link>
                </div>
            </div>

            {/* Filters (Desktop & Mobile) */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">Filters</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                    <select name="birdType" onChange={handleFilterChange} className="block w-full text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
                        <option value="">Bird Type</option>
                        <option>Broiler</option>
                        <option>Layer</option>
                        <option>Sonali</option>
                    </select>
                    <select name="state" onChange={handleFilterChange} className="block w-full text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
                        <option value="">State</option>
                        <option>Telangana</option>
                        <option>Andhra Pradesh</option>
                    </select>
                    <input type="text" name="city" placeholder="City" onChange={handleFilterChange} className="block w-full text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md" />
                    <input type="number" name="priceMin" placeholder="Min Price" onChange={handleFilterChange} className="block w-full text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md" />
                    <input type="number" name="priceMax" placeholder="Max Price" onChange={handleFilterChange} className="block w-full text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md" />
                    <input type="date" name="date" onChange={handleFilterChange} className="block w-full text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md" />
                </div>
            </div>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {listings.map((listing) => (
                    <div key={listing.id} className="bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                        <div className="h-48 w-full bg-gray-200 overflow-hidden relative">
                            <img
                                src={listing.image}
                                alt={listing.breed}
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-xs font-bold shadow text-gray-900">
                                {listing.breed}
                            </div>
                        </div>

                        <div className="p-5 flex-grow">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">₹{listing.price}<span className="text-sm font-normal text-gray-500">/kg</span></h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500 flex items-center justify-end"><MapPin className="h-3 w-3 mr-1" /> {listing.location.split(',')[0]}</p>
                                </div>
                            </div>

                            <div className="mt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 flex items-center"><Info className="h-3 w-3 mr-1" /> Birds</span>
                                    <span className="font-medium text-gray-900">{listing.totalBirds}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 flex items-center"><Calendar className="h-3 w-3 mr-1" /> Age</span>
                                    <span className="font-medium text-gray-900">{listing.age}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 flex items-center"><Weight className="h-3 w-3 mr-1" /> Avg. Weight</span>
                                    <span className="font-medium text-gray-900">{listing.avgWeight} kg</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 px-5 py-4 border-t border-gray-100">
                            <Link
                                to={`/lifting-sale/${listing.id}`}
                                className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiftingSale;
