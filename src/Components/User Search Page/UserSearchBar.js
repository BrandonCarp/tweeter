export function UserSearchBar() {
  return (
    <>
      <div>
        <input
          type="search"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          placeholder="Search Users"
        />
        {/* Add button */}
      </div>
    </>
  );
}
