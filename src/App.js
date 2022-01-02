import React from "react";
import PropTypes from "prop-types";
function Food({fav, img, rating}){
  return <div>
    <h1>i like {fav}</h1>
    <h4>{rating}/5.0</h4>
    <img src={img} alt={fav}/>
  </div>
}
Food.propTypes={
  fav:PropTypes.string.isRequired,
  img:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
}
const foodILike=[
  {name:"김치", image:"https://w.namu.la/s/a85e178b2233fa1e3461ae51dba6757e8cc87b215ea326660c85904f61daf0dcd84f8b8733cee71ca34fa743822d5aa1650766f6b2a90118edc5e76974e8305263694a4c2358508602ad7694e2cd022389545b2812f6e86bf29e05e172b53405", rating: 5},
  {name:"라면", image:"https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg", rating: 3.9},
  {name:"삼겹살", image:"https://src.hidoc.co.kr/image/lib/2021/8/27/1630049987719_0.jpg", rating: 4},
  {name:"쭈꾸미", image:"https://static.wtable.co.kr/image/production/service/recipe/707/d403b168-c865-4b5e-9afb-58c48e5feaec.jpg", rating: 4.9},
  {name:"김밥", image:"https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG", rating: 4.3},
]
const renderFood = (item, index)=>{
  return <Food key={index} fav={item.name} img={item.image} rating={item.rating}/>
}

function App() {
  return ( 
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
