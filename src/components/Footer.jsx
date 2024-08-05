import React from 'react'

const Footer = () => {
  return (
    <div><footer className="mt-auto bg-gray-900 w-full dark:bg-neutral-950">
    <div className="mt-auto w-full max-w-7xl py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="col-span-full lg:col-span-1">
          <a
            className="flex-none text-xl font-semibold text-white"
            href="index.html"
            aria-label="Brand"
          >
            TRIP_TAP
          </a>
        </div>
        {/* End Col */}
        <div className="col-span-1">
          <h4 className="font-semibold text-gray-100">Product</h4>
          <div className="mt-3 space-y-3">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="domestictourpage.html"
              >
                Tour Packages
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="domestictourpage.html"
              >
                Group Tours
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="Internationaltourpage.html"
              >
                Adventure and Outdoor Activities
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="Internationaltourpage.html"
              >
                Cultural and Historical Tours
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="domestictourpage.html"
              >
                Luxury Travel Experiences
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="domestictourpage.html"
              >
                Cruise Packages
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="Internationaltourpage.html"
              >
                Educational and Ecotourism Tours
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="domestictourpage.html"
              >
                Flight and Accommodation Booking
              </a>
            </p>
          </div>
        </div>
        {/* End Col */}
        <div className="col-span-1">
          <h4 className="font-semibold text-gray-100">Company</h4>
          <div className="mt-3 space-y-3">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="Dashboard.html"
              >
                About us
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="Dashboard.html"
              >
                Blog
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                href="Dashboard.html"
              >
                Careers
              </a>
            </p>
          </div>
        </div>
        {/* End Col */}
        <div className="col-span-full lg:col-span-1 ">
          <p className="text-sm text-gray-400 dark:text-neutral-400">
            © 2024 TRIP_TAP pvt limited. All rights reserved.
          </p>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  </footer>
  </div>
  )
}

export default Footer