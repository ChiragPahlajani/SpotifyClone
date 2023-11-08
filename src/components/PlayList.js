import React from 'react';
import { FaPlus} from "react-icons/fa";
import{pls} from"./pls"
import { BsMusicNoteList, BsTrash } from 'react-icons/bs';
function PlayList() {
  return (
    <div className="playListContainer">
        <div className="nameContainer">
        <p>PlayList</p>
        <i><FaPlus/></i>
        </div>
        <div className="playListScroll">
         {
            pls && pls.map((list)=>(
         <div className='plss' key={list.id}>
            <i className='list'>
                <BsMusicNoteList/>
            </i>
            <p>{list.name}</p>
            <i className='trash'>
                <BsTrash/>
            </i>
         </div>
            ))}
        </div>
    </div>
  );
}

export { PlayList}