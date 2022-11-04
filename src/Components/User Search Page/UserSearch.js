import { LeftNav } from "./LeftNav";
import { UserSearchBar } from "./UserSearchBar";
import { Users } from "./Users";

export function UserSearch() {
  return (
  
      <div className="relative mx-auto  ">
        <div className="flex  display-center justify-center">
       

         
        <LeftNav />
        <div>
        <UserSearchBar />
        
        <Users />
          </div>
          
      </div>
        
      </div>
    
  );
}
