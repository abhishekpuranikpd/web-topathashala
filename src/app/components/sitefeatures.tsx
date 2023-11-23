const features = [
  {
    name: "Attendance Tracking",
    description: "Keep track of student and staff attendance seamlessly.",
    how: "Utilizes check-in systems or online portals for easy attendance marking.",
    works: "Automatically updates records upon check-in or manual input.",
    which:
      "Suitable for schools and institutions requiring efficient attendance monitoring.",
    problemSolves:
      "Addresses issues related to manual attendance marking, streamlines record-keeping.",
  },
  {
    name: "Exam Management",
    description: "Efficiently manage exam schedules, records, and results.",
    how: "Offers a user-friendly interface to create, schedule, and grade exams.",
    works: "Allows for secure exam creation, scheduling, and result recording.",
    which:
      "Useful for educational institutions needing streamlined exam administration.",
    problemSolves:
      "Addresses manual exam scheduling, grading, and result recording challenges.",
  },
  {
    name: "Fee Management",
    description: "Easily handle fee payments, dues, and generate reports.",
    how: "Provides a platform for fee collection, tracking, and reporting.",
    works:
      "Automates fee calculations, reminders, and generates detailed reports.",
    which:
      "Beneficial for schools seeking organized fee collection and monitoring.",
    problemSolves:
      "Resolves manual fee tracking, collection, and reporting inefficiencies.",
  },
  {
    name: "Class Management",
    description: "Organize and manage academic classes effectively.",
    how: "Allows for class creation, student enrollment, and teacher assignment.",
    works: "Enables easy organization and administration of academic classes.",
    which:
      "Ideal for institutions aiming to structure their academic offerings efficiently.",
    problemSolves:
      "Addresses challenges related to class organization, enrollment, and teacher assignments.",
  },
  {
    name: "Course Management",
    description: "Efficiently manage courses offered by the institution.",
    how: "Provides tools to create, assign instructors, and monitor course progress.",
    works: "Streamlines the creation, assignment, and assessment of courses.",
    which: "Useful for institutions managing diverse course offerings.",
    problemSolves:
      "Resolves issues related to course creation, assignment, and monitoring.",
  },
  {
    name: "Inventory Management",
    description:
      "Track and manage inventory items, quantities, and procurement.",
    how: "Offers tools for inventory tracking, stock level alerts, and ordering.",
    works:
      "Manages inventory efficiently, reducing stockouts and overstocking.",
    which:
      "Beneficial for institutions managing various resources and materials.",
    problemSolves:
      "Addresses challenges related to inventory tracking, ordering, and stock levels.",
  },
  {
    name: "Student Management",
    description:
      "Efficiently manage student records, profiles, and performance.",
    how: "Provides tools for enrollment, grading, and student progress tracking.",
    works:
      "Streamlines student-related administrative tasks and academic monitoring.",
    which:
      "Ideal for institutions handling student records and academic progress.",
    problemSolves:
      "Resolves issues related to student record management and academic tracking.",
  },
  {
    name: "Staff & Super Admin Control",
    description: "Manage staff details and grant super admin privileges.",
    how: "Allows for staff profile management and access control settings.",
    works:
      "Facilitates easy administration and access control for staff members.",
    which:
      "Useful for institutions requiring secure staff management and access.",
    problemSolves:
      "Addresses challenges related to staff profile management and access control.",
  },
  {
    name: "Transportation Management",
    description:
      "Organize bus routes, track usage, and schedule transport services.",
    how: "Manages bus routes, schedules, and usage tracking.",
    works: "Efficiently handles transportation services and usage monitoring.",
    which:
      "Beneficial for institutions providing transport facilities to students.",
    problemSolves:
      "Addresses challenges related to bus route organization and transport scheduling.",
  },
  {
    name: "Hostel Management",
    description:
      "Manage hostel facilities, accommodation, and resident details.",
    how: "Tracks hostel room allocation, resident details, and facility management.",
    works:
      "Efficiently handles hostel-related administrative tasks and resident management.",
    which: "Ideal for institutions providing hostel accommodation to students.",
    problemSolves:
      "Addresses challenges related to hostel facility and resident management.",
  },
  {
    name: "Resource Utilization",
    description:
      "Monitor and record the usage of various resources within the institution.",
    how: "Tracks resource usage, allocation, and availability.",
    works: "Efficiently manages resource usage, minimizing wastage.",
    which: "Beneficial for institutions optimizing resource allocation.",
    problemSolves:
      "Addresses challenges related to resource tracking and optimal utilization.",
  },
  {
    name: "Communication Tools",
    description:
      "Facilitate effective communication between staff, students, and parents.",
    how: "Offers communication platforms like messaging, announcements, and forums.",
    works:
      "Enables seamless communication and collaboration among stakeholders.",
    which: "Useful for institutions fostering better communication channels.",
    problemSolves:
      "Addresses challenges related to effective communication within the institution.",
  },
  {
    name: "Analytics & Reports",
    description:
      "Generate comprehensive reports for analysis and decision-making.",
    how: "Provides tools for data analysis, generating various types of reports.",
    works: "Facilitates data-driven decision-making and performance analysis.",
    which: "Beneficial for institutions seeking insights from data.",
    problemSolves:
      "Addresses challenges related to data analysis and report generation.",
  },
]
export default function SiteFeaturesinDetail() {
  return (
    <>
      <section className="body-font overflow-hidden  text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 flex w-full flex-col text-center">
            <h1 className="title-font mb-2 text-3xl font-medium text-gray-900 sm:text-4xl">
            Benefits and Features
            </h1>
            <p>Actionable Reports to Grow your institute</p>
          </div>
          <div className="-m-4 flex flex-wrap">
      {features.map((feature) => (
        <div className="w-full p-4 sm:w-1/2 md:w-1/2  md:p-10 lg:w-1/3" key={feature.name}>
          <div className="relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-indigo-500 p-6">
            <h1 className="mb-4 border-b border-indigo-400 pb-4 text-2xl leading-none text-gray-900">
              {feature.name}
            </h1>
            <p className="mb-2 flex items-center text-gray-600">
              <span className="mr-2 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              {feature.description}
            </p>
            <p className="mb-2 flex items-center text-gray-600">
                    <span className="mr-2 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="h-3 w-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                   {feature.how}
                  </p>
                  <p className="mb-6 flex items-center text-gray-600">
                    <span className="mr-2 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="h-3 w-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                   {feature.which}
                  </p>
                  <p className="mb-6 flex items-center text-gray-600">
                    <span className="mr-2 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="h-3 w-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                   {feature.problemSolves}
                  </p>
                  <p className="mb-6 flex items-center text-gray-600">
                    <span className="mr-2 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gray-400 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="h-3 w-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                   {feature.works}
                  </p>
                  
                  <p className="mt-3 text-xs text-gray-500">
                 
                  </p>
          </div>
        </div>
      ))}
    </div>
        </div>
      </section>
    </>
  )
}
