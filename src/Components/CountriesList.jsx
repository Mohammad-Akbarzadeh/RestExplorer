import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CountriesList({ filteredCountries }) {

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredCountries.map((country) => {
        return (
          <li
            key={country.cca3}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <Link
              to={`/countries/${country.name.common}`}
              className="text-blue-600 hover:underline text-xl font-semibold"
            >
              {country.name.common}
            </Link>
            <div className="text-gray-500 text-[15px] mt-1">
              <p>
                <strong>region:</strong> {country.region}
              </p>
              <p>
                <strong>population:</strong> {country.population.toLocaleString('en-US')}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
