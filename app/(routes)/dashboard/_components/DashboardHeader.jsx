'use client'
import React, { useState } from 'react';
import { UserButton } from '@clerk/nextjs';
import Image from "next/image";
import { Menu, X } from 'lucide-react';
import {
    LayoutGrid,
    PiggyBank,
    ReceiptText,
    ShieldCheck,
    CircleDollarSign,
    TrendingUp,
    TrendingDownIcon,
  } from "lucide-react";

function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    {
        id: 1,
        name: "Dashboard",
        icon: LayoutGrid,
        path: "/dashboard",
      },
      {
        id: 2,
        name: "Incomes",
        icon: CircleDollarSign,
        path: "/dashboard/incomes",
      },
      {
        id: 2,
        name: "Budgets",
        icon: PiggyBank,
        path: "/dashboard/budgets",
      },
      {
        id: 3,
        name: "Expenses",
        icon: ReceiptText,
        path: "/dashboard/expenses",
      },
  ];

  return (
    <header className="relative bg-white shadow">
      <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
          <Image src={"/chart-donut.svg"} alt="logo" width={40} height={25} />
            <h1 className="text-xl font-bold">FinanSmart</h1>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex md:space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* User Button and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <UserButton afterSignOutUrl="/" />
            <button
              type="button"
              className="p-2 -mr-1 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slider */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-4 py-6 flex flex-col">
          <button
            className="absolute top-4 right-4 p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <nav className="space-y-4 flex-grow">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="cursor-pointer text-gray-600 hover:text-gray-900 flex items-center gap-x-2"
              >
                <item.icon />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
