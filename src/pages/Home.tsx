import Button from '@mui/material/Button';
import HeroImage from '../HeroImage.jpg';
import { HomeBody } from '../components/HomeBody';

export function Home() {
  const handleClick = () => {
    console.log('click');
  }
  return (
    <>
     <img className='-mt-16 hero-image' src={HeroImage} alt="Hero image" />
      <HomeBody/>
      <p><code>Some Stuff</code></p>
     <Button variant='contained' onClick={handleClick}>Click Me</Button>
    </>
  );
}
