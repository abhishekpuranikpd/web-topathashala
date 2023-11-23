import Link from "next/link"

export default function SiteFeatures() {
  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto ">
          <div className="mb-10 text-center">
            <h1 className="title-font mb-4 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
              We Provide You Smart & Best Features 
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
              Unlock a world of convenient Institution management tools,
              offering everything from attendance monitoring to exam handling,
              all tailored for easy use in a familiar, smart setting.
            </p>
          </div>
          <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
            {Array.from({ length: 13 }).map((_, index) => (
              <div key={index} className="w-full p-2 sm:w-1/2">
                <div className="flex h-full items-center rounded bg-gray-100 p-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="mr-4 h-6 w-6 shrink-0 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">
                    {
                      [
                        "Attendance Tracking",
                        "Exam Management",
                        "Fee Management",
                        "Class Management",
                        "Course Management",
                        "Inventory Management",
                        "Student Management",
                        "Staff & Super Admin Control",
                        "Transportation Management",
                        "Hostel Management",
                        "Resource Utilization",
                        "Communication Tools",
                        "Analytics & Reports",
                      ][index]
                    }
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Link href={"/register"}>
            {" "}
            <button className="mx-auto mt-16 flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
              Check Out Features In Live
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}
