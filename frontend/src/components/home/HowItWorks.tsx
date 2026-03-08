export default function HowItWorks() {

    const workStyles = [
        {
            icon: "Icon",
            title: "Find Your Courses",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum corporis, officia fugit id"
        },
        {
            icon: "Icon",
            title: "Book A Seat",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum corporis, officia fugit id"
        },
        {
            icon: "Icon",
            title: "Get Certificate",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum corporis, officia fugit id"
        },
    ];

    return <>
        <div className="px-20 py-20">
            <h2 className="text-3xl font-bold">How it <span className="text-blue-800">work</span></h2>
            
            <div className="grid grid-cols-3 gap-20 mt-10">
                {workStyles && workStyles.map((workStyle) => {
                    return <div className="bg-gray-100 py-10 px-5 flex flex-col justify-center rounded shadow-sm ">
                        <p>{workStyle.icon}</p>
                        <h2 className="pt-4 text-xl font-bold">{workStyle.title}</h2>
                        <p className="pt-2 text-gray-600">{workStyle.description}</p>
                    </div>;
                })}
            </div>
        </div>
    </>
}