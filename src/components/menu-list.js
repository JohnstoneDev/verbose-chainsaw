import { useState } from 'react';
import { Food } from '../foods';

const Menu = (props)=> {
 const { name,description,img,price} = props.meal;

  return(
    <div className="menu">
      <div className="image-div">
        <img src={img} alt="" />
        </div>

        <div>
          <section>
              <h4>{name}</h4>
              <h5>{price}</h5>
            </section>
            <section>
              <p>{description}</p>
            </section>
          </div>
    </div>
  )

};

const Menulist =()=>{
  const [ allFood,setAllFoods ] = useState(Food);

   const Navbar = () => {

    return (
    <div className="navigation-buttons">
      <button
       className="nav-btn"
       onClick= {() => {
         setAllFoods(Food)
         document.getElementById("title").innerText = "Complete Menu"
       }}
       >All</button>

      <button
      className="nav-btn"
      onClick= {()=> {
        let newArray = Food.filter((food) => food.category === "Breakfast")
        setAllFoods(newArray);
        document.getElementById("title").innerHTML = "Breakfast"
      }}>Breakfast</button>

      <button
      className="nav-btn"
      onClick= {() => {
        let newArray = Food.filter((food) => food.category === "Lunch")
        setAllFoods(newArray);
        document.getElementById("title").innerHTML = "Lunch"
      }}>Lunch</button>

      <button
      className="nav-btn"
      onClick= {() => {
        let newArray = Food.filter((food) => food.category === "Shakes")
        setAllFoods(newArray);
        document.getElementById("title").innerHTML = "Shakes"
      }}>Shakes</button>
    </div>
    )
  };

  return(
    <>
     <Navbar />
      <div className="all-foods">
          {allFood.map((meal) => {
            return(
              <Menu key={meal.id} meal={meal}/>
            )
          })}
      </div>
    </>
  )
}

export default Menulist;
