import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import { content } from './content';

const Auth = lazy(() => import('./Components/Auth/Auth'));

function App() {
  const [lang, setLang] = useState('EN');
  const [theme, setTheme] = useState('light');

  const t = content[lang];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const PageLoader = () => (
    <div className="min-h-[60vh] flex items-center justify-center bg-main text-muted font-bold text-sm uppercase tracking-wider animate-pulse">
      Loading Page...
    </div>
  );

  return (
    <div className="min-h-screen bg-main text-main font-sans flex flex-col transition-colors duration-200 selection:bg-primary/20">
      <Header lang={lang} setLang={setLang} t={t} theme={theme} setTheme={setTheme} />

      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home t={t} lang={lang} setLang={setLang} theme={theme} />} />
            <Route path="/login" element={<Auth t={t} lang={lang} />} />
          </Routes>
        </Suspense>
      </main>

      <Footer t={t} />
    </div>
  );
}

export default App;
