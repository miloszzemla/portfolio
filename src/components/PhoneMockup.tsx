"use client";

interface PhoneMockupProps {
  videoSrc: string;
}

export default function PhoneMockup({ videoSrc }: PhoneMockupProps) {
  return (
    <div
      className="relative w-full bg-black"
      style={{
        aspectRatio: "375 / 812",
        borderRadius: "32px",
        border: "1px solid #d1d1d1",
        overflow: "hidden",
      }}
    >
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
