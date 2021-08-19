import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../Context/app-context";

function Fruits() {
   const {
      fruits,
      isLoading,
      eachFruit,
      nutritionalStats,
      carbonhydrate,
      protein,
      fat,
      calories,
      sugar,
   } = useContext(AppContext);

   const displayFruits = (item, loading) => {
      if (loading) {
         return <h1>loading</h1>;
      } else {
         return item.map((fruit) => {
            const { id, name, family, genus, order } = fruit;
            return (
               <div key={id} className="col-md-3 ">
                  <div className="card p-3 mb-2" id="box">
                     <h3 className="heading heading-mod">{name}</h3>
                     <h6 className="text1">{name} Scientific Details:</h6>
                     <div className="fruit-details">
                        <p>Order: {order}</p>
                        <p>Family: {family}</p>
                        <p>Genus: {genus}</p>
                     </div>

                     <Link to={`/${id}`} className="show-btn">
                        <p onClick={() => eachFruit(id)}>Show more</p>
                     </Link>
                  </div>
               </div>
            );
         });
      }
   };

   const statistics = () => {
      return (
         <div className="row">
            <div className="col-md-4 col-xl-3">
               <div className="card bg-c-blue order-card">
                  <div className="card-block">
                     <h3>Carbohydrate</h3>
                     {nutritionalStats(carbonhydrate, isLoading)}
                  </div>
               </div>
            </div>
            <div className="col-md-4 col-xl-3">
               <div className="card bg-c-green order-card">
                  <div className="card-block">
                     <h3>Protein</h3>
                     {nutritionalStats(protein, isLoading)}
                  </div>
               </div>
            </div>
            <div className="col-md-4 col-xl-3">
               <div className="card bg-c-yellow order-card">
                  <div className="card-block">
                     <h3>Fat</h3>
                     {nutritionalStats(fat, isLoading)}
                  </div>
               </div>
            </div>
            <div className="col-md-4 col-xl-3">
               <div className="card bg-c-pink order-card">
                  <div className="card-block">
                     <h3>Calories</h3>
                     {nutritionalStats(calories, isLoading)}
                  </div>
               </div>
            </div>
            <div className="col-md-4 col-xl-3">
               <div className="card bg-c-blue order-card">
                  <div className="card-block">
                     <h3>Sugar</h3>
                     {nutritionalStats(sugar, isLoading)}
                  </div>
               </div>
            </div>
         </div>
      );
   };

   return (
      !isLoading && (
         <div className="container mt-5 mb-3">
            <h1>List of Fruits</h1>
            <div className="row">{displayFruits(fruits, isLoading)}</div>
            <h1>Statistics about the fruits</h1>
            <div>{statistics()}</div>
         </div>
      )
   );
}

export default Fruits;
