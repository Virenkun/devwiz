"use client";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mt-8" >{children}</div>;
}
