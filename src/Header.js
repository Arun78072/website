import './Style.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';


function Header() {
  return (
    <div className="header_comp">
      <div className="top_bar">
        <div> 
          <ul>
            <li className="search"><AiOutlineSearch /></li>
            <li className="menu"><CgMenuGridR /><p>View Categories</p></li>
          </ul>
        </div>
        <div className="app_logo">
        LOGO
        </div>
        <div>
          <ul className="header_icon">
            <li><AiOutlineUser /></li>
            <li><AiOutlineHeart /></li>
            <li><AiOutlineShoppingCart /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;