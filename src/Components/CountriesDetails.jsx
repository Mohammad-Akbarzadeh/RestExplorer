import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CountryDetails() {
  const { countryName } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCountryDetails() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}?fullText=true&fields=name,cca3,region,population,flags,capital,languages,currencies`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const [data] = await response.json();
        setCountryData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCountryDetails();
  }, [countryName]);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }
  if (error) {
    return <div className="p-6">Error: {error}</div>;
  }
  if (!countryData) {
    return <div className="p-6">Country not found</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={countryData.flags.svg}
            alt={`Flag of ${countryData.name.common}`}
            className="w-full md:w-1/2 h-48 object-contain rounded"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4 text-gray-900">
              {countryData.name.common}
            </h1>
            <div className="text-gray-600 space-y-2">
              <p>
                <strong>Region:</strong> {countryData.region}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {countryData.population.toLocaleString("en-US")}
              </p>
              <p>
                <strong>Capital:</strong> {countryData.capital?.[0] || "N/A"}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {countryData.languages
                  ? Object.values(countryData.languages).join(", ")
                  : "N/A"}
              </p>
              <p>
                <strong>Currency:</strong>{" "}
                {countryData.currencies
                  ? Object.values(countryData.currencies)
                      .map((curr) => `${curr.name} (${curr.symbol})`)
                      .join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="/countries"
        className="inline-block mb-6 mt-8 bg-blue-600 text-white p-3 rounded hover:bg-blue-700 text-lg"
      >
        Back to Countries
      </Link>
    </div>
  );
}