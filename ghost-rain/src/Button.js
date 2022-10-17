import { useNavigate } from "react-router-dom";
function Button({value}){
    const navigate=useNavigate();
    const goStart=()=>{
     value==="Start"? navigate('/start'):navigate('/desc');
    }
 return(
        <button onClick={goStart} className='bg-[#8e7964] ml-5 mr-5 px-4 h-[50px] w-[250px] text-lg rounded-md text-white'>
        {value}
        </button>
    );

}
export default Button; 