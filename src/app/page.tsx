import Link from "next/link";
import { redirect } from "next/navigation";
import SiteNavbar from "./components/nav";
import SiteHome from "./components/home";
import SiteFeatures from "./components/features";
import SiteFeaturesinDetail from "./components/sitefeatures";
import Footer from "./components/footer";




export default async function RootPage() {
 

  return (<>
    <SiteNavbar/>
    <SiteHome/>
    <SiteFeatures/>
    <SiteFeaturesinDetail/>
    <Footer/>
    {/* <div className="mt-40 flex flex-col items-center justify-center gap-3">
      
      {
        !user ? <>
          <Link className={cn(buttonVariants({ variant: "default", size: "lg" }))} href={"/register"}>
            Register
          </Link>
          <Link className={cn(buttonVariants({ variant: "default", size: "lg" }))} href={"/login"}>
            Login
          </Link>
        </>
          : ""}
    </div> */}
    </>
  )
}