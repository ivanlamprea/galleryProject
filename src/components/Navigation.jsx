import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import picture1 from '../images/picture1.webp'
import picture2 from '../images/picture2.webp'
import picture3 from '../images/picture3.webp'
import picture4 from '../images/picture4.webp'
import picture5 from '../images/picture5.webp'
import picture6 from '../images/picture6.webp'
import picture7 from '../images/picture7.webp'
import picture8 from '../images/picture8.webp'
import picture9 from '../images/picture9.webp'
import picture10 from '../images/picture10.webp'

const Navigation = () => {

  const style = {
    width: '100%',
    height: '80px',
    objectFit: 'cover'
  }

  return (
    <div className='absolute left-0 right-0 w-6/6 mx-auto flex justify-center bottom-0 bg-black/80 pt-2'>
      <NavLink to="/galeria/1" className={ ({isActive}) => [ isActive ? 'group active' : 'w-[10%]'].join(" ") }>
        <img src={ picture1 } style={ style } alt="" />
        <figcaption className='text-center text-white group-[.active]:font-bold group-[.active]:text-black group-[.active]:bg-yellow-400'>Foto1</figcaption>
      </NavLink>
      <NavLink to="/galeria/2" className={ ({isActive}) => [ isActive ? 'group active' : 'w-[10%]'].join(" ") }>
        <img src={ picture2 } style={ style } alt="" />
        <figcaption className='text-center text-white group-[.active]:font-bold group-[.active]:text-black group-[.active]:bg-yellow-400'>Foto2</figcaption>
      </NavLink>
      <NavLink to="/galeria/3" className={ ({isActive}) => [ isActive ? 'group active' : 'w-[10%]'].join(" ") }>
        <img src={ picture3 } style={ style } alt="" />
        <figcaption className='text-center text-white group-[.active]:font-bold group-[.active]:text-black group-[.active]:bg-yellow-400'>Foto3</figcaption>
      </NavLink>
      <NavLink to="/galeria/4" className={ ({isActive}) => [ isActive ? 'group active' : 'w-[10%]'].join(" ") }>
        <img src={ picture4 } style={ style } alt="" />
        <figcaption className='text-center text-white group-[.active]:font-bold group-[.active]:text-black group-[.active]:bg-yellow-400'>Foto4</figcaption>
      </NavLink>
      <NavLink to="/galeria/5" className={ ({isActive}) => [ isActive ? 'group active' : 'w-[10%]'].join(" ") }>
        <img src={ picture5 } style={ style } alt="" />
        <figcaption className='text-center text-white group-[.active]:font-bold group-[.active]:text-black group-[.active]:bg-yellow-400'>Foto5</figcaption>
      </NavLink>
      <NavLink to="/galeria/6" className={ ({isActive}) => [ isActive ? 'group active' : 'w-[10%]'].join(" ") }>
        <img src={ picture6 } style={ style } alt="" />
        <figcaption className='text-center text-white group-[.active]:font-bold group-[.active]:text-black group-[.active]:bg-yellow-400'>Foto6</figcaption>
      </NavLink>
      <NavLink to="/galeria/7" className={ ({isActive}) => [ isActive ? 'group active' : 'w-[10%]'].join(" ") }>
        <img src={ picture7 } style={ style } alt="" />
        <figcaption className='text-center text-white group-[.active]:font-bold group-[.active]:text-black group-[.active]:bg-yellow-400'>Foto7</figcaption>
      </NavLink>
      <NavLink to="/galeria/8" className={ ({isActive}) => [ isActive ? 'group active' : 'w-[10%]'].join(" ") }>
        <img src={ picture8 } style={ style } alt="" />
        <figcaption className='text-center text-white group-[.active]:font-bold group-[.active]:text-black group-[.active]:bg-yellow-400'>Foto8</figcaption>
      </NavLink>
      <NavLink to="/galeria/9" className={ ({isActive}) => [ isActive ? 'group active' : 'w-[10%]'].join(" ") }>
        <img src={ picture9 } style={ style } alt="" />
        <figcaption className='text-center text-white group-[.active]:font-bold group-[.active]:text-black  group-[.active]:bg-yellow-400'>Foto9</figcaption>
      </NavLink>
      <NavLink to="/galeria/10" className={ ({isActive}) => [ isActive ? 'group active' : 'w-[10%]'].join(" ") }>
        <img src={ picture10 } style={ style } alt="" />  
        <figcaption className='text-center text-white group-[.active]:font-bold group-[.active]:text-black  group-[.active]:bg-yellow-400'>Foto10</figcaption>
      </NavLink>
    </div>
  )
}

export default Navigation
