import { Users } from "./Users";

export function UserList({ userData }) {
  return (
    <>
      {userData.map((userData) => (
        <Users key={userData} name={userData} />
      ))}
    </>
  );
}
