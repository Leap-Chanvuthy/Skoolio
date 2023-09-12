import {FcSalesPerformance} from 'react-icons/fc';
const TotalSale = () => {
    return ( 
        <div className='flex justify-center items-center shadow-md px-10 py-4 rounded-md gap-4'>
            <FcSalesPerformance className='text-5xl'/>
            <p className='font-bold text-2xl text-green-800'>45 Items</p>
        </div>
     );
}
 
export default TotalSale;