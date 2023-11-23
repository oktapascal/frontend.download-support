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

  const { data } = await supabase.auth.signUp({
    email,
    password,
  });

  const { error } = await supabase.from("users").insert({ email, name });

  return { message: "OK" };
});
