//in order to make a "nice" error when you try and vote without being logged in, I created a page that prompts users to log in
//i can used redirect in order to show this page
//by seeing this page the user will be prompted to log in and then go back to the homepage

import { LoginButton } from "@/components/LoginButton";

export default function LogIn() {
  return (
    <>
      <div>
        You are not logged in! <LoginButton />
      </div>
    </>
  );
}
