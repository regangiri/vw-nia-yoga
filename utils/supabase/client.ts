import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient(
    'https://khgytxwwxncwiztwyiwc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDMwMzY5NywiZXhwIjoxOTQ5ODc5Njk3fQ.Cgo8VisRvKX43sjKCQAst7gtGhq_7w87kr1CcNAgxmM'
  );
}
