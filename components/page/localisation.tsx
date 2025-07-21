"use client";

import type React from "react";



export function Localisation() {
 

  return (
    <section>
      <div className=" lg:grid-cols-2 gap-8 mt-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-[600px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.204957467715!2d-3.955565899999999!3d5.3856994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1932dc4dac8ff%3A0xe2556c8bda07665f!2sPHARMACIE%20SAINT%20VIATEUR!5e0!3m2!1sen!2sci!4v1752600000798!5m2!1sen!2sci"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
