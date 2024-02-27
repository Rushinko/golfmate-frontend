import * as React from "react";

type LandingCardProps = {
  className?: string;
};

export default function LandingCard({ className }: LandingCardProps) {
  return (
    <div className={`w-10/12 h-3/4 p-8 justify-start items-center flex-col rounded-xl bg-white backdrop-blur-sm shadow-lg flex ${className}`}>
      <div className="text-2xl font-sans">Welcome to Rush Booking</div>
      <div>Last Name</div>
      <div>Email</div>
    </div>
  );
}
