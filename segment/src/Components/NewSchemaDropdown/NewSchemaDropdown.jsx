import React, {useState} from 'react';
import './NewSchemaDropdown.css';
import NewSchemaOption from '../NewSchemaOption/NewSchemaOption';

 const NewSchemaDropdown = (props) =>{
    const setArray = props.setArray;
    const array = props.array;
    const [openIndex, setOpenIndex] = useState(null);
    const editNewSchema = (element, elementToBeRemove) => {
        for(let i=0;i<array.length;i++){
            if(Object.values(array[i])[0]===Object.values(element)[0]){
                console.log(Object.values(array[i])[0])
                console.log(Object.values(element)[0])
                return;
            }
        }
        let a = array.filter(ele => Object.values(ele)[0]!== Object.values(elementToBeRemove)[0])
        a.push(element)
        setArray(a);
        console.log(array)
    }
  return (
    <>
    {(array.length !== 0) &&
    <div className='new-schema-container'>
        {array.map((element , index)=>(
            <>
        <div className='schema-dropdown-container' style={{margin:"5px" }}>
            <span className='add-schema-bullet' style={{backgroundColor:`${Object.values(element)[1]}`}}></span>
            <div className='add-schema-container'>
                <div className='add-schema-segment-flex'onClick={()=>{
                    if(openIndex === index){
                        setOpenIndex(null)
                    }
                    else{
                        setOpenIndex(index)
                    }}} >
                    <span className='add-schema-text'> {Object.values(element)[0]} {openIndex === index ? 
                    <i className="fa faChevronUp" ></i>:
                    <i className="fa faChevronDown" ></i>}
              
                  </span>
           
                    
                </div>
                {openIndex === index && <NewSchemaOption editNewSchema = {editNewSchema} element = {element}setOpenIndex = {setOpenIndex} />}
            </div>
            <div className='dash-icon'><i class="fa faMinus" ></i></div>
        </div>
        </>
        ))}
    </div>
    }
    </>
  )
}
export default NewSchemaDropdown;