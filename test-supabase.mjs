import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = "https://ngwnqnvkseiexvlvxcup.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nd25xbnZrc2VpZXh2bHZ4Y3VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1NDIxMDIsImV4cCI6MjA5MjExODEwMn0.NUl4bewu8eUBXW5WgEmhJEeQGKEi0Lhomy0N34JOmEw";
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false }
});

async function test() {
    const { data, error } = await supabase.from('sessions').insert({ opened_by: '9c2f6d21-f094-4d83-93d3-73d8f85f57bb' }).select();
    console.log("Error:", error);
    console.log("Data:", data);
}
test();
