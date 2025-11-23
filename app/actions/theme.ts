"use server";
import { cookies } from "next/headers";
import { THEME_COOKIE } from "@/constants/cookies";

export async function getThemeCookie() {
  const cookieStore = await cookies();
  return cookieStore.get(THEME_COOKIE)?.value;
}
