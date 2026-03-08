export default function Navbar() {
    return <>
        <div className="bg-gray-100 px-20 py-4 flex items-center justify-between border-b-2 border-blue-800">
            
            <h2 className="text-2xl font-bold text-blue-800">EduCare</h2>
                
            <ul className="flex items-center gap-6 font-medium">
                <li><a href="/home" className="hover:text-blue-800">Home</a></li>
                <li><a href="/courses" className="hover:text-blue-800">All Courses</a></li>
                <li><a href="/pages" className="hover:text-blue-800">Pages</a></li>
                <li><a href="/home" className="hover:text-blue-800">Blog</a></li>
                <li><a href="/home" className="hover:text-blue-800">Contact</a></li>
            </ul>

            <div className="flex gap-4">
                <button type="button" className="px-4 py-2 rounded hover:bg-white hover:text-blue:500 transition cursor-pointer">Sign In</button>
                <button type="button" className="px-4 py-2 bg-blue-800 text-white rounded cursor-pointer hover:bg-blue-900 transition">Sign Up</button>
            </div>
        
        </div>
    </>
}