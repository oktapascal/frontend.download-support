import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~/types/supabase";

interface SignupRequest {
  email: string;
  name: string;
  password: string;
}

export default defineEventHandler(async (event) => {
  const { email, name, password } = await readBody<SignupRequest>(event);

  const supabase = await serverSupabaseClient<Database>(event);

  const { count } = await supabase.from("users").select("*", { count: "exact" }).eq("email", email);

  if (count !== null && count > 0) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Email yang sama sudah terdaftar",
    });
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  await supabase.from("users").insert({ email, name });

  return { status: true };
});
