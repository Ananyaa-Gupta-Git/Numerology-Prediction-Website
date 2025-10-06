// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ieaccrqktxxsbuziovfi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllYWNjcnFrdHh4c2J1emlvdmZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3NDU4ODEsImV4cCI6MjA3NTMyMTg4MX0.u2U9Y_sQDRDxURYOJfWvCd2aS2LZXKZ0yobZhW2LDHA';

export const supabase = createClient(supabaseUrl, supabaseKey);
