(() => {
  const tentar = () => {
    if (!window.auraSupabase && window.supabase && typeof window.supabase.createClient === 'function' && window.AURABOT_SUPABASE_URL && window.AURABOT_SUPABASE_ANON_KEY) {
      try {
        window.auraSupabase = window.supabase.createClient(window.AURABOT_SUPABASE_URL, window.AURABOT_SUPABASE_ANON_KEY);
      } catch (e) {}
    }
  };
  tentar();
  setTimeout(tentar, 250);
  setTimeout(tentar, 800);
})();
