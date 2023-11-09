'use client';
import styles from '@/styles/menu.module.css';
import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
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
          'z-30 border-y sticky hidden lg:block top-0 z-50 shadow-md bg-white dark:bg-[#191729] bg-opacity-20 backdrop-blur-sm border-none duration-300'
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
      id: 'hero',
      transitionDelay: '150ms',
    },
    {
      href: '/about',
      text: 'About',
      id: 'about',
      transitionDelay: '175ms',
    },
    {
      href: '/my-projects',
      text: 'Projects',
      id: 'featured-projects',
      transitionDelay: '200ms',
    },
    {
      href: '/blog',
      text: 'Blog',
      id: 'blog',
      transitionDelay: '250ms',
    },
    {
      href: '/guestbook',
      text: 'Guestbook',
      id: 'contact',
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
                    <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-green-200 to-white items-baseline">
                      <Image
                        src={'/favicon/favicon.ico'}
                        className="text-theme-light inline-block align-bottom"
                        alt="logo"
                        width={35}
                        height={85}
                      />
                      nupams
                      <span className="text-theme-light pl-3">P</span>
                      ortfolio
                    </div>
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                  {NavLinks.map(({ href, text, id }) => (
                    <Link
                      key={id}
                      href={
                        href === '/blog' ? `/my-projects` : `/#${id}`
                      }
                      className={clsx(
                        'invisible mr-1 text-gray-900  md:visible',
                        href === pathname ||
                          (pathname?.startsWith('/blog') &&
                            href === '/blog')
                          ? 'font-semibold dark:text-theme-light'
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
                    <a
                      // onClick={() => router.push('/#about')}
                      href="/#about"
                      id={link.id}
                      className="ml-4 flex w-auto p-1 pb-4 text-lg sm:p-4 dark:text-white">
                      {link.text}
                    </a>
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
