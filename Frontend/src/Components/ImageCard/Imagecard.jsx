function Imagecard({ caption, Image }) {
    return (
        <>
            <div className="w-full h-auto border border-gray-600 flex flex-col px-8 py-4 bg-black shadow-md">
                <div className="text-white mb-6 text-lg font-semibold">{caption}</div>
                <div className="w-full h-auto overflow-hidden">
                    <img src={Image} alt={caption} className="w-full h-full object-cover" />
                </div>
            </div>
        </>
    );
}

export default Imagecard;
