import React from 'react'

const home = () => {
  return (
    <div><main>
    {/* Hero */}
    <section>
      <div className="max-w-[85rem] mx-auto pt-12 pb-10 px-4 sm:px-6 lg:px-8 md:pt-24">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div>
              <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-blue-500">
                Start your journey with{" "}
                <span className="text-blue-600">TRIP_TAP</span>
              </h1>
              <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                Your Gateway to Seamless Travel Adventures!
              </p>
              {/* Buttons */}
              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Get started
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                  href="#"
                >
                  Contact Us
                </a>
              </div>
              {/* End Buttons */}
            </div>
            {/* End Col */}
            <div className="relative ms-4">
              <img
                className="w-full rounded-md"
                src="https://images.unsplash.com/photo-1683602448213-1786a3434f99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29hJTIwYmVhY2h8ZW58MHwxfDB8fHww"
                alt="Image Description"
              />
              <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Hero */}
    </section>
    <section>
      {/* International Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            International Destinations!
          </h2>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <a
            className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10"
            href="Internationaltourpage.html"
          >
            <div className="aspect-w-16 aspect-h-10">
              <img
                className="w-full object-cover rounded-xl"
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/2327/Warsaw.jpg"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Majestic Poland and Fjords - Summer (Guided Tour)
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              •2N Warsaw •1N Gdansk •1N Sopot-Nynäshamn Ferry •1N Stockholm •1N
              Mora •1N Trondheim •1N Molde •1N Loen •1N Bergen •1N Oslo •1N
              Oslo-Copenhagen Ferry •1N Copenhagen •1N Szczecin •1N Warsaw
            </p>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </a>
          {/* End Card */}
          {/* Card */}
          <a
            className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10"
            href="Internationaltourpage.html"
          >
            <div className="aspect-w-16 aspect-h-10">
              <img
                className="w-full object-cover rounded-xl"
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/734/Paris6449831.jpg"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Charms of Amsterdam &amp; Paris Summer- Guided Tour
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              •2N Amsterdam •3N Paris
            </p>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </a>
          {/* End Card */}
          {/* Card */}
          <a
            className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10"
            href="Internationaltourpage.html"
          >
            <div className="aspect-w-16 aspect-h-10">
              <img
                className="w-full object-cover rounded-xl"
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/2257/oslo.jpg"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Majestic Poland and Fjords End Oslo - Summer (Guided Tour)
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              •2N Warsaw •1N Gdansk •1N Sopot-Nynäshamn Ferry •1N Stockholm •1N
              Mora •1N Trondheim •1N Molde •1N Loen •1N Bergen •2N Oslo
            </p>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </a>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* International End Card Blog */}
    </section>
    <section>
      {/* Indian  Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Explore the Unexplored
          </h2>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <a
            className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10"
            href="domestictourpage.html"
          >
            <div className="aspect-w-16 aspect-h-10">
              <img
                className="w-full object-cover rounded-xl"
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1304/Pine%20clad%20mountains%20of%20Dalhousie.jpg"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Spellbinding Himachal Vacay with Amritsar
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              •2N Dharamshala •2N Dalhousie •1N Amritsar
            </p>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </a>
          {/* End Card */}
          {/* Card */}
          <a
            className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10"
            href="domestictourpage.html"
          >
            <div className="aspect-w-16 aspect-h-10">
              <img
                className="w-full object-cover rounded-xl"
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1208/Captivating%20architecture%20of%20Alagar%20Kovil%20Temple.jpg"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Divine Trip to Rameshwaram &amp; Madurai by bus
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              •1N Madurai •1N Rameshwaram
            </p>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </a>
          {/* End Card */}
          {/* Card */}
          <a
            className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/10"
            href="domestictourpage.html"
          >
            <div className="aspect-w-16 aspect-h-10">
              <img
                className="w-full object-cover rounded-xl"
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/4308/Picturesque%20Houseboat%20on%20Dal%20Lake.jpg"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Unforgettable Kashmir Holiday with Gulmarg Excursion
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              •1N Srinagar •1N Pahalgam •2N Srinagar
            </p>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </a>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* Indian End Card Blog */}
    </section>
    <section>
      {/* gallary  */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Captivating India: Photo Gallery
          </h2>
        </div>
        {/* End Title */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="space-y-2">
              <img
                className="w-full h-auto object-cover"
                src="https://rimgak.mmtcdn.com/holidays/images/activitiesImages/sightseeing/8981/326.jpg?crop=800:420&downsize=800:420"
                alt="Image Description"
              />
              <img
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWF8ZW58MHwxfDB8fHww"
                alt="Image Description"
              />
              <img
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGluZGlhfGVufDB8MXwwfHx8MA%3D%3D"
                alt="Image Description"
              />
            </div>
            <div className="space-y-2">
              <img
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1670597033868-4e96b9b7f214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJpc2hpa2VzaCUyQyUyMGluZGlhfGVufDB8MXwwfHx8MA%3D%3D"
                alt="Image Description"
              />
              <img
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1645456784628-33800a362999?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJpc2hpa2VzaCUyQyUyMGluZGlhfGVufDB8MXwwfHx8MA%3D%3D"
                alt="Image Description"
              />
            </div>
            <div className="space-y-2">
              <img
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1703173342540-fba340054867?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmFyYW5hc2l8ZW58MHwxfDB8fHww"
                alt="Image Description"
              />
              <img
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1520312622401-cac590a0d473?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image Description"
              />
              <img
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1515091943-9d5c0ad475af?q=80&w=1535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image Description"
              />
            </div>
            <div className="space-y-2">
              <img
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1712733900711-d0b929d0d7cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtlZGFybmF0aHxlbnwwfDF8MHx8fDA%3D"
                alt="Image Description"
              />
              <img
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1524314710162-eecbbcc26a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGluZGlhfGVufDB8MXwwfHx8MA%3D%3D"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
        {/* gallary  */}
      </div>
    </section>
  </main>
  </div>
  )
}

export default home