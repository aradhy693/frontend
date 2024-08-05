import Rating from '@/components/Rating'
import React from 'react'

const page = () => {
    return (
        <div><main>
            {/* Hero */}
            <section>
                {/* Hero */}
                <div className="relative overflow-hidden">
                    <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
                        <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
                            {/* Title */}
                            <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-neutral-200">
                                Your Dream Journey Starts Here
                                <span className="text-blue-600 dark:text-blue-500">Trip_Tap</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 dark:text-neutral-500">
                                Tap into Your Travel Dreams with TripTap!
                            </p>
                            {/* End Title */}
                        </div>
                    </div>
                    <div className="hidden md:block md:absolute md:top-0 md:left-1/2 md:w-1/2 h-full bg-[url('https://www.trafalgar.com/media/r04jwb3d/statue-prince-eugen-savoy-hofburg-palace-vienna-austria-3.jpg?crop=0%2C0.08666666666666667%2C0%2C0.06958333333333333&cropmode=percentage&format=webp&mode=crop&width=720&height=405&quality=80')] bg-no-repeat bg-center bg-cover"></div>
                    {/* End Col */}
                </div>
                {/* End Hero */}
            </section>

            <section>
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    {/* Title */}
                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                            Explore Beyond Borders
                        </h2>
                    </div>
                    {/* End Title */}
                    {/* holiday list 1 */}
                    <div className="property-card bg-black text-white rounded-sm p-4 mx-auto mb-5 shadow-md hover:bg-gray-700 transition-colors duration-300 flex">
                        <div className="w-1/3 pr-4">
                            <img
                                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/2327/Warsaw.jpg"
                                className="rounded-sm"
                            />
                        </div>
                        <div className="w-2/3 pl-4">
                            <div className="flex justify-between mb-2">
                                <div className="flex items-center" title="4.5">
                                    <Rating />
                                </div>
                                <div className="flex items-center">
                                    <i className="far fa-heart" />
                                    <div className="ml-2">3 interested</div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                                    Majestic Poland and Fjords - Summer (Guided Tour)
                                </div>
                                <div className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                    •2N Warsaw •1N Gdansk •1N Sopot-Nynäshamn Ferry •1N Stockholm •1N
                                    Mora •1N Trondheim •1N Molde •1N Loen •1N Bergen •1N Oslo •1N
                                    Oslo-Copenhagen Ferry •1N Copenhagen •1N Szczecin •1N Warsaw
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-xl font-semibold">₹2,89,762</div>
                                    <div className="text-sm text-gray-400">per person</div>
                                </div>
                                <div>
                                    <a
                                        href="property_detail.html"
                                        className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        More Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End holiday list 1 */}
                    {/* holiday list 2 */}
                    <div className="property-card bg-black text-white rounded-sm p-4 mx-auto mb-5 shadow-md hover:bg-gray-700 transition-colors duration-300 flex">
                        <div className="w-1/3 pr-4">
                            <img
                                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/734/Paris6449831.jpg"
                                className="rounded-sm"
                            />
                        </div>
                        <div className="w-2/3 pl-4">
                            <div className="flex justify-between mb-2">
                                <div className="flex items-center" title="4.5">
                                    <Rating />
                                </div>
                                <div className="flex items-center">
                                    <i className="far fa-heart" />
                                    <div className="ml-2">3 interested</div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                                    Charms of Amsterdam &amp; Paris Summer- Guided Tour
                                </div>
                                <div className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                    •2N Amsterdam •3N Paris
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-xl font-semibold">₹1,34,357</div>
                                    <div className="text-sm text-gray-400">per person</div>
                                </div>
                                <div>
                                    <a
                                        href="property_detail.html"
                                        className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        More Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End holiday list 2 */}
                    {/* holiday list 3 */}
                    <div className="property-card bg-black text-white rounded-sm p-4 mx-auto mb-5 shadow-md hover:bg-gray-700 transition-colors duration-300 flex">
                        <div className="w-1/3 pr-4">
                            <img
                                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/2257/oslo.jpg"
                                className="rounded-sm"
                            />
                        </div>
                        <div className="w-2/3 pl-4">
                            <div className="flex justify-between mb-2">
                                <div className="flex items-center" title="4.5">
                                    <Rating />
                                </div>
                                <div className="flex items-center">
                                    <i className="far fa-heart" />
                                    <div className="ml-2">3 interested</div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                                    Majestic Poland and Fjords End Oslo - Summer (Guided Tour)
                                </div>
                                <div className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                    •2N Warsaw •1N Gdansk •1N Sopot-Nynäshamn Ferry •1N Stockholm •1N
                                    Mora •1N Trondheim •1N Molde •1N Loen •1N Bergen •2N Oslo
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-xl font-semibold">₹2,39,132</div>
                                    <div className="text-sm text-gray-400">per person</div>
                                </div>
                                <div>
                                    <a
                                        href="property_detail.html"
                                        className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        More Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End holiday list 3 */}
                </div>
            </section>
        </main>
        </div>
    )
}

export default page