async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

export default async function UserPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="bg-yellow-300 p-10 rounded-md">
      <img src={user.avatar} className="m-auto my-8" />
      <h3 className="font-bold text-3xl">
        {user.id})  {user.first_name} {user.last_name}
      </h3>
      <p className="text-black">email: {user.email}</p>
    </div>
  );
}
