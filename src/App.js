import React from 'react';

const Food = ({ name, picture }) => {
  return <div>
    <h2>I Like {name}</h2>
    <img src={picture} />
  </div> 
};

const foodILike = [{
  name: "Samgyeopsal",
  image: "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg"
},
{
  name: "Kimchi",
  image: "https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg"
}
]

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
    </div>
  );
};

export default App;
