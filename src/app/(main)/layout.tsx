import { validateRequest } from "@/src/auth";
import { redirect } from "next/navigation";

import SessionProvider from "./SessionProvider";
import NavBar from "./NavBar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/login");

  return (
    <SessionProvider value={session}>
      <div className="flex min-h-screen flex-col">
        <NavBar />

        <div className="mx-auto max-w-7xl p-5">{children}</div>
      </div>
    </SessionProvider>
  );
}
