import React, { useState } from "react";
import {
  Calendar,
  Package,
  FileText,
  HelpCircle,
  Users,
  Menu,
  Heart,
  User,
  ChevronDown,
  X,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useAuth } from "@/context/AuthContext";
const Header = () => {
  const navItems = [
    { name: "Buy used car", href: "/buy-car" },
    { name: "Sell car", href: "/sell-car" },
    { name: "Car finance", href: "/Upcoming/finance" },
    { name: "New cars", href: "/Upcoming/new-cars" },
    { name: "Car services", href: "/Upcoming/car-services" },
  ];
  const menuItems = [
    { label: "My Appointments", icon: Calendar, link: "/appointments" },
    { label: "My Bookings", icon: Package, link: "/bookings" },
    { label: "My Orders", icon: FileText, link: "/Upcoming/orders" },
    { label: "Resources", icon: FileText, link: "/Upcoming/resources" },
    { label: "RC Transfer Status", icon: FileText, link: "/Upcoming/rc-transfer" },
    { label: "Become Our Partner", icon: Users, link: "/Upcoming/partner" },
    { label: "FAQ", icon: HelpCircle, link: "/Upcoming/faq" },
  ];
  // const user = {
  //   id: "1",
  //   avatar_url: "https://github.com/shadcn.png",
  //   email: "giris@gmail.com",
  //   full_name: "John Doe",
  //   phone: "+1234567890",
  //   created_at: new Date().toISOString(),
  // };
  const { user, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Cars24</span>
            <div className="flex items-center">
              <span className="bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-lg">
                CARS
              </span>
              <span className="text-orange-500 font-bold text-lg">24</span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="flex items-center text-sm font-medium text-gray-900 hover:text-blue-600"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
          <Link href="/wishlist">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm text-gray-700 hover:text-blue-600"
            >
              <Heart className="mr-1 h-4 w-4" />
              <span>Wishlist</span>
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-500"
              >
                {user ? (
                  <>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      {user?.fullName ? (
                        <div className="w-full h-full bg-gray-200 text-gray-700 flex items-center justify-center text-sm font-medium uppercase">
                          {user.fullName.charAt(0)}
                        </div>
                      ) : (
                        <User className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                    <span className="ml-2">{user.fullName}</span>
                  </>
                ) : (
                  <>
                    <span>Account</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72">
              {user ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/profile"
                      className="w-full flex items-center gap-2"
                    >
                      Profile Settings
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    className="text-red-600 focus:bg-muted"
                    onClick={signOut}
                  >
                    Sign Out
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                </>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/login"
                      className="w-full px-4 py-3 text-center text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
                    >
                      LOG&nbsp;IN / SIGN&nbsp;UP
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                </>
              )}

              {/* Common menu items */}
              {menuItems.map(({ label, icon: Icon, link }) => (
                <DropdownMenuItem asChild key={label}>
                  <Link href={link} className="flex items-center gap-3 w-full">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    {label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      {/* Mobile Menu */}
{mobileMenuOpen && (
  <div className="fixed inset-0 z-50 lg:hidden">

    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      onClick={() => setMobileMenuOpen(false)}
    />

    {/* Drawer */}
    <div className="absolute right-0 top-0 h-full w-[85%] max-w-[340px] bg-white shadow-2xl flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b">

        <Link href="/" onClick={() => setMobileMenuOpen(false)}>
          <div className="flex items-center">
            <span className="bg-blue-600 text-white font-bold py-2 px-3 rounded-lg text-xl">
              CARS
            </span>
            <span className="text-orange-500 font-bold text-xl ml-1">
              24
            </span>
          </div>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(false)}
          className="rounded-full p-2 hover:bg-gray-100"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

      </div>

      {/* User */}

      <div className="px-6 py-5 border-b">

        {user ? (

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold uppercase">

              {user.fullName.charAt(0)}

            </div>

            <div>

              <h3 className="font-semibold text-gray-900">

                {user.fullName}

              </h3>

              <p className="text-sm text-gray-500">

                {user.email}

              </p>

            </div>

          </div>

        ) : (

          <Link
            href="/login"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button className="w-full bg-orange-500 hover:bg-orange-600">

              Login / Signup

            </Button>
          </Link>

        )}

      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto">

        <div className="py-2">

          {navItems.map((item) => (

            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-6 py-4 text-[16px] font-medium text-gray-800 hover:bg-gray-100"
            >
              {item.name}
            </Link>

          ))}

        </div>

        <div className="border-t my-2" />

        <Link
          href="/wishlist"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-4 px-6 py-4 text-gray-800 hover:bg-gray-100"
        >
          <Heart className="w-5 h-5 text-red-500" />

          <span className="font-medium">Wishlist</span>

        </Link>

        {user && (

          <Link
            href="/profile"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center text-gray-800 gap-4 px-6 py-4 hover:bg-gray-100"
          >
            <User className="w-5 h-5 text-blue-600" />

            <span className="font-medium">Profile</span>

          </Link>

        )}

        <div className="border-t my-2" />

        {menuItems.map(({ label, icon: Icon, link }) => (

          <Link
            key={label}
            href={link}
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-4 px-6 py-4 hover:bg-gray-100"
          >
            <Icon className="w-5 h-5 text-gray-500" />

            <span className="text-gray-700">

              {label}

            </span>

          </Link>

        ))}

      </div>

      {/* Bottom */}

      {user && (

        <div className="border-t p-5">

          <Button
            variant="destructive"
            className="w-full"
            onClick={() => {
              signOut();
              setMobileMenuOpen(false);
            }}
          >
            Logout
          </Button>

        </div>

      )}

    </div>

  </div>
)}
    </header>
  );
};

export default Header;
