import { useContext, useEffect } from "react";
import AppContext from "../Context/app-context";

function FruitInfo(props) {
   const { fruitInfo, fruitIsLoading, eachFruit } = useContext(AppContext);

   useEffect(() => {
      eachFruit(props.match.params.id);
   }, [props.match.params.id]);

   const lowestNutrient = (item) => {
      const [lowestItems] = Object.entries(item).sort(
         ([, v1], [, v2]) => v1 - v2
      );
      return [lowestItems[0], lowestItems[1]];
   };
   const highestNutrient = (item) => {
      const [lowestItems] = Object.entries(item).sort(
         ([, v1], [, v2]) => v2 - v1
      );
      return [lowestItems[0], lowestItems[1]];
   };

   const displayDetails = () => {
      if (fruitIsLoading) {
         return <h2>loading</h2>;
      } else {
         const { name, nutritions } = fruitInfo;
         //console.log(fruitInfo);
         return (
            <div>
               <h1>About {name}</h1>
               <p>
                  {name} is low in {lowestNutrient(nutritions)[0]} with a
                  nutritional value of {lowestNutrient(nutritions)[1]}. {name}{" "}
                  is high in {highestNutrient(nutritions)[0]} with a nutritional
                  value of {highestNutrient(nutritions)[1]}.
               </p>
            </div>
         );
      }
   };

   return (
      <div className="fi-outer-container">
         <div className="fi-outer-div ">{displayDetails()}</div>
      </div>
   );
}

export default FruitInfo;
