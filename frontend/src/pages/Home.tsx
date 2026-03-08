import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import CourseCategories from "../components/home/CourseCategories";
import FeaturedCourses from "../components/home/FeaturedCourses";
import InstructorCTA from "../components/home/InstructorCTA";
import HowItWorks from "../components/home/HowItWorks";
import DownloadApp from "../components/home/DownloadApp";

export default function Home() {
    return <>
        <Layout>
            <HeroSection />
            <CourseCategories />
            <FeaturedCourses />
            <InstructorCTA />
            <HowItWorks />
            <DownloadApp />
        </Layout>
    </>
}