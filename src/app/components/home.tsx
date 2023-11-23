import React from "react"
import Image from "next/image"
import Link from "next/link"


export default function SiteHome() {
  return (
    <>
      <section className="body-font  text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
            <Image
              alt="hero image"
              src={"/tp01.png"}
              className="rounded object-cover object-center"
              width={600}
              height={720}
            />
          </div>
          <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:grow lg:pl-24">
            <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-2xl lg:text-4xl">
              Empowering Education : Simplified Management
            </h1>
            <p className="mb-8 font-semibold leading-relaxed">
              Discover all features designed to streamline Institution
              management, including attendance tracking, exam management, fee
              administration, and more all in a simple, user-friendly interface
            </p>
            <p className="mb-8 items-center font-semibold leading-relaxed"> Student information System (SIS)  |  Learning Management System (LMS) | FINANCE Management</p>
          
            <div className="flex justify-center">
              <Link href={"/register"}>
                {" "}
                <button className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                  Register For Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
