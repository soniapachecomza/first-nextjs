"use client";
import Link from "next/link";

export default function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li
            key={user.id}
            className="bg-slate-600 mb-2 p-4 rounded-md flex justify-between"
            //onClick={() => alert(user.id)}
          >
            <div>
              <h5 className="font-bold">
                {user.id}) {user.first_name} {user.last_name}
              </h5>
              <p className="text-slate-400 font-semibold">
                email: {user.email}
              </p>
            </div>
            <img src={user.avatar} className="rounded-full w-24" />
          </li>
        </Link>
      ))}
    </ul>
  );
}
