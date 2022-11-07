import { UserSearchBar } from "./UserSearchBar";
import { UserList } from "./UserList";

export function UserSearch() {
  const userData = ["Dio", "Morty", "rick", "rick flair"];

  return (
    <div className="relative mx-auto  ">
      <div className="flex  display-center justify-center">
        <div>
          <UserSearchBar />
          <UserList userData={userData} />
        </div>
      </div>
    </div>
  );
}
