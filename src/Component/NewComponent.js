import React, {useState,Component} from 'react'
import "../App.css";
import "../NewComp.css"


const NewComponent = ({filteredNames1, updateFilteredNames1}) => {
    const [isActive, setIsActive] = useState(true);
    const [direct, setDirec] = useState(true);

    const onHover = (event) =>
    {
        setDirec(!direct);
        let img = event.currentTarget;
        img.classList.add('active');
        img.classList.remove('inactive');
    }


    const ofHover = (event) => {
        let img = event.currentTarget.closest('.d1').querySelector('img');
        img.classList.add('inactive');
        img.classList.remove('active');
    }

    const onChange = () => {
        setDirec(!direct)

    }
    return (
        <div className="divRoot">
            <div className="d1" id="display" >
                <img src={direct ? "./up11.png" : "down.png"} id="photo" className={isActive ? "inactive" : "active"}
                  onClick={onHover}   />
                  <span className={isActive?"inactive":"active"} onClick={ofHover}>&times;</span>
            </div>
        </div>
    )
}
export default NewComponent