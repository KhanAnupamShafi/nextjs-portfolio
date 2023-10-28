'use client';
import styles from '@/styles/menu.module.css';
import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MobileMenuBar from './MobileMenuBar';
import Themebutton from './ui/ThemeButton';
const Header = () => {
  let pathname = usePathname() || '/';
  const router = useRouter();

  const [scrolling, setScrolling] = useState(false); // State to track scrolling
  const [className, setClassName] = useState(
    'z-30 border-y sticky top-0 duration-300 lg:text-xl'
  );
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 99) {
        setScrolling(true);
        setClassName(
          'z-30 border-y sticky hidden lg:block top-0 z-50 shadow-md bg-white dark:bg-black bg-opacity-70 backdrop-blur border-none duration-300'
        );
      } else {
        setScrolling(false);
        setClassName(
          'z-30 border-y sticky top-0 duration-300 lg:text-xl'
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavLinks = [
    {
      href: '/',
      text: 'Home',
      id: 'nav-home',
      transitionDelay: '150ms',
    },
    {
      href: '/about',
      text: 'About',
      id: 'nav-about',
      transitionDelay: '175ms',
    },
    {
      href: '/my-projects',
      text: 'Projects',
      id: 'nav-projects',
      transitionDelay: '200ms',
    },
    {
      href: '/blog',
      text: 'Blog',
      id: 'nav-blog',
      transitionDelay: '250ms',
    },
    {
      href: '/guestbook',
      text: 'Guestbook',
      id: 'nav-guestbook',
      transitionDelay: '275ms',
    },
  ];

  function go(href: string) {
    router.push(href, {
      scroll: true,
    });
  }

  return (
    <Disclosure as="nav" className={className}>
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="flex justfiy-between h-16">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <Link href="/">
                    <h1 className="text-2xl font-medium">
                      <span className="text-theme-light">K</span>han
                      <span className="text-theme-light">A</span>nupam
                      <span className="text-theme-light">S</span>hafi
                    </h1>
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                  {/* <Link
                    href="/"
                    prefetch
                    className={`${
                      pathname === '/'
                        ? 'border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                        : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                    }`}>
                    Home
                  </Link> */}
                  {NavLinks.map(({ href, text, id }) => (
                    <Link
                      key={id}
                      href={`${href}`}
                      id={id}
                      className={clsx(
                        'invisible mr-1 text-gray-900  md:visible',
                        href === pathname ||
                          (pathname?.startsWith('/blog') &&
                            href === '/blog')
                          ? 'font-semibold dark:text-indigo-500'
                          : 'dark:text-gray-100'
                      )}>
                      <span className="dark:link-underline link-underline-black py-1">
                        {text}
                      </span>
                    </Link>
                  ))}
                  <Themebutton />
                </div>
              </div>

              <MobileMenuBar open={open} />
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <ul
                className={clsx(
                  styles.menu,
                  'mt-4 sm:hidden',
                  open && styles.menuRendered
                )}>
                {NavLinks.map((link) => (
                  <li
                    key={link.id}
                    className={clsx(
                      'ml-3 cursor-pointer border-b border-gray-300 dark:border-gray-700',
                      pathname === link.href &&
                        'font-semibold dark:text-indigo-500'
                    )}
                    style={{ transitionDelay: link.transitionDelay }}>
                    <div
                      onClick={() => go(link.href)}
                      id={link.id}
                      className="ml-4 flex w-auto p-1 pb-4 text-lg sm:p-4 dark:text-white">
                      {link.text}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
