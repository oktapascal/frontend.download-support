import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~/types/supabase";

interface SigninRequest {
  email: string;
  password: string;
}

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody<SigninRequest>(event);

  const supabase = await serverSupabaseClient<Database>(event);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error !== null) {
    if (error.message.toUpperCase() === "EMAIL NOT CONFIRMED") {
      throw createError({
        statusCode: error.status,
        statusMessage: "EMAIL_NOT_CONFIRMED",
        message: "Email belum dikonfirmasi",
      });
    }

    if (error.message.toUpperCase() === "INVALID LOGIN CREDENTIALS") {
      throw createError({
        statusCode: error.status,
        statusMessage: "INVALID_LOGIN_CREDENTIALS",
        message: "Email/Password tidak sesuai dengan credentials anda",
      });
    }
  }

  return { status: true };
});
