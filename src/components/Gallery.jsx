function Gallery() {
    let deer = {
       title: "Deer",
       imageUrl: "https://stocksnap.io/photo/deer-nature-YVQMPLACTF",
       description: "This is bambi",
    };

    let antelope = {
        title: "Antelope",
        imageUrl: "https://www.pexels.com/photo/brown-deer-standing-near-green-leafed-plant-1499596/",
        description: "This is an antelope.",
    };
    
    let bighornSheep = {
        title: "Bighorn Sheep",
<<<<<<< HEAD
        imageUrl: "https://www.britannica.com/animal/bighorn-sheep",
        description: "This is a bighorn sheep.",
=======
        imageUrl: "https://example.com/bighorn-sheep-image.jpg",
        description: "This is a bighorn-sheep.",
>>>>>>> c9a7789ee03d28a5a668ed340305e7fe797e7cee
    };

    return (
        <main>
            <section className="deck">
                <div className="card">
                    <h2>{deer.title}</h2>
                    <img src={deer.imageUrl} alt={deer.title} />
                    <p>{deer.description}</p>
                </div>
                <div className="card">
                    <h2>{antelope.title}</h2>
                    <img src={antelope.imageUrl} alt={antelope.title} />
                    <p>{antelope.description}</p>
                </div>
                <div className="card">
                    <h2>{bighornSheep.title}</h2>
                    <img src={bighornSheep.imageUrl} alt={bighornSheep.title} />
                    <p>{bighornSheep.description}</p>
                </div>
            </section>
        </main>
    );
}

export default Gallery;
