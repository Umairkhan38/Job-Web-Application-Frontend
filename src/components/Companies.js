import React, { useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';


const companies = [
  {
    id: 1,
    name: 'Periscope',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 4,
    location: 'Denmark, DN',
    openings: 6,
  },
  {
    id: 2,
    name: 'NewSum',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 2,
    location: 'Denmark, DN',
    openings: 1,
  },
  {
    id: 3,
    name: 'Nintendo',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 2,
    location: 'England, UK',
    openings: 2,
  },
  {
    id: 4,
    name: 'Sony',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 4,
    location: 'Japan',
    openings: 5,
  },
  {
    id: 5,
    name: 'Google',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 5,
    location: 'USA',
    openings: 10,
  },
  {
    id: 6,
    name: 'Microsoft',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 3,
    location: 'USA',
    openings: 7,
  },
  {
    id: 7,
    name: 'Facebook',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 4,
    location: 'USA',
    openings: 8,
  },
  {
    id: 8,
    name: 'Apple',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 4,
    location: 'USA',
    openings: 12,
  },
  {
    id: 9,
    name: 'Twitter',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 3,
    location: 'USA',
    openings: 6,
  },
  {
    id: 10,
    name: 'Amazon',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 5,
    location: 'USA',
    openings: 15,
  },
  {
    id: 11,
    name: 'Microsoft',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 5,
    location: 'USA',
    openings: 15,
  },
  {
    id: 12,
    name: 'Deloitte',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 5,
    location: 'USA',
    openings: 15,
  },
  {
    id: 13,
    name: 'Capgemini',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 5,
    location: 'USA',
    openings: 15,
  },
  {
    id: 14,
    name: 'KPMG',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 5,
    location: 'USA',
    openings: 15,
  },
  {
    id: 15,
    name: 'Havels',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 5,
    location: 'USA',
    openings: 15,
  },
  {
    id: 16,
    name: 'fsda',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 5,
    location: 'USA',
    openings: 15,
  },
  {
    id: 17,
    name: 'HCL',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 5,
    location: 'USA',
    openings: 15,
  },
  {
    id: 18,
    name: 'DELL',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 5,
    location: 'USA',
    openings: 15,
  },
  {
    id: 19,
    name: 'FLIPKART',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 5,
    location: 'USA',
    openings: 15,
  },
  {
    id: 20,
    name: 'Mintra',
    logo: 'https://jobbox.archielite.com/storage/companies/5.png',
    rating: 5,
    location: 'USA',
    openings: 15,
  }
];

const CompanyCard = ({ company }) => (
  <div className="bg-white shadow-lg border border-slate-200 rounded-2xl py-2 px-1 flex flex-col items-center justify-center text-center">
    <img src={company.logo} alt={company.name} className="w-12 h-12 mb-2" />
    <h2 className="font-semibold text-lg">{company.name}</h2>
    <div className="flex items-center space-x-1">
      <span className="text-yellow-400">★</span>
      <span>{company.rating}</span>
    </div>
    <div className="text-sm text-gray-500 mt-1 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2.25c4.97 0 9 4.03 9 9 0 6.63-9 15-9 15S3 17.88 3 11.25c0-4.97 4.03-9 9-9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
      {company.location}
    </div>
    <p className="text-sm text-gray-600">{company.openings} Opening Jobs</p>
  </div>
);



const CompanyList = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(companies.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1); // Ensuring consistent state change
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1); // Ensuring consistent state change
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const currentCompanies = companies.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container flex mx-auto items-center p-4 cursor-pointer">
        <HiOutlineChevronLeft onClick={handlePreviousPage} className="w-10 h-10 mr-5 border rounded-3xl" />

      <div className="grid grid-cols-1 w-full md:grid-cols-5 gap-4">
        {currentCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>

      <HiOutlineChevronRight onClick={handleNextPage} className="w-10 h-10 ml-5 border rounded-3xl" />
    </div>
  );
};

export default CompanyList;

