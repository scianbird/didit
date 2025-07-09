//making a not found page based on the not found page in my week 8/9 assignment

import { LoginButton } from "@/components/LoginButton";
import Link from "next/link";

export default async function Notfound() {
  return (
    <div className="main">
      <h1>You are not logged in</h1>
      <LoginButton />
      <h1>
        Or <Link href="/"> go home</Link>
      </h1>
    </div>
  );
}
