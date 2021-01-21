import React, {useState} from "react";
import "../App.css";

const TableHead = ({
                            filteredNames,
                            setFilteredNames,
                            filteredName1, updateFilteredNames1
                        }) => {

    const [direct, setDirect] = useState(0);
    const [directSurName, setDirectSurName] = useState(0);
    const [directAge, setDirectAge] = useState(0);






    const [closeName, setCloseName] = useState(0);
    const [closeSurName, setCloseSurName] = useState(0);
    const [closeAge, setCloseAge] = useState(0);




    const [users,setUsers]=useState(filteredNames);


    const sortByNameUp = () => {
        let a = [...filteredNames];
        a.sort(function (a, b) {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            else return 0;
        })
        setFilteredNames(a);
    }

    const sortByNameDown = () => {
        let a = [...filteredNames];
        a.sort(function (a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            else return 0;
        })
        setFilteredNames(a);
    }


    const sortBySurNameUp = () => {
        let a = [...filteredNames];
        a.sort((a, b) => {
            if (a.SurName > b.SurName) return 1;
            if (a.SurName < b.SurName) return -1;
            else return 0;
        })
        setFilteredNames(a);
    }

    const sortBySurnameDown = () => {
        let a = [...filteredNames];
        a.sort((a, b) => {
            if (a.SurName < b.SurName) return 1;
            if (a.SurName > b.SurName) return -1;
            else return 0;
        })
        setFilteredNames(a);
    }


    const sortByAgeUp = () => {
        let a = [...filteredNames];
        a.sort((a, b) => {
            if (a.age > b.age) return 1;
            if (a.age < b.age) {
                return -1;
            } else return 0;
        })
        setFilteredNames(a);

    }


    const sortByAgeDown = () => {
        let a = [...filteredNames];
        a.sort((a, b) => {
            if (a.age < b.age) return 1;
            if (a.age > b.age) return -1;
            else return 0;
        })
        setFilteredNames(a);
    }


    const onHoverClick = (event) => {
        let img = event.currentTarget.querySelector('img');
        img.classList.add('activeIcon');
        img.classList.remove('inactiveIcon');
    }




    const ofHoverClick = (event) => {
        let img = event.currentTarget.closest('.filter-block').querySelector('img');
        img.classList.add('inactiveIcon');
        img.classList.remove('activeIcon');
        setCloseName(!closeName)
        setFilteredNames(users)
    }

    const ofHoverClick1 = (event) => {
        let img = event.currentTarget.closest('.filter-block').querySelector('img');
        img.classList.add('inactiveIcon');
        img.classList.remove('activeIcon');
        setCloseSurName(!closeSurName);
        setFilteredNames(users);
    }
    const ofHoverClick2 = (event) => {
        let img = event.currentTarget.closest('.filter-block').querySelector('img');
        img.classList.add('inactiveIcon');
        img.classList.remove('activeIcon');
        setCloseAge(!closeAge);
        setFilteredNames(users);
    }
    return (
        <tr>
            <th>Name
                <div className="filter-block">
                    <div className="icon-box" id="SortByName" onClick={onHoverClick}>
                        <img className="iconImg inactiveIcon" src={!direct ? 'down.png' : 'up11.png'}
                             onClick={(event) => {
                                 setDirect(!direct);
                                 !direct ? sortByNameUp() : sortByNameDown();
                                 setCloseName(1);
                             }}/>
                    </div>
                    <span className={!closeName? "closeActive" : "closeInActive"} id="Span" onClick={ofHoverClick}> &times;</span>

                </div>
            </th>
            <th>Surname
                <div className="filter-block">
                    <div className="icon-box" id="SortBySurNames" onClick={onHoverClick}>

                        <img className="iconImg inactiveIcon" src={!directSurName ? 'down.png' : 'up11.png'}
                             onClick={() => {
                                 setDirectSurName(!directSurName);
                                 !directSurName ? sortBySurNameUp() : sortBySurnameDown()
                                 setCloseSurName(1);
                             }}/>
                    </div>
                    <span  className={!closeSurName?"closeActive" : "closeInActive"} onClick={ofHoverClick1} id="closeSurName">&times;</span>
                </div>
            </th>
            <th>Age
                <div className="filter-block">
                    <div className="icon-box" id="SortByAge" onClick={onHoverClick}>
                        <img className="iconImg inactiveIcon" src={!directAge ? 'down.png' : 'up11.png'}
                             onClick={() => {
                                 setDirectAge(!directAge);
                                 !directAge ? sortByAgeUp() : sortByAgeDown();
                                 setCloseAge(1);
                             }}/>
                    </div>
                    <span className={!closeAge?"closeActive" : "closeInActive"} id="Span" onClick={ofHoverClick2} id="closeAge">&times;</span>
                </div>
            </th>
        </tr>









    )
}
export default TableHead