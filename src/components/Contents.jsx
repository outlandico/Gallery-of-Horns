function Gallery() {

    let deer = {
       title: "Deer",
       imageUrl: "https://example.com/deer-image.jpg",
       description: "This is bambi",
    }

    let antelope = {
        title: "Antelope",
        imageUrl: "https://example.com/antelope-image.jpg", // Antelope image URL
        description: "This is an antelope.",
     };
 
     let bighornSheep = {
        title: "Bighorn Sheep",
        imageUrl: "https://example.com/bighorn-sheep-image.jpg", // Bighorn sheep image URL
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
      Gallery goes here.

      </main>
    )
  }

  export default Gallery;