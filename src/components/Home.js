import {React,useState, useEffect} from 'react'
import { HiOutlineShoppingBag  } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import CompanyList from './Companies';
import LocationList from './JobsByLocations';
import ImageSection from './ImageSection';
import CategoriesList from './CategoriesList';
import { FaArrowUp } from "react-icons/fa";




function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Peach'];
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isCategoryVisible, setCategoryVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;
  const jobCategories = [
    { icon: "📝", heading: "Content Writer", description: "40 Jobs Available" },
    { icon: "💼", heading: "Marketing & Sale", description: "11 Jobs Available" },
    { icon: "🏦", heading: "Finance", description: "11 Jobs Available" },
    { icon: "🧑‍💼", heading: "Human Resource", description: "5 Jobs Available" },
    { icon: "📊", heading: "Market Research", description: "8 Jobs Available" },
    { icon: "💻", heading: "Software", description: "10 Jobs Available" },
    { icon: "🛠️", heading: "Customer Help", description: "10 Jobs Available" },
    { icon: "📈", heading: "Management", description: "9 Jobs Available" },
    { icon: "🔍", heading: "Market Research", description: "8 Jobs Available" },
  ];


  // Handles moving to the next set of items
  const nextSlide = () => {
    if (currentIndex + itemsPerPage < jobCategories.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  // Handles moving to the previous set of items
  const prevSlide = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  // Get the current set of items to display
  const currentItems = jobCategories.slice(currentIndex, currentIndex + itemsPerPage);


    
    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    
        if (value === '') {
          setSuggestions([]);
        } else {
          const filteredSuggestions = items.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
          );
          setSuggestions(filteredSuggestions);
        }
      };

      const toggleDropdown = () => {
        if (!isDropdownVisible) {
            // Show all items on dropdown click
            setSuggestions(items);
          } else {
            // Close the dropdown if it's already open
            setSuggestions([]);
          }
          setDropdownVisible(!isDropdownVisible);
    };

      const handleItemClick = (item) => {
        setSearchTerm(item);
        setSuggestions([]);
        setDropdownVisible(false);
      };

      useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
    
          // Adjust this value to control when the heading becomes visible
          if (scrollPosition > windowHeight * 0.1) {
            setCategoryVisible(true);
          } else {
            setCategoryVisible(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup event listener on unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    

  return (
    <div className='flex h-[100vh] justify-center ' style={{backgroundImage:'url(https://jobbox.archielite.com/themes/jobbox/imgs/page/homepage1/bg-banner.svg)', backgroundRepeat:'no-repeat', backgroundSize:'100%'}}>
        
        <div className="mt-8 container">
            <div className='flex flex-wrap justify-between'>
                <div className="w-[50%] p-25">
                    <div className="heading">
                        <span className='text-5xl inline-block font-bold text-[#05264e]'>The</span> <span className='text-5xl inline-block font-bold text-[#3c65f5] '>Easiest Way</span><span className='text-5xl inline-block font-bold text-[#05264e]'> to Get Your New Job</span>
                    </div>
                    <div className='desc mt-3 w-25'>
                        <p className='text-[#4f5e64] font-medium'>Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>
                    </div>
                    <div className='flex ipBox bg-white	shadow-md p-3 rounded-xl mt-5 m-auto'>
                    <div className="relative w-64">
    <div className="flex items-center border-r border-inherit">
        <HiOutlineShoppingBag className="text-gray-500 text-2xl ml-2" />
        <input
          type="text"
          className="w-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Customer Help"
          onFocus={toggleDropdown}
          onBlur={()=>setDropdownVisible(false)}
          value={searchTerm}
          onChange={handleChange}
        />
       {!isDropdownVisible? <FiChevronDown className="text-gray-500 text-3xl ml-2 pr-2" onClick={toggleDropdown}/>:<FiChevronUp className="text-gray-500 text-3xl ml-2 pr-2" onClick={toggleDropdown} />}
      </div>

      {isDropdownVisible && suggestions.length > 0 && (
        <ul className="absolute w-48 mt-1 bg-white shadow-lg max-h-40 overflow-y-auto rounded-lg">
          {suggestions.map((item, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
                    </div>

                    <div className="relative w-64">
    <div className="flex items-center border-r border-inherit">
        <HiOutlineShoppingBag className="text-gray-500 text-2xl ml-2" />
        <input
          type="text"
          className="w-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Customer Help"
          onFocus={toggleDropdown}
          onBlur={()=>setDropdownVisible(false)}
          value={searchTerm}
          onChange={handleChange}
        />
       {!isDropdownVisible? <FiChevronDown className="text-gray-500 text-3xl ml-2 pr-2" onClick={toggleDropdown}/>:<FiChevronUp className="text-gray-500 text-3xl ml-2 pr-2" onClick={toggleDropdown} />}
      </div>

      {isDropdownVisible && suggestions.length > 0 && (<>
        <ul className="absolute w-48 mt-1 bg-white shadow-lg max-h-40 overflow-y-auto rounded-lg">
          {suggestions.map((item, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        </>
      )}

     {isCategoryVisible&& <button id="scrollToTopButton"
      className="fixed bottom-10  z-index-500 right-10 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><FaArrowUp /> </button>}
                    </div>
        <button type='button' className='bg-[#3C65F4] w-40 text-white rounded-md  px-3 py-2 text-sm font-medium'>Search</button>
                    </div>
                    <p className='text-[#4f5e64] mt-8'><strong>Popular Searches:</strong> Design, Development, Manager, Senior</p>
                </div>
                <div className="w-[45%] container">
                    <div className='banners relative'>
                   <img alt="image" className="w-[360px] h-[280px] " src="https://jobbox.archielite.com/storage/pages/banner1.png" />
                    <img alt="image" className="w-[320px] h-[180px] absolute mt-[-10%] left-[30%]" src="https://jobbox.archielite.com/storage/pages/banner2.png" />
                    <img alt="image" className="h-20  absolute mt-[-45%] left-[45%]" src="	https://jobbox.archielite.com/storage/pages/icon-top-banner.png" />
                    <img alt="image" className="h-30 mt-[10%]" src="https://jobbox.archielite.com/storage/pages/icon-bottom-banner.png" />
                    </div>
                </div>
            </div>


            {/* Categories */}
         <CategoriesList isCategoryVisible={isCategoryVisible} prevSlide={prevSlide} currentIndex={currentIndex} currentItems={currentItems} nextSlide={nextSlide} itemsPerPage={itemsPerPage} jobCategories={jobCategories}/>


            {/* Add Section */}
            <div className='addSection  h-[45vh] relative'>
              <div className='content aboslute justify-between mt-5 flex border overflow-hidden border-slate-200 mx-[15%] p-3 rounded-lg'>
              <img alt="image" className="h-25" src="https://jobbox.archielite.com/storage/pages/bg-left-hiring.png" />
              <div className='content flex items-center gap-x-6'>
                <div className='flex flex-col ml-4'>
                  <p className='text-xl font-bold text-[#4f5e64]'>WE ARE</p>
                  <h2 className='text-3xl font-bold'>HIRING</h2>
                </div>
                <div className='flex flex-col'>
                  <p className='font-medium text-[#4f5e64]'>Let’s Work Together</p>
                  <h2 className='font-medium text-[#4f5e64]'>& Explore Opportunities</h2>
                </div>

              </div>
                <button className="bg-[#3C65F4] w-[10%] h-10 mt-12 text-white rounded-md text-sm font-medium"><CheckCircleIcon className='w-6 inline-block mr-1'/>Apply</button>
              <img alt="image" src="https://jobbox.archielite.com/storage/pages/bg-right-hiring.png" className='ml-10 h-22' />
              </div>
            </div>


            {/* Image Section */}
            <ImageSection />

            {/* Top Recruiters */}
            <div className='container mt-[7%] h-[50vh]'>
                <h2 className='text-center mt-5 text-4xl font-bold'>Top Recruiters</h2>
                <p className='text-center font-medium mt-2 text-[#526489]'>Discover your next career move, freelance gig, or internship</p>

              <CompanyList />

            </div>

            <div className='container mt-[20%] h-[100vh]'>
                <h2 className='text-center mt-5 text-4xl font-bold'>Job By Location</h2>
                <p className='text-center font-medium mt-2 text-[#526489]'>Find your favourite jobs and get the benefits of yourself</p>
              <LocationList />
            </div>

            <div className='conatainer mt-[30%]  relative'>
            <img alt="image" src ="https://jobbox.archielite.com/storage/general/newsletter-background-image.png" className='my-2 mx-auto w-[88%] rounded-2xl'/>
            <h2 className="text-white absolute w-15 p-2 mt-[-20%] ml-[32%] text-3xl font-bold z-index-500">New Things Will Always<br /> Update Regularly</h2>
        <img alt="image" src="https://jobbox.archielite.com/storage/general/newsletter-image-left.png" className='absolute top-[7%] h-[45%] ml-[10%]' />

        <img alt="image" src="https://jobbox.archielite.com/storage/general/newsletter-image-right.png" className='absolute top-[7%] h-[45%] ml-[73%]' />


<div className='w-full max-w-[90%] md:max-w-[610px] rounded-lg p-3 absolute bottom-[20%] left-[5%] md:left-[25%] bg-white'>
  <div className='flex flex-col md:flex-row gap-3 items-center'>
    <img alt="image" src="https://jobbox.archielite.com/themes/jobbox/imgs/template/email.svg" className='mx-2 my-1' />
    <input 
      type="email" 
      className='w-full md:w-[60%] p-2 border-none focus:outline-none' 
      placeholder="Enter Your Email" 
    />
    <button className="bg-[#3C65F4] w-full md:w-[20%] h-10 text-white rounded-md text-sm font-medium ml-auto mt-3 md:mt-0">
      <CheckCircleIcon className='w-6 inline-block mr-1' />Subscribe</button>
  </div>
</div>
        </div>



<footer className="bg-white py-10 w-[90%] m-auto">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
      {/* Left Section */}
      <div className="md:w-1/3">
        <h2 className="text-lg font-semibold">JobBox</h2>
        <p className="text-gray-600 mt-2">
          JobBox is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="/" className="text-blue-600">
            <i className="fab fa-facebook-square text-2xl"></i>
          </a>
          <a href="/" className="text-blue-600">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="/" className="text-blue-600">
            <i className="fab fa-twitter-square text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Links Section */}
      <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Resources */}
        <div>
          <h3 className="text-md font-semibold">Resources</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li><a href="/">About Us</a></li>
            <li><a href="/">Our Team</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-md font-semibold">Community</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li><a href="/">Feature</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Credit</a></li>
            <li><a href="/">FAQ</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold">Quick links</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li><a href="/">iOS</a></li>
            <li><a href="/">Android</a></li>
            <li><a href="/">Microsoft</a></li>
            <li><a href="/">Desktop</a></li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="text-md font-semibold">More</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li><a href="/">Cookie Policy</a></li>
            <li><a href="/">Terms</a></li>
            <li><a href="/">FAQ</a></li>
          </ul>
        </div>

 
      </div>
    </div>

    <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
      <p>&copy; 2024 Archi Elite JSC. All rights reserved.</p>
      <div className="flex space-x-4 items-center mt-4 md:mt-0">
        <div className="flex space-x-2">
          <img src="https://jobbox.archielite.com/vendor/core/core/base/img/flags/us.svg" alt="USA" className="w-5 h-5" />
          <p>English</p>
        </div>
        <div className="flex space-x-2">
          <p>USD</p>
        </div>
      </div>

    </div>
  </div>
</footer>


        </div>
        </div>
  )
}

export default Home