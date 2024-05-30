import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 text-center md:grid-cols-4 gap-y-10 bg-gray-100 px-32 py-14 border-t text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>AirCover</p>
        <p>Anti-discrimination</p>
        <p>Disability support</p>
        <p>Cancellation options</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOSTING</h5>
        <p>Airbnb your home</p>
        <p>AirCover for Hosts</p>
        <p>Hosting resources</p>
        <p>Community forum</p>
        <p>Hosting responsibly</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">AIRBNB</h5>
        <p>Newsroom</p>
        <p>New features</p>
        <p>Careers</p>
        <p>Investors</p>
        <p>Gift cards</p>
      </div>
    </div>
  );
}

export default Footer;
