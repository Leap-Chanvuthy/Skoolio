import {BsFillCartCheckFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className='px-10 py-3 text-gray-400 bg-color1_dark flex justify-center gap-10 sticky top-0'>
            <div>Logo</div>
            <div className='flex justify-between items-center gap-4'>
                <p className=''>Welcome , leapchanvuthy@gmail.com</p>
                <Link to='/cart'><BsFillCartCheckFill/></Link>
            </div>
        </div>
     );
}
 
export default Navbar;