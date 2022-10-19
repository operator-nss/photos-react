import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export type CollectionProps = {
    photos: string[],
    name:string,
    id:number
}

const Collection:FC<CollectionProps> = ({photos, name, id}) => {
    return (
        <Link to={`/collection/${id}`} className="collection">
            <img className="collection__big" src={photos[0]} alt="Item"/>
            <div className="collection__bottom">
                <img className="collection__mini" src={photos[1]} alt="Item"/>
                <img className="collection__mini" src={photos[2]} alt="Item"/>
                <img className="collection__mini" src={photos[3]} alt="Item"/>
            </div>
            <h4>{name}</h4>
        </Link>
    );
};

export default Collection;