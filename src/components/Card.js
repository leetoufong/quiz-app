import { useEffect, useState } from 'react';

const Card = (props) => {
    const { currentCard } = props;
    const [imageLoaded, setImageLoaded] = useState(false);
    
    // const [dynamicImageUrl, setDynamicImageUrl] = useState(undefined);
    // const API_KEY = `af0b6da95dbece1212903b88c22d1a50`;
    // const END_POINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&per_page=20&format=json&nojsoncallback=1&api_key=${API_KEY}&format=json&tags=`;

    // useEffect(() => {
    //     if (currentCard && currentCard.dynamicImage) {
    //         fetch(`${END_POINT}${currentCard.question}`)
    //             .then((res) => {
    //                 return res.json();
    //             })
    //             .then((data) => {
    //                 const targetPhoto = data.photos.photo[Math.floor(Math.random() * data.photos.photo.length)];
    //                 // https://live.staticflickr.com/{server-id}/{id}_{secret}.jpg
    //                 const imgUrl = `https://live.staticflickr.com/${targetPhoto.server}/${targetPhoto.id}_${targetPhoto.secret}.jpg`;
                    
    //                 setDynamicImageUrl(imgUrl ? imgUrl : undefined);
    //             })
    //     }
    // }, [currentCard]);

    return (
        <div className="card mt-8 h-full w-full flex flex-col items-center">
            <h2 className={`${currentCard.images.length ? 'text-[4rem] mb-4' : 'text-[8rem]'}`}>{currentCard.question}</h2>
            
            {currentCard.images && (
                <img style={imageLoaded ? {} : {display: 'none'}} onLoad={() => setImageLoaded(true)} className="max-h-[500px]" src={currentCard.images} />
            )}

            {/* {dynamicImageUrl && dynamicImageUrl.length > 0 && (
                <img style={imageLoaded ? {} : {display: 'none'}} onLoad={() => setImageLoaded(true)} className="max-h-[500px]" src={dynamicImageUrl} />
            )} */}

            {currentCard.description.length > 0 && <p className="text-4xl text-gray-500 mt-4">{currentCard.description}</p>}
        </div>
    )
}

export default Card;
