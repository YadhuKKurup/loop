import { Tooltip } from "@material-tailwind/react";
import ImageSlider from "../../../CommonComponents/ImageSlider";
import image1 from "../../../Images/SliderImages/clash1.webp";
import image2 from "../../../Images/SliderImages/gta6.jpeg";
import image3 from "../../../Images/SliderImages/hellblade.jpg";
import Image5 from "../../../Images/SliderImages/valhala.png";
import Image6 from "../../../Images/SliderImages/fortnite.jpg";
import Image4 from "../../../Images/SliderImages/hogwarts-legacy.jpg";

import Cart from "../../../CommonComponents/Cart";

const GameList = () => {
  const games = [
    {
      id: 1,
      title: "Clash Of Clans",
      description:
        "Clash of Clans is a 2012 free-to-play mobile strategy video game developed and published by Finnish game developer Supercell.",
      image: image1,
    },
    {
      id: 2,
      title: "GTA VI",
      description: "Rockstar Games",
      image: image2,
    },
    {
      id: 3,
      title: `'Hellblade: Senua's Sacrifice'`,
      description: `'Hellblade: Senua's Sacrifice is a 2017 action-adventure game developed and published by Ninja Theory.'`,
      image: image3,
    },
    {
      id: 4,
      title: 'Fortnite',
      description: `'Fortnite is an online video game and game platform developed by Epic Games and released in 2017.'`,
      image: Image6,
    },
    {
      id: 5,
      title: `'Assasin's Creed Valhala'`,
      description: `'Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft.'`,
      image: Image5,
    },
    {
      id: 6,
      title: `'Hogwarts Legacy'`,
      description: `'Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. For the first time, experience Hogwarts in the 1800s. '`,
      image: Image4,
    },
    // Add data for other items here...
  ];

  const Card = ({ item }: any) => {
    return (
      <div
        className="card bg-base-100 shadow-xl m-auto"
        style={{ width: "380px", height: "460px",marginBottom: "30px" }}
        key={item.id}
      >
        <figure style={{ height: "60%" }}>
          <img
            className=""
            src={item.image}
            alt={item.title}
            style={{ width: "100%", height: "85%" }}
          />
        </figure>
        <div
          className="card-body "
          style={{
            boxShadow:'0px 8px 16px 0px rgba(0, 0, 0, 0.15)',
            height: "40%",
            position: "relative",
            width: "100%",
            margin: "auto",
          }}
        >
          <h2 className="card-title">{item.title}</h2>

          <Tooltip
            className="tooltip tooltip-open tooltip-bottom"
            content={item.description}
          >
            <p>{item.description.slice(0, 40)}</p>
          </Tooltip>

          <div
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >


            <button
              className="btn glass btn-primary mx-1"
              style={{
                color: "white",
                fontWeight: "bold",
                width: "70%",
                borderRadius: "20px",
              }}
            >
              Buy Now
            </button>

            <Tooltip className="tooltip tooltip-open tooltip-top" data-tip="Add To Cart" >
            <button
              className="btn glass btn-primary mx-2"
              style={{
                color: "white",
                fontWeight: "bold",
                width: "20%",
                borderRadius: "20px",
              }}
            >
              <Cart />
            </button>
            </Tooltip>

          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="main-div " style={{ height: "500vh" }}>
    {/* <div className="w-100 mt-3 h-12" style={{border:'1px solid red'}}></div> */}
  <div className="Slider-div m-auto p-3" style={{ width: "90%" }}>
    <ImageSlider />
  </div>

  <div
    className="grid d-grid mt-4 m-auto"
    style={{
      display: "grid", 
      gridTemplateColumns: "repeat(3, 1fr)", 
      gap: "2rem",
      width: "90%",
    }}
  >
    {games.map((item) => (
      <Card item={item} key={item.id}/>
    ))}
  </div>
</div>
  );
};

export default GameList;
