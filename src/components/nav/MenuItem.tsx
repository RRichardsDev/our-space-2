import { AppContext } from '../../App'
interface MenuItemProps {
  name: string
  href: string
}
export function MenuItem({name, href} : MenuItemProps) {
  const style = AppContext;
  console.log(style)
  const styles = `px-6 py-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-orange-400 bg-gray-900  rounded-full m-2`
  return (
    <li className="nav-item">
      <a
        className={styles}
        href= {href}
      >
      <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">{name}</span>
      </a>
  </li>
  );
}