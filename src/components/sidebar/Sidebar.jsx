import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
    const [cats, setCat] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCat(res.data);
        }
        getCats()
    }, [])
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src="https://images.pexels.com/photos/7422083/pexels-photo-7422083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quae, sequi dicta ipsam eaque
                    accusantium quas nobis suscipit exercitationem, optio
                    laborum porro maiores necessitatibus est? Sint sapiente quo obcaecati. Saepe.
                </p>
            </div>

            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className='sidebarListItem'>{ c.name }</li>
                        </Link>
                    ))}
                    
                </ul>
            </div>

            <div className="sidebarItem">
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
  );
}
