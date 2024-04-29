

const ArtistCard = ({item}) => {
    console.log(item);
    return (
        <div>

            <div className="max-w-md border-4 p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src={item.image} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                        <span className="text-sm dark:text-gray-600">Age- <span>{item.age}</span> Years</span>
                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                            
                            <span className="dark:text-gray-600"> {item.country}</span>
                        </span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtistCard;