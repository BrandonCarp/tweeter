import { LeftNav } from "./LeftNav";
import { UserSearchBar } from "./UserSearchBar";
import { Users } from "./Users";

export function UserSearch() {
  return (
  
      <div className="relative mx-auto container ">
        <div className="flex justify-center">
        <LeftNav />
        <div>
        <UserSearchBar />
        <Users />
          </div>
          </div>
      
        
      </div>
    
  );
}
