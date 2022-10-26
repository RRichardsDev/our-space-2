import { MenuItem } from './MenuItem'
// import { connectToMongo } from "../../database/mongo.jsx";
export function RightSide() {
  // connectToMongo();
  return (
    <ul className="flex flex-col lg:flex-row list-none">
      <MenuItem name="Browse" href="browse" />
      <MenuItem name="Lessons" href="lessons" />
      <MenuItem name="Rhodri" href="account" /> 
    </ul>

  )
}