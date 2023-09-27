import { db } from "~/db/client";
import { UsersTable } from "~/db/schema";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  console.log("email", email);

  await db.insert(UsersTable).values({ name: "John Doe", email: email });
});
