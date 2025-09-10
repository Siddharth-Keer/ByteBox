import { createClient } from "@supabase/supabase-js";
const supabaseURI = 'https://kiqazrdfxnsitzmbydge.supabase.co'
const supabaseKEY = `${process.env.SUPABASE_ANON_KEY}`

const supabase = createClient(supabaseURI, supabaseKEY)

export default supabase