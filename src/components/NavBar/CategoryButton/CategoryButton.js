import React from 'react'
import {Link} from 'react-router-dom'
import './CategoryButton.css';

export const CategoryButton = () => {

    const categoriesGroup = [
        { id:'1', path:'/category/Bombillas',nombre:'Bombilla'},
        { id:'2', path:'/category/Termos', nombre:'Termo'},
        { id:'3', path:'/category/Mates', nombre:'Mate'},
        { id:'4', path:'/category/Sets', nombre:'Set'},    
    ];

    return (
        <>
            <div className='categoryContainer'>
                <button href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" className='categoryButton'>
                    Categorias
                </button>
                <ul className="dropdown-menu navbarCategories" aria-labelledby="navbarDropdownMenuLink">
                    {categoriesGroup.map((cat) => {
                        return (
                            <Link to={cat.path} key={cat.id} ><li className="categoryList">{cat.nombre}</li></Link> 
                        )
                    })}
                    <hr className='dropdown-divider'/>
                    <Link to="/"><li className="categoryList">Todos</li></Link>
                </ul>
            </div>
        </>
    )
}




