"use client";
import { useState } from "react";
import RentCardList from "../Cards/rentCardListView";

export default function RentPage() {
  const rentList = [
    {
      id: 1,
      title: "Modern Apartment in Downtown",
      price: 1200,
      type: "Apartment",
      bedrooms: 2,
      furnished: true,
      paymentPlan: "Monthly",
      location: "Downtown, Cairo",
      rating: 4.5,
      reviews: 25,
      amenities: ["Swimming Pool", "Gym", "Parking"],
      description:
        "A modern and spacious apartment located in the heart of downtown, perfect for professionals.",
    },
    {
      id: 2,
      title: "Cozy Studio Near the Park",
      price: 950,
      type: "Studio",
      bedrooms: 1,
      furnished: false,
      paymentPlan: "Yearly",
      location: "Zamalek, Cairo",
      rating: 4.0,
      reviews: 18,
      amenities: ["Parking", "Balcony"],
      description:
        "A cozy studio with a beautiful view of the park, ideal for singles or couples.",
    },
    {
      id: 3,
      title: "Luxury Condo with Pool",
      price: 2500,
      type: "Condo",
      bedrooms: 3,
      furnished: true,
      paymentPlan: "Monthly",
      location: "New Cairo",
      rating: 4.8,
      reviews: 30,
      amenities: ["Swimming Pool", "Gym", "Parking", "24/7 Security"],
      description:
        "A luxurious condo with premium amenities, located in a secure compound.",
    },
    {
      id: 4,
      title: "Elegant Loft in City Center",
      price: 1800,
      type: "Loft",
      bedrooms: 1,
      furnished: false,
      paymentPlan: "Yearly",
      location: "Maadi, Cairo",
      rating: 4.2,
      reviews: 22,
      amenities: ["High Ceilings", "Open Floor Plan"],
      description:
        "An elegant loft with high ceilings and an open floor plan, perfect for creative professionals.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [selectedFurniture, setSelectedFurniture] = useState([]);
  const [selectedPaymentPlans, setSelectedPaymentPlans] = useState([]);

  const propertyTypes = [...new Set(rentList.map((p) => p.type))];
  const bedroomCounts = [...new Set(rentList.map((p) => p.bedrooms))].sort(
    (a, b) => a - b
  );
  const paymentPlans = [...new Set(rentList.map((p) => p.paymentPlan))];

  const toggleFilter = (filterState, setFilterState, value) => {
    setFilterState((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const filteredList = rentList.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPrice =
      (!minPrice || p.price >= parseInt(minPrice)) &&
      (!maxPrice || p.price <= parseInt(maxPrice));
    const matchesType =
      selectedTypes.length === 0 || selectedTypes.includes(p.type);
    const matchesBedrooms =
      selectedBedrooms.length === 0 || selectedBedrooms.includes(p.bedrooms);
    const matchesFurniture =
      selectedFurniture.length === 0 || selectedFurniture.includes(p.furnished);
    const matchesPaymentPlan =
      selectedPaymentPlans.length === 0 ||
      selectedPaymentPlans.includes(p.paymentPlan);

    return (
      matchesSearch &&
      matchesPrice &&
      matchesType &&
      matchesBedrooms &&
      matchesFurniture &&
      matchesPaymentPlan
    );
  });

  return (
    <section className="container mx-auto p-4 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <aside className="md:col-span-1 p-4 border rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Search Bar */}
          <div className="border-b border-gray-300 pb-4 mb-4">
            <input
              type="text"
              placeholder="Search for compounds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Price Range Filter */}
          <div className="border-b border-gray-300 pb-4 mb-4">
            <label className="block font-medium mb-2">Price Range</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-1/2 p-2 border border-gray-300 rounded-lg"
              />
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-1/2 p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Property Type Filter */}
          <div className="border-b border-gray-300 pb-4 mb-4">
            <label className="block font-medium mb-2">Property Type</label>
            <div className="space-y-2">
              {propertyTypes.map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() =>
                      toggleFilter(selectedTypes, setSelectedTypes, type)
                    }
                    className="w-4 h-4"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Bedroom Filter */}
          <div className="border-b border-gray-300 pb-4 mb-4">
            <label className="block font-medium mb-2">Number of Bedrooms</label>
            <div className="space-y-2">
              {bedroomCounts.map((count) => (
                <label key={count} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedBedrooms.includes(count)}
                    onChange={() =>
                      toggleFilter(selectedBedrooms, setSelectedBedrooms, count)
                    }
                    className="w-4 h-4"
                  />
                  {count} {count > 1 ? "Bedrooms" : "Bedroom"}
                </label>
              ))}
            </div>
          </div>

          {/* Furniture Filter */}
          <div className="border-b border-gray-300 pb-4 mb-4">
            <label className="block font-medium mb-2">Furniture</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedFurniture.includes(true)}
                  onChange={() =>
                    toggleFilter(selectedFurniture, setSelectedFurniture, true)
                  }
                  className="w-4 h-4"
                />
                Furnished
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedFurniture.includes(false)}
                  onChange={() =>
                    toggleFilter(selectedFurniture, setSelectedFurniture, false)
                  }
                  className="w-4 h-4"
                />
                Unfurnished
              </label>
            </div>
          </div>

          {/* Payment Plan Filter */}
          <div className="border-b border-gray-300 pb-4 mb-4">
            <label className="block font-medium mb-2">Payment Plan</label>
            <div className="space-y-2">
              {paymentPlans.map((plan) => (
                <label key={plan} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedPaymentPlans.includes(plan)}
                    onChange={() =>
                      toggleFilter(
                        selectedPaymentPlans,
                        setSelectedPaymentPlans,
                        plan
                      )
                    }
                    className="w-4 h-4"
                  />
                  {plan}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3">
          <h1 className="text-2xl font-bold mb-4">
            Compounds In Egypt{" "}
            <span className="text-gray-600">({filteredList.length})</span>
          </h1>

          {/* Property Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
            {filteredList.length > 0 ? (
              filteredList.map((item) => (
                <RentCardList key={item.id} property={item} />
              ))
            ) : (
              <p>No properties available.</p>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}
