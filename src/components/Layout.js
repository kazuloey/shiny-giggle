import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import HamburgerMenu from './HamburgerMenu';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const [time, setTime] = useState('1:09');

  return (
    <div className={styles.app}>
      {/* SVG Border Frame */}
      <div className={styles.frame}>
        <svg width="100%" height="100%" viewBox="0 0 1278 633" fill="none" preserveAspectRatio="none">
          <defs>
            <mask id="frame-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <rect className={styles.frameMaskBody} x="20" y="20" width="calc(100% - 40px)" height="calc(100% - 40px)" fill="black" rx="12" />
            </mask>
          </defs>
          <rect className={styles.frameBg} x="0" y="0" width="100%" height="100%" mask="url(#frame-mask)" />
          <rect className={styles.frameBorder} x="20" y="20" width="calc(100% - 40px)" height="calc(100% - 40px)" rx="12" />
        </svg>
      </div>

      {/* Top Right Controls */}
      <div className={styles.topRight}>
        <div className={styles.themeToggle}>
          <button
            className={`${styles.themeButton} ${theme === 'light' ? styles.active : ''}`}
            onClick={() => toggleTheme('light')}
            aria-label="Switch to light mode"
          />
          <button
            className={`${styles.themeButton} ${theme === 'dark' ? styles.active : ''}`}
            onClick={() => toggleTheme('dark')}
            aria-label="Switch to dark mode"
          />
        </div>
        <p className={styles.clock}>
          1<span className={styles.clockColon}>:</span>09
        </p>
      </div>

      {/* Hamburger Menu */}
      <HamburgerMenu />

      {/* Main Content */}
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;