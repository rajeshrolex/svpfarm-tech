import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Truck, MapPin, Calendar, Weight, Phone, User, Tag, ArrowLeft } from 'lucide-react';

const LiftingSaleDetails = () => {
    const { id } = useParams();

    // Mock data - in a real app, fetch this based on ID
    const listing = {
        id: id || 1,
        breed: 'Cobb 500',
        price: 92,
        totalBirds: 5000,
        age: '40 Days',
        avgWeight: '2.4',
        location: 'Peddapalli, Telangana',
        fullAddress: 'Plot No 12, Near market yard, Peddapalli, Telangana 505172',
        date: '2025-02-07',
        sellerName: 'Ramesh Poultry Farms',
        sellerContact: '+91 98765 43210',
        sellerComment: 'Healthy birds, vaccinated on time. Ready for immediate lifting. Transport can be arranged.',
        images: [
            'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=600&h=400',
            'https://images.unsplash.com/photo-1587593810167-a6492031e99d?auto=format&fit=crop&q=80&w=600&h=400'
        ]
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

            {/* Back Button */}
            <div>
                <Link to="/lifting-sale" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Listings
                </Link>
            </div>

            <div className="bg-white shadow-xl rounded-lg overflow-hidden">

                {/* Header Section */}
                <div className="bg-blue-600 px-6 py-8 md:flex md:items-center md:justify-between">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
                            {listing.breed} - {listing.totalBirds} Birds
                        </h2>
                        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                            <div className="mt-2 flex items-center text-sm text-blue-100">
                                <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-200" />
                                {listing.location}
                            </div>
                            <div className="mt-2 flex items-center text-sm text-blue-100">
                                <Calendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-200" />
                                Posted on {listing.date}
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex md:mt-0 md:ml-4">
                        <span className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg font-bold text-blue-600 bg-white hover:bg-gray-50 focus:outline-none">
                            ₹ {listing.price} / kg
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">

                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-8">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <p className="text-sm font-medium text-gray-500 uppercase">Total Birds</p>
                                <p className="mt-2 text-xl font-semibold text-gray-900 flex items-center"><Tag className="h-5 w-5 mr-2 text-gray-400" /> {listing.totalBirds}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <p className="text-sm font-medium text-gray-500 uppercase">Average Weight</p>
                                <p className="mt-2 text-xl font-semibold text-gray-900 flex items-center"><Weight className="h-5 w-5 mr-2 text-gray-400" /> {listing.avgWeight} kg</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <p className="text-sm font-medium text-gray-500 uppercase">Bird Age</p>
                                <p className="mt-2 text-xl font-semibold text-gray-900 flex items-center"><Calendar className="h-5 w-5 mr-2 text-gray-400" /> {listing.age}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <p className="text-sm font-medium text-gray-500 uppercase">Sale ID</p>
                                <p className="mt-2 text-xl font-semibold text-gray-900 text-mono">#{listing.id.toString().padStart(6, '0')}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Seller's Note</h3>
                            <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{listing.sellerComment}</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Photo Gallery</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {listing.images.map((img, idx) => (
                                    <img key={idx} src={img} alt={`Bird ${idx + 1}`} className="rounded-lg shadow object-cover w-full h-48 md:h-64" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 sticky top-24">
                            <h3 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">Seller Information</h3>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-xl mr-3">
                                        {listing.sellerName.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{listing.sellerName}</p>
                                        <p className="text-xs text-gray-500">Verified Seller</p>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <p className="text-sm text-gray-500 mb-1">Full Address</p>
                                    <p className="text-sm text-gray-900">{listing.fullAddress}</p>
                                </div>

                                <div className="pt-4">
                                    <a href={`tel:${listing.sellerContact}`} className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">
                                        <Phone className="mr-2 h-5 w-5" /> Call Seller
                                    </a>
                                    <button className="mt-3 w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50">
                                        Chat with Seller
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LiftingSaleDetails;
