import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import SignOutButton from "./_components/sign-out-button";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }

  if (!session.user.clinic) {
    redirect("/clinic-form");
  }

  return (
    <div className="p-6">
      <h1>Dashboard</h1>
      <h1>Username: {session?.user?.name}</h1>
      <h1>E-mail: {session?.user?.email}</h1>
      <SignOutButton />
    </div>
  );
};

export default DashboardPage;
