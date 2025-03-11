import { supabase } from './supabase/supabase';

async function testConnection() {
  try {
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

testConnection();

