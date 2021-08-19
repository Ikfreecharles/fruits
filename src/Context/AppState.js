import { useEffect, useState } from "react";
import axios from "axios";
import AppContext from "./app-context";

function AppState(props) {
   const [fruits, setFruits] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [fruitInfo, setFruitInfo] = useState({});
   const [fruitIsLoading, setFruitIsLoading] = useState(true);

   const carbonhydrate = [];
   const protein = [];
   const fat = [];
   const calories = [];
   const sugar = [];

   useEffect(() => {
      getFruits();
   }, []);

   //FUNCTION TO GET ALL FRUIT
   const getFruits = async () => {
      try {
         const res = await axios.get("/all");
         setFruits(res.data);
         setIsLoading(false);
      } catch (error) {
         console.log(error);
      }
   };

   //FUNCTION TO GET SINGLE FRUIT DETAILS
   const eachFruit = async (id) => {
      try {
         const res = await axios.get(`/${id}`);
         setFruitInfo(res.data);
         setFruitIsLoading(false);
      } catch (error) {
         console.log(error);
      }
   };

   //GET GENERAL STATISTICS

   if (!isLoading) {
      fruits.map((item) => {
         carbonhydrate.push(item.nutritions.carbohydrates);
         protein.push(item.nutritions.protein);
         fat.push(item.nutritions.fat);
         calories.push(item.nutritions.calories);
         sugar.push(item.nutritions.sugar);
      });
   }

   const nutritionalStats = (arrNutrient, loading) => {
      if (!loading) {
         let average = 0;
         arrNutrient.forEach((element) => {
            average = average + element / arrNutrient.length;
         });
         const sortedArray = arrNutrient.sort(function (a, b) {
            return a - b;
         });

         return (
            <div>
               <p>Average: {average}</p>
               <p>Lowest amount: {sortedArray[0]}</p>
               <p>Highest amount:{sortedArray[arrNutrient.length - 1]}</p>
            </div>
         );
      }
   };

   return (
      <AppContext.Provider
         value={{
            fruits,
            isLoading,
            fruitInfo,
            fruitIsLoading,
            eachFruit,
            setFruitIsLoading,
            nutritionalStats,
            carbonhydrate,
            protein,
            fat,
            calories,
            sugar,
         }}
      >
         {props.children}
      </AppContext.Provider>
   );
}

export default AppState;
