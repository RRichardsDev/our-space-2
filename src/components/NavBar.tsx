import { LeftSide } from './nav/LeftSide';
import { RightSide } from './nav/RightSide';
interface NavBarProps {
  position: string
}

export default function NavBar({position}: NavBarProps) {
  
  const navClasses = `${position} flex flex-wrap justify-between py-1 z-2`;
  // static contextType = ThemeContext;

  return (
    <>
      {/* <nav className="relative flex flex-wrap justify-between py-3 bg-gray-900"> */}
      <nav id='navBar' className={navClasses}>
        <LeftSide />
        <RightSide />
      </nav>
    </>
  );
}