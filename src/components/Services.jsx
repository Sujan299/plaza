import React from "react";
import ServiceList from "./ServiceList";
const data = [
  {
    id: 1,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    product: "pizza"
  },
  {
    id: 2,
    img: "https://toriavey.com/images/2011/06/Doughnuts-740x555.jpg",
    product: "Do nut"
  },
  {
    id: 3,
    img:
      "data:image/jpeg;base64,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",
    product: "Burger"
  },
  {
    id: 4,
    img:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.616.493.suffix/1615916524567.jpeg",
    product: "Pasta"
  },
  {
    id: 5,
    img: "https://usegeniius.com/optimized/608aa98552acf-buff-chowmien.jpg",
    product: "Chowmin"
  },
  {
    id: 6,
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Momo_nepal.jpg",
    product: "Momo"
  }
];
function Services() {
  return (
    <>
      <h2 className="service">Services</h2>
      <ServiceList data={data} />
    </>
  );
}

export default Services;