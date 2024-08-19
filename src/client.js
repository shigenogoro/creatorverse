import { createClient } from "@supabase/supabase-js";

const URL = "https://nshnpyyszbxwmnxqlnfx.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zaG5weXlzemJ4d21ueHFsbmZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwODEwNDIsImV4cCI6MjAzOTY1NzA0Mn0.EYgXs6D7kz0EgicoUmF_Ngk7txh-Up0a3aBtRXUFQB0";

export const supabase = createClient(URL, API_KEY);