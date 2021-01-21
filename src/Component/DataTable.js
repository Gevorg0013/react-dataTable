import React from "react";
import "../App.css"
import TableHead from "./TableHead";

const DataTable = (props,key)=>{


    return(
        <table>

            <TableHead  filteredNames={props.filteredNames} setFilteredNames={props.setFilteredNames}/>
            {
                props.filteredNames.map((user,index)=>{
                    return (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.SurName}</td>
                            <td>{user.age}</td>
                        </tr>
                    )
                })

            }

        </table>
    )
}

export default DataTable