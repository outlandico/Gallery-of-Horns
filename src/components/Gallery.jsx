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
        imageUrl: "https://www.britannica.com/animal/bighorn-sheep",
        description: "This is a bighorn sheep.",
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
