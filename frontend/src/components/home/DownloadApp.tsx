export default function DownloadApp() {
    return <>
        <div className="px-20 py-20 bg-blue-800 text-white flex items-center justify-between">
            <div>
                <p>Ready to start?</p>
                <h2 className="text-3xl font-semibold mt-2">Download our <span className="text-black">mobile app</span> <br /> for easy to start your course.</h2>
            </div>
            <div className="flex items-center gap-10">
                <button type="button" className="text-lg bg-white text-black px-4 py-2 rounded cursor-pointer shadow-lg">Google Play</button>
                <button type="button" className="text-lg bg-white text-black px-4 py-2 rounded cursor-pointer shadow-lg">App Store</button>
            </div>
        </div>
    </>
}