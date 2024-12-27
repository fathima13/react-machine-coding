import React, { useState, useRef, useEffect } from "react";
import "./Population.css"


export default function Population() {
let timer = useRef(null)
const [populationData, setPopulationData] = useState([]); 
const [searchData, setSearchData]  = useState([]);
const [searchText, setSearchText] = useState(null);
const [loading, setIsLoading] = useState(false);

useEffect(() => {
    getPopulationData();
},[])

const getPopulationData = async () => {
    try{
        let response = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        response = await response.json();
        setPopulationData(response.data)
        setSearchData(response.data)
    }catch(err){
        console.log(err)
    }
}
const onChangeHandler = (event) => {
    setSearchText(event.target.value)
     if(timer) clearInterval(timer)
    timer = setTimeout(() => {
        getData(event.target.value);
    },[3000])
}

const getData = (value) => {
    setIsLoading(true);
    const result = [];
    populationData.map((ele) => {
      if (ele.Year === value) {
        result.push(ele);
      }
    });
    setSearchData([...result]);
    setIsLoading(false);
  };

const reset = () => {
    setSearchData([...populationData]);
    setSearchText('')
}
const deleteHandler = (id) => {
    const updatedSearchData = searchData?.filter((ele) => ele.Year !== id);
    const updatedPopulationData = populationData?.filter((ele) => ele.Year !== id);
    setSearchData([...updatedSearchData])
    setPopulationData([...updatedPopulationData])
}

  return (
      <div>
        <input type="text" value={searchText} onChange={(event) => onChangeHandler(event)}/>
        <button className= "mb-10" onClick={() => reset()}>Reset</button>
        <div>
            {
                loading ? <div>Loading........</div> :     <table>
                <th className="p-10">Year</th>
                <th className="p-10">Population</th>
                <th className="p-10"></th>
                {
                    searchData?.length > 0 && searchData.map((ele) => (
                        <tr key={ele.Year}>

                        <td className="p-10"> {ele.Year}</td>
                        <td className="p-10"> {ele.Population}</td>
                        <button className="m-10" onClick={() => deleteHandler(ele.Year)}>Delete</button>
                        </tr>

                    ))
                }
               
            </table>
            }
        
           
        </div>
      </div>
  );
}
