import { getSession, signIn, signOut, useSession } from "next-auth/react";
import GlassyButton from "../components/GlassyButton";

const login = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <p>Welcome, {session.user?.name}!</p>
          <p>{}</p>
          <GlassyButton name="Sign out" action={signOut} />
        </>
      ) : (
        <>
          <p>You are not signed in</p>
          <GlassyButton name="Sign In" action={signIn} />
        </>
      )}
    </div>
  );
};

export default login;
