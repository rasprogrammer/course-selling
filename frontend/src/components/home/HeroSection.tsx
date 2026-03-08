export default function HeroSection() {
    return (
        <>
            <div className="bg-gray-100 px-20 py-25 flex flex-col items-center justify-center text-center">
                <div className="max-w-200">
                    <p className="text-blue-800 font-medium">Start your favourite course</p>
                    <h1 className="text-6xl py-2">Now learning from anywhere, and Build your <span className="text-blue-700 font-bold">bright career.</span></h1>
                    <p className="py-4 text-gray-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus delectus soluta voluptatibus eaque alias itaque at assumenda sint maxime ipsam. Qui culpa pariatur</p>
                    <button type="button" className="font-medium font-bold my-2 px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 cursor-pointer">Start A Course</button>
                </div>
            </div>
        </>
    )
}