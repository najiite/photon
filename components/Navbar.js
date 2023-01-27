import Link from "next/link"
import { useState, useEffect, use } from "react"

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextcolor] = useState('white')
    const HandleNav = () => {
        setNav(!nav)
    } 

    useEffect(()=>{
        const changeColor = () => {
            if (window.scrollY>=90) {
                setColor('#fff')
                setTextcolor('#000')

            }
            else {
                setColor('transparent')
                setTextcolor('#fff')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

  return (
    <div style={{backgroundColor: `${color}`}} className="fixed top-0 left-0 w-full z-10 ease-in duration-300">
        <div className="max-w-[1240px] m-auto flex justify-between items-center text-white p-4">
            <Link href='/'>
                <h1 style={{color: `${textColor}`}} className="font-bold text-4xl">Photon</h1>
            </Link>
            
            <ul style={{color: `${textColor}`}} className="hidden sm:flex ">
                <li className="p-5">
                    <Link href='/'>Home</Link>
                </li>
                <li className="p-5">
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className="p-5">
                    <Link href='/work'>Work</Link>
                </li>
                <li className="p-5">
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
            <div className="sm:hidden block z-10">
                { nav ? <AiOutlineClose size={20} onClick={HandleNav}  style={{color: `white`}}/> : <AiOutlineMenu size={20}  onClick={HandleNav}  style={{color: `${textColor}`}}/>}
                
            </div>
            <div className={nav ?"sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300": "sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" }>
                <ul>
                    <li onClick={HandleNav}  className="p-5 text-4xl hover:text-gray-500">
                        <Link href='/'>Home</Link>
                    </li>
                    <li onClick={HandleNav}  className="p-5 text-4xl hover:text-gray-500">
                        <Link href='/#gallery'>Gallery</Link>
                    </li>
                    <li onClick={HandleNav}  className="p-5 text-4xl hover:text-gray-500">
                        <Link href='/work'>Work</Link>
                    </li>
                    <li onClick={HandleNav}  className="p-5 text-4xl hover:text-gray-500">
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Navbar