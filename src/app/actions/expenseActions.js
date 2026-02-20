"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";

// Add Expense
export async function addExpenseAction(formData) {
  const title = formData.get("title");
  const amount = parseFloat(formData.get("amount"));

  if (!title || isNaN(amount)) return;

  const { error } = await supabase
    .from("expenses")
    .insert([{ title, amount }]);

  if (error) {
    console.error("Insert Error:", error.message);
    return;
  }

  revalidatePath("/tracker");
}

// Get Expenses
export async function getExpenses() {
  const { data, error } = await supabase
    .from("expenses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Fetch Error:", error.message);
    return [];
  }

  return data;
}