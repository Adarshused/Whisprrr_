import React, { useState, useRef, useEffect } from 'react';


export default function Dropdown({ options, value, onChange, placeholder = 'Select an option' }) {
  const [Developeropen, setDeveloperOpen] = useState(false);
  const [Featureopen,setFeatureOpen]=useState(false);
  const [Contactopne,setContactOpen]=useState(false);
  const containerRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setDeveloperOpen(false);
        setFeatureOpen(false);
        setContactOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = () => {
    const found = options.find(opt => opt.value === value);
    return found ? found.label : placeholder;
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left w-89">
      {/* Trigger Button */}
      {/* <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span>{selectedLabel()}</span>
       
      </button> */}
        <div className="flex gap-x-2 px-5  text-sm font-medium">
      <div className="flex ">
                <label htmlFor="" className="gap-x-2 ">Developer</label>
                <svg
          className="cursor-pointer w-5 h-5 mt-1 ml-1 text-extrabold text-black-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 35  35"
          stroke="currentColor"
          onClick={()=>{setDeveloperOpen(prev=>!prev)
            if(Featureopen) setFeatureOpen(false)
            if(Contactopne) setContactOpen(false)
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
           </svg>
                </div>
    <div className="flex ml-4 ">
                <label htmlFor="" className="">Features</label>
                <svg
          className="cursor-pointer w-5 h-5 mt-1 ml-1 text-extrabold text-black-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 35  35"
          stroke="currentColor"
          onClick={()=>{
         setFeatureOpen(prev=>!prev) 
         if(Developeropen) setDeveloperOpen(false);
         if(Contactopne) setContactOpen(false);
        }
           
         }
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
           </svg>
                </div>
                <div className="flex ml-4">
                <label htmlFor="" className="cursor-pointer">Contact us</label>
                <svg
          className="cursor-pointer w-5 h-5 mt-1 ml-1 text-extrabold text-black-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 35  35"
          stroke="currentColor"
          onClick={()=>{setContactOpen(prev=>!prev)
            if(Featureopen) setFeatureOpen(false)
            if(Developeropen) setDeveloperOpen(false)
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
           </svg>
                </div> 
     
        </div>
      {/* Dropdown List */}
      {Developeropen && (
          <ul className='absolute overflow-auto flex flex-col mt-4 rounded-lg border border-gray-200 shadow-[0_0_8px_rgba(82,53,232,0.4)] bg-white w-40 h-50 z-10'>
            <h2 className='text-gray-300 px-5 py-3 font-extrabold text-md' style={{fontFamily:'Times New Roman, Serif'}}>Developer</h2>
          
            <div className=' cursor-pointer w-full flex px-3 py-2 gap-x-3' style={{fontFamily:'Times New Roman, Serif'}}>
              <img className='mb-1' src="/assests/features_1.svg" alt="" />
              <h2 className='font-extrabold'>About</h2>
            </div>
            <div className=' cursor-pointer w-full flex px-3 py-2 gap-x-3' style={{fontFamily:'Times New Roman, Serif'}}>
              <img className='mb-1' src="/assests/feature_3.svg" alt="" />
              <h2 className='font-extrabold'>FAQs</h2>
            </div>
            <div className='cursor-pointer w-full flex px-3 py-2 gap-x-3' style={{fontFamily:'Times New Roman, Serif'}}>
              <img className='mb-1' src="/assests/feature_4.svg" alt="" />
              <h2 className='font-extrabold'>Support</h2>
            </div>
           
            
         </ul>
       
      )}
      

      {Featureopen && (
          <ul className='ml-32 absolute overflow-auto flex flex-col mt-4 rounded-lg border border-gray-200 shadow-[0_0_8px_rgba(82,53,232,0.4)] bg-white w-40 h-50 z-10'>
            <h2 className='text-gray-300 px-5 py-3 font-extrabold text-md' style={{fontFamily:'Times New Roman, Serif'}}>Features</h2>
          
            <div className=' cursor-pointer w-full flex px-3 py-2 gap-x-3' style={{fontFamily:'Times New Roman, Serif'}}>
              <img className='mb-1' src="/assests/feature_2.svg" alt="" />
              <h2 className='font-extrabold'>Blog</h2>
            </div>
            <div className=' cursor-pointer w-full flex px-3 py-2 gap-x-3' style={{fontFamily:'Times New Roman, Serif'}}>
              <img className='mb-1' src="/assests/dashboard_icon.svg" alt="" />
              <h2 className='font-extrabold'>Dashboard</h2>
            </div>
            
           
            
         </ul>
       
      )}
      {Contactopne && (
          <ul className='ml-58 absolute overflow-auto flex flex-col mt-4 rounded-lg border border-gray-200 shadow-[0_0_8px_rgba(82,53,232,0.4)] bg-white w-40 h-50 z-10'>
            <h2 className='text-gray-300 px-5 py-3 font-extrabold text-md' style={{fontFamily:'Times New Roman, Serif'}}>Contact me</h2>
          
            <div className=' cursor-pointer w-full flex px-3 py-2 gap-x-3' style={{fontFamily:'Times New Roman, Serif'}}>
              <img className='mb-1' src="/assests/mail_icon_up.svg" alt="" />
              <h2 className='font-extrabold'>Mail</h2>
            </div>
            <div className=' cursor-pointer w-full flex px-3 py-2 gap-x-3' style={{fontFamily:'Times New Roman, Serif'}}>
              <img className='mb-1 relative' src="/assests/linkedin_icon.svg" alt="" />
              <img className='absolute mt-[3px] ml-[2px]' src="/assests/linkedIn_circle.svg" alt="" />
              <h2 className='font-extrabold'>LinkedIn</h2>
            </div>
            
           
            
         </ul>
       
      )}
    </div>
  );
}

/**
 * Example usage:
 *
 * import Dropdown from './Dropdown';
 *
 * function App() {
 *   const [fruit, setFruit] = useState(null);
 *   const options = [
 *     { label: 'Apple', value: 'apple' },
 *     { label: 'Banana', value: 'banana' },
 *     { label: 'Cherry', value: 'cherry' }
 *   ];
 *
 *   return (
 *     <div className="p-8">
 *       <Dropdown
 *         options={options}
 *         value={fruit}
 *         onChange={setFruit}
 *         placeholder="Choose a fruit"
 *       />
 *       {fruit && <p className="mt-4">Selected: {fruit}</p>}
 *     </div>
 *   );
 * }
 */
