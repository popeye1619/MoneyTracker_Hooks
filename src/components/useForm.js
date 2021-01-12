import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../actions/index';


const useForm = ({validateNumber, validateInfo}) => {
  const [values, setValues] = useState({
    expenseLimit: 0, 
    amount: 0,
    category:''
  });
  
  const [list, setList]=useState([]);

  const [errors, setErrors]=useState({});
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter);
  
  const handleChange = e =>{
    setErrors(validateNumber(values));
      const{name, value}=e.target
      setValues({
          ...values,
          [name]: value
      });
  };

  const handleSubmitExpense=e=>{
    
      e.preventDefault();
    
      setErrors(validateInfo(values));
      if(isNaN(values.amount)||values.category==''){        
      }
      else if(counter==0){
        alert('you dont have sufficient balance');
      }else if(values.amount>counter){
        alert('you dont have sufficient balance');
      }else if(parseInt(values.expenseLimit) > 0 && parseInt(values.amount)>parseInt(values.expenseLimit)){   
        alert('You are exceeding your expense limit');                
      }
      else {
        dispatch(decrement(values.amount));    
        setList([
          values, ...list
      ])
      }
  }

  const handleSubmitIncome=e=>{
    
    e.preventDefault();

    setErrors(validateInfo(values));
    if(isNaN(values.amount)||values.category==''){        
    }
    else if(isNaN(values.amount)==false||(values.category!='' && values.amount!='')){     
      dispatch(increment(parseInt(values.amount)));
      setList([
        values, ...list
    ])
    }   
}

    return{values,list, handleSubmitExpense,handleSubmitIncome, handleChange, errors};
  
}

export default useForm;
