import * as React from "react";

type LandingTextProps = {
  className?: string;
  imageUrl?: string;
};

export default function LandingText({ className, imageUrl }: LandingTextProps) {
  return (
    <div
      className={`w-full h-full pt-32 flex-col flex items-center justify-start ${className}`}
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundBlendMode: 'overlay', backgroundPositionY: "bottom" }}
    >
      <div className="text-5xl font-bold">Welcome to Rush Booking</div>
      <div></div>
    </div>
  );
}
