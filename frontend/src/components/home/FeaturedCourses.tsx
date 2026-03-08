export default function FeaturedCourses() {

    const courses = [
        {
            "image_url": "",
            "title": "Mobile App Development",
            "price": 500
        },
        {
            "image_url": "",
            "title": "Mobile App Development",
            "price": 500
        },
        {
            "image_url": "",
            "title": "Mobile App Development",
            "price": 500
        },
        {
            "image_url": "",
            "title": "Mobile App Development",
            "price": 500
        },
        {
            "image_url": "",
            "title": "Mobile App Development",
            "price": 500
        },
        {
            "image_url": "",
            "title": "Mobile App Development",
            "price": 500
        },
        {
            "image_url": "",
            "title": "Mobile App Development",
            "price": 500
        },
        {
            "image_url": "",
            "title": "Mobile App Development",
            "price": 500
        },
    ];


    return <>
        <div className="px-20">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Many Types of <span className="text-blue-800">Courses</span></h2>

                <div className="flex gap-5">
                    <span>Left</span>
                    <span>Right</span>
                </div>
            </div>

            <div className="py-10 grid grid-cols-4">
                {courses && courses.map((course) => {
                    return <div className=" bg-white p-3 rounded-md shadow-lg cursor-pointer">
                        <img className="w-full rounded-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kk8pfaxcfCiHYKtzzyi45Wfon2SYDI0dPw&s" alt="Course Image" />
                        <div className="pt-2">
                            <h5 className="font-semibold">Mobile UI/UX Interface Design</h5>
                            <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center">
                                    <p>4.1 </p>
                                    <div className="flex items-center space-x-1">
                                        <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                                        <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                                        <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                                        <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                                        <svg className="w-5 h-5 text-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                                    </div>
                                </div>
                                <p className="font-bold text-blue-800">$500</p>
                            </div>
                        </div>
                    </div>
                })}
                
            </div>

            <div className="flex items-center justify-center pt-10 pb-40">
                <button className="py-2 px-4 bg-blue-800 text-white rounded cursor-pointer shadow-md">Other Courses</button>
            </div>
        </div>
    </>   
}