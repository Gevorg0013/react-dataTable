import React, {useState} from "react";
import "./App.css";
import SortByName from "./Component/TableHead";
import DataTable from "./Component/DataTable";
import TableHead from "./Component/TableHead";

const App=()=> {
   let usersObj=[
        {name:"Gevorg",SurName:"Ayvazyan", age:24},
        {name:"Aram",SurName:"Poxosyan", age:20},
        {name:"Erik",SurName:"Xlxatyan", age:25},
        {name:"Edgar",SurName:"Vardanyan", age:23},
        {name:"Sergey",SurName:"Mxitaryan", age:22},
        {name:"Aram",SurName:"Kirakosyan", age:26},
    ]

     const [users,setUsers]=useState(usersObj);
     let [filteredNames,setFilteredNames]=useState(users);

     const filterUser=(event)=> {

           let userCopy = [...users];
           let val=event.target.value;
           let userArray = []

           const valueAsArray = val.toLowerCase().split(" ");

           valueAsArray.forEach((str) => {
               userArray = userCopy.filter((user) => {
                   let userDataString = user.name.toLowerCase().concat(" ")
                       .concat(user.SurName.toLowerCase()).concat(" ")
                       .concat(user.age);
                   return userDataString.includes(str);
               });
           });

           setFilteredNames(userArray);
       }

         const refName=React.createRef();
         const  refSurName=React.createRef();
         const  refAge=React.createRef();

    const addEl=()=>{
        const rName=refName.current.value;
        const rSurName=refSurName.current.value;
        const rAge=refAge.current.value;
        if(rAge===""||rSurName===""||rName===""){
            alert("try again")}
        else {
            setUsers((current) => [...current, {name: rName, SurName: rSurName, age: rAge}]);
            setFilteredNames((current) => [...current, {name: rName, SurName: rSurName, age: rAge},]);
        }
    }



        return(
            <body>
             <div className="App">
                 <div className="column">
                     <div className="inputDiv">
                         <input type="text" placeholder="filter" onChange={filterUser}/>
                     </div>
                     <div className="imagesDiv">
                         <div className="divList">
                             <DataTable className="ListUl" filteredNames={filteredNames} setFilteredNames={setFilteredNames}/>
                         </div>

                         <div className="dd">
                             <input type="text" placeholder="insert name" className="input1" id="inp" ref={refName}/>
                         </div>
                         <div className="dd">
                             <input type="text" placeholder="insert surname" className="input1" ref={refSurName}/>
                         </div>
                         <div className="dd">
                             <input type="number" placeholder="insert age" className="input1" ref={refAge}/>
                         </div>
                         <input type="submit" className="btn" onClick={addEl}/>
                     </div>
                 </div>
             </div>
            </body>
    );

}

export default App







