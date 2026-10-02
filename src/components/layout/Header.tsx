"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        {/* DESKTOP HEADER */}
        <div className="hidden lg:flex h-20 w-full px-margin-desktop items-center justify-between">
          <div className="flex items-center gap-space-md">
            <Link href="/" className="font-headline-sm text-headline-sm tracking-widest text-primary uppercase">
              VELORA
            </Link>
          </div>
          <nav className="flex items-center gap-space-lg">
            <Link href="/" className="font-label-uppercase text-label-uppercase uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-200">
              Home
            </Link>
            <Link href="/collections" className="font-label-uppercase text-label-uppercase uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-200">
              Collections
            </Link>
            <Link href="/blog" className="font-label-uppercase text-label-uppercase uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-200">
              Blog
            </Link>
            <Link href="/contact" className="font-label-uppercase text-label-uppercase uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-200">
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-space-md">
            <button aria-label="Search" className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center p-space-xs" type="button">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>
            <Link href="#" aria-label="Account" className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center p-space-xs">
              <span className="material-symbols-outlined text-[20px]">person</span>
            </Link>
            <button aria-label="Cart" className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5 p-space-xs" type="button">
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              <span className="font-label-price text-label-price text-on-surface-variant">[0]</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>

        {/* MOBILE HEADER (Based on Stitch Mobile Editorial Homepage) */}
        <div className="lg:hidden h-16 w-full px-gutter flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <button 
              aria-label="Menu" 
              className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-secondary transition-colors -ml-3" 
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined text-[22px]">menu</span>
            </button>
            <Link href="/" className="font-headline-sm text-headline-sm tracking-wider text-on-surface uppercase ml-1">
              VELORA
            </Link>
          </div>
          <div className="flex items-center gap-space-xs">
            <button aria-label="Search" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-secondary transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>
            <button aria-label="Shopping Bag" className="relative w-11 h-11 flex items-center justify-center text-on-surface hover:text-secondary transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              <span className="absolute top-2.5 right-2 font-label-uppercase text-[9px] text-on-surface">0</span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU DRAWER / OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden flex">
          {/* Overlay background */}
          <div 
            className="absolute inset-0 bg-surface/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          ></div>
          
          {/* Drawer content */}
          <div className="relative w-full max-w-[320px] h-full bg-surface shadow-2xl flex flex-col">
            <div className="h-16 px-gutter flex items-center justify-between border-b border-surface-container-high">
              <span className="font-headline-sm text-headline-sm tracking-wider uppercase text-on-surface">
                VELORA
              </span>
              <button 
                aria-label="Close Menu" 
                className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-secondary transition-colors -mr-3" 
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>
            
            <nav className="flex flex-col px-gutter py-space-xl gap-space-lg overflow-y-auto">
              <Link 
                href="/" 
                className="font-label-uppercase text-label-uppercase uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/collections" 
                className="font-label-uppercase text-label-uppercase uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Collections
              </Link>
              <Link 
                href="/blog" 
                className="font-label-uppercase text-label-uppercase uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="font-label-uppercase text-label-uppercase uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>

            <div className="mt-auto border-t border-surface-container-high p-gutter">
               <Link href="#" className="flex items-center gap-space-sm text-on-surface-variant hover:text-on-surface transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
                  </div>
                  <span className="font-label-uppercase text-label-uppercase uppercase">Client Account</span>
               </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
