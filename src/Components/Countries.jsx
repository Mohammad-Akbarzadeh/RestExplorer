import { useEffect, useState } from "react";
import CountriesList from "./CountriesList";

export default function Countries() {
  const [countriesdata, setCountriesdata] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [selectedRegion, setSelectedRegion] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca3,region,population"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCountriesdata(data);
        setFilteredCountries(data); 
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

 
  useEffect(() => {
    let filtered = countriesdata;

   
    if (searchQuery) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    
    if (selectedRegion) {
      filtered = filtered.filter(
        (country) => country.region.toLowerCase() === selectedRegion.toLowerCase()
      );
    }

    setFilteredCountries(filtered);
  }, [searchQuery, selectedRegion, countriesdata]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); 
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value); 
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Countries</h1>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="search"
          placeholder="Search by name..."
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-blue-500"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-blue-500"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="">All Regions</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <CountriesList filteredCountries={filteredCountries} />
    </div>
  );
}