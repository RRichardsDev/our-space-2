import { LeftSide } from './nav/LeftSide';
import { RightSide } from './nav/RightSide';
interface NavBarProps {
  position: string
  color: string
}

export default function NavBar({position, color}: NavBarProps) {
  
  const navClasses = `${position} flex flex-wrap justify-between py-1 z-2 ${color}`;
  // static contextType = ThemeContext;

  return (
    <>
      {/* <nav className="relative flex flex-wrap justify-between py-3 bg-gray-900"> */}
      <nav className={navClasses}>
        <LeftSide />
        <RightSide />
      </nav>
    </>
  );
}