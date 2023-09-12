import {MdFoodBank} from 'react-icons/md';

const TotalItems = () => {
    return ( 
        <div className='flex flex-col justify-center items-center shadow-md px-10 py-4 rounded-md gap-4'>
                <div className='flex justify-center items-center gap-4'>
                    <MdFoodBank className='text-4xl'/>
                    <span><h3 className='text-2xl font-bold text-center items-center    '>Total Items</h3></span>
                </div>
                <p className='font-bold text-2xl text-green-800'>45</p>
        </div>
     );
}
 
export default TotalItems;