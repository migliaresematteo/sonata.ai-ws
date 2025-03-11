// Import the createClient function using ES module syntax
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
import fetch from 'node-fetch';
import dns from 'dns';

// Set up __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Use the correct Supabase URL based on the project ID
const supabaseUrl = "https://raomxcfjafndljdmgace.supabase.co";
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

console.log('Supabase URL:', supabaseUrl);
// Don't log the full key for security reasons
console.log('Supabase Key available:', !!supabaseAnonKey);

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Test DNS resolution first
const hostname = new URL(supabaseUrl).hostname;
console.log(`Testing DNS resolution for ${hostname}...`);

dns.lookup(hostname, (err, address) => {
  if (err) {
    console.error(`DNS resolution failed: ${err.message}`);
    console.log('Trying to connect anyway...');
  } else {
    console.log(`DNS resolved to: ${address}`);
  }
  
  // Create Supabase client with fetch implementation
  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      fetch: fetch
    }
  });

  // Test connection after DNS check
  testConnection(supabase);
});

async function testConnection(supabase) {
  try {
    console.log('Attempting to connect to Supabase...');
    
    // First try a simple health check
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/`);
      console.log('Health check status:', response.status);
    } catch (healthErr) {
      console.error('Health check failed:', healthErr.message);
    }
    
    // Test the connection by making a simple query
    const { data, error } = await supabase.from('pieces').select('*').limit(1);
    
    if (error) {
      console.error('Error connecting to Supabase:', error);
    } else {
      console.log('Successfully connected to Supabase!');
      console.log('Sample data:', data);
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}