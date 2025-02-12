import React from 'react'
import SingleItem from './SingleItem'
import { Link } from 'react-router-dom'

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
    // console.log(title, items)

    return (
        <div className='item-list'>
            <div className='item-list__header'>
                <h2>{title} populares</h2>
                <Link className="item-list__link" to={path}>Mostrar tudo</Link>
            </div>

            <div className='item-list__container'>
                {itemsArray
                    .filter((currentValue, index) => index < items)
                    .map((currObj, index) => (
                        <SingleItem
                            // id={currObj.id}
                            // image={currObj.image}
                            // name={currObj.name}
                            // banner={currObj.banner}
                            idPath={idPath}
                            {...currObj}
                            key={`${title}-${index}`} 
                        />
                    ))}
            </div>
        </div>
    )
}

export default ItemList
