import React from "react";

const Food = ({ name, picture }) => {
  return (
    <div>
      <h2>I Like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
};

const foodILike = [
  {
    id: 1,
    name: "Samgyeopsal",
    image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
  },
  {
    id: 2,
    name: "Kimchi",
    image:
      "https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
