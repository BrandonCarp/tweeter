export function Users() {
  let people = ["person1", "person2", "person3", "person4", "person5", "person6", "person7", "person8", "person9", "person10"];
return <div className="flex flex-col justify-center items-center space-y-10">
{people.map(person => <ul>
  <li>{person}</li>
</ul>)}
</div>
}