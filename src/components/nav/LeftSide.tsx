import {useState} from 'react';

export function LeftSide() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // console.log(process.env)


  return (
    <>
      <div id='left-side-div' className='w-full relative flex justify-between lg:w-auto px-10'>
        <a
          id='heroText'
          className='font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white text-xl heroTextSmall hidden'
          href='#home'
          
        >
          {'OURSPACE'}
        </a>
        <button
          className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
          type='button'
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i className='fas fa-bars'></i>
        </button>
      </div>
    </>
  )
}