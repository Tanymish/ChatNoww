import React from 'react';
import { Navbar, Typography, Button, IconButton, MobileNav } from "@material-tailwind/react";
import logo from '../assets/logo.png';
export function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <div className="hidden lg:flex lg:items-center gap-x-3 ml-auto"> {/* Adjusted here */}
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        Pages
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        Account
      </Typography>
    </div>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-3 py-2 bg-teal-100 lg:px-2 lg:py-4 mt-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Typography
            as="a"
            href="#"
            className="cursor-pointer text-4xl font-serif text-purple-600"
          >
            Chat Now
          </Typography>
          <div className="flex flex-wrap">
            <img src={logo} alt="logo" height={20} width={50} className="order-1 md:order-none" />
          </div>
        </div>
        {navList}
        <div className="flex items-center gap-x-1"> {/* Adjusted here */}
          <IconButton
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block ml-4 rounded-full bg-purple-300"
          >
            Sign in
          </Button>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1 justify-center">
          <Button fullWidth variant="gradient" size="sm">
            <span>Sign in</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
