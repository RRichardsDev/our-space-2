import Button from '@mui/material/Button';
import { useEffect } from 'react';
import HeroImage from '../HeroImage.jpg';
import { HomeBody } from '../components/HomeBody';
// import { HevcOutlined } from '@mui/icons-material';
import { homepageAnimations } from '../animations/animationObjs/homepageAnimations';

export function Home() {
  const handleClick = () => {
    console.log('click');
  }
  const handleScroll =  () =>{
    if(window.scrollY < window.innerHeight*0.15){
     homepageAnimations.reachedTheTop();
    }
    if(window.scrollY > window.innerHeight*0.15){
     homepageAnimations.leftTheTop();

    }
  };
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, [])

  return (
    <>
    <div className='absolute'>
      <a
        id='homePageHeroText'
        // className='font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-white text-xl heroText z-20 top-0'
        className='fixed top-3 left-20 font-bold leading-relaxed whitespace-nowrap uppercase text-white text-xl heroText heroTextToLarge z-20'
        href='#home'
        
      >
        {'OURSPACE'}
        <p id='subHeroText'className='absolute leading-relaxed left-20 -mt-16 -ml-10 whitespace-nowrap text-white text-xl subHeroText fadeIn'>Where the learning beigns</p>
      </a>
     
    </div>
     <img id='heroImage' className='-mt-16 hero-image' src={HeroImage} alt="Hero image" />
      <HomeBody/>
      <p><code>Some Stuff</code></p>
     <Button variant='contained' onClick={handleClick}>Click Me</Button>
    </>
  );
}
