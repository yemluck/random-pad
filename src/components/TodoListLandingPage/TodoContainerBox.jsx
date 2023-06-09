import React, {useEffect} from 'react';
import { useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


function TodoContainerBox() {

  // Hooks
  const dispatch = useDispatch();
  const history = useHistory();


  // Reducers
  const task = useSelector(store=> store.todoList);
  console.log('task is', task);
  
  // Page Load Functions:
    useEffect(()=> {
        dispatch({
        type: 'FETCH_TODO'
        });
    }, [])
  return(
    <>
    
    </>
  )

  
  }
  

export default TodoContainerBox;