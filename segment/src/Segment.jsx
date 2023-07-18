import {useState}  from 'react'
import Popup from 'reactjs-popup';
import './Segment.css';
import Select from 'react-select';



const Segment = () => {
    const options = [
        { value: 'first_name', label: 'First Name' },
        { value: 'last_name', label: 'Last Name' },
        { value: 'gender', label: 'Gender' },
        { value: 'age', label: 'Age' },
        { value: 'account_name', label: 'Account Name' },
        { value: 'city', label: 'City' },
        { value: 'state', label: 'State' }, 
        
    
      ];

    //   const [selectValue, setSelectValue] = useState("");
    //   const onChange = (event) => {
    //     const value = event.target.value;
    //     setSelectValue(value);
    //   };

//   const handleChange = (event)=>{
//         setSelectedOption(event.target.value);
//     }
    

  return (
    <div>Segment

<Popup trigger=
                {<button> Save Segment </button>}
                position="right"
                modal nested>
                {
                    close => (
                        <div>
                        <div className='modal' >
                            <div className='content'>
                                <div >
                                <label > Enter the Name of the Segment</label>
                                <input placeholder='Name of the Segment'></input>
                                </div>
                                To save your segment, you need to add the schemas to build the query
                            </div>
                            <div>
{/* 
                            <Select   defaultValue={selectedOption}
        onChange={handleChange}
        options={options}
      /> */}

{/* <Select
        value={selecteValue}
        onChange={e => setSelectedValue(e.target.value)}>
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </Select> */}

                            </div>

     
<div>
    <button>Save the Segment</button>
    <button>Cancel</button>
</div>


                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close modal
                                </button>
                            </div>
                        </div>
                        </div>
                    )
                }
            </Popup>


    </div>
    
  )
}

export default Segment