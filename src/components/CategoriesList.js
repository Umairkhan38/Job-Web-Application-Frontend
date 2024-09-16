import React from 'react'

function CategoriesList({isCategoryVisible,prevSlide,currentIndex,currentItems,nextSlide,itemsPerPage,jobCategories}) {
  return (
    <div className="category h-[50vh]">
    {isCategoryVisible && (
      <>
      <h2 className="text-3xl font-bold mt-4 text-[#05264e]">Browse By Category</h2>
      <p className="font-medium text-[#526489] mt-2">Find the job that’s perfect for you. about 800+ new jobs everyday</p>
   
   
   <div className="slider mt-8 w-full">
<div className="flex flex-col items-center w-full max-w-4xl mx-auto">
  <div className="flex items-center justify-between w-full">
    {/* Previous Button */}
    <button
      onClick={prevSlide}
      disabled={currentIndex === 0}
      className={`rounded-full p-2 mr-5 bg-blue-100 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      ⬅️
    </button>

    {/* Job Category Cards */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {currentItems.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
        >
          <span className="text-4xl">{item.icon}</span>
          <h3 className="mt-2 font-semibold text-lg">{item.heading}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>
      ))}
    </div>

    {/* Next Button */}
    <button
      onClick={nextSlide}
      disabled={currentIndex + itemsPerPage >= jobCategories.length}
      className={`rounded-full p-2 bg-blue-100 ml-5 ${currentIndex + itemsPerPage >= jobCategories.length ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      ➡️
    </button>
  </div>
</div>
   </div>
   </>
    )}


    </div>
  )
}

export default CategoriesList

