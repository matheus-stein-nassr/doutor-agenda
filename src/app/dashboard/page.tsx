import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { db } from "@/db";
import { auth } from "@/lib/auth";

import SignOutButton from "./components/sign-out-button";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }

  const clinics = await db.query.usersToClinicsTable.findMany({
    where: (usersToClinicsTable, { eq }) =>
      eq(usersToClinicsTable.userId, session.user.id),
    with: {
      clinic: true,
    },
  });

  if (clinics.length === 0) {
    redirect("/clinic-form");
  }

  return (
    <div className="p-6">
      <h1>Dashboard</h1>
      <h1>Username: {session?.user?.name}</h1>
      <h1>E-mail: {session?.user?.email}</h1>
      <h2>
        Clínica:{" "}
        {clinics.map((clinic, idx) => (
          <span key={clinic.clinicId}>
            {clinic.clinic.name}
            {idx < clinics.length - 1 && ", "}
          </span>
        ))}
      </h2>
      <SignOutButton />
    </div>
  );
};

export default DashboardPage;
