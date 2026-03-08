export default function CourseCategories() {

    const courseCategories = [
        {
            image_url: "",
            name: "UI/UX Design"
        },
        {
            image_url: "",
            name: "Web Development"
        },
        {
            image_url: "",
            name: "App Development"
        },
    ]

    return <>
    
        <div className="px-20 py-25">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">All <span className="text-blue-800">Courses</span> of Educare</h2>
                <div className="flex items-center gap-5">
                    <input name="courses" type="text" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 hover:border-gray-400" placeholder="Search your Courses" />
                    <span className="text-sm cursor-pointer">Search</span>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-10 my-10">

                {courseCategories && courseCategories.map((category) => {
                    return <div className="flex items-center justify-center bg-gray-100 px-2 py-20">
                            <h2 className="text-lg font-bold">{category.name}</h2>
                        </div>;
                })}
                
            </div>
        </div>
    </>
}