import { useEffect, useState } from 'react';

type Theme = 'aurora' | 'solar';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'aurora');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const next = theme === 'aurora' ? 'solar' : 'aurora';

  return (
    <button
      className="btn btn-outline-light tw-rounded-md tw-shadow-elev-1 tw-border tw-border-primary"
      onClick={() => setTheme(next)}
      aria-label="Toggle theme"
    >
      Switch to {next === 'aurora' ? 'Aurora Indigo' : 'Solar Coral'}
    </button>
  );
}
