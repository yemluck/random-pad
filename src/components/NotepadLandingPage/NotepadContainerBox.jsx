import React, {useState, useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

function NotepadContainerBox() {

  const dispatch = useDispatch();
  const history = useHistory();

  // Reducers
  const noteEntry = useSelector(store=> store.notepad);

  // Page Load Functions:
    useEffect(()=> {
        dispatch({
        type: 'FETCH_NOTES'
        });
    }, [])

        //function to delete note:
    function handleDelete(id){
            dispatch({
                type: 'DELETE_NOTE',
                payload: id
            })
    }
    //function to send user to detail page where they will edit their note entry
    function handleEdit(note){  
      history.push(`/${note.id}`)
    }

  return (
    <div>
      <h2> this is the container for notepad</h2>


{/* Div to store previous notepad entries */}
    <div>
        <div key={noteEntry.id}>
    {noteEntry.map(note => {
            return(
              <div key={note.id} >
              <div className= "noteHistoryBox">
                  <div className="noteHistoryLine"> <h2><u>Date:</u></h2> <h3>{note.date}</h3> </div>
                 <div className="noteHistoryLine"> <h2><u>Header:</u></h2><h2><b>{note.header}</b></h2></div>
                 <div className="noteHistoryLine"> <h2><u>Note:</u></h2><h3>{note.description}</h3></div>
                 <button onClick={() => handleDelete(note.id)}>Delete</button>
                 <button onClick= {() => handleEdit(note)}> Edit </button>
              </div>
             
            </div>
            )
            })}
  </div>

    {/* button styling is handled in the userPage.css  */}
    <Link to="/user"><button className="notepadBtn"> <h2>User Homepage</h2></button></Link>
</div>
      

    </div>
  )
}

export default NotepadContainerBox;