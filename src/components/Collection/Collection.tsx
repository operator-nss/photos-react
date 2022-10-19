import React, { FC } from 'react';

export type CollectionProps = {
    photos: string[],
    name:string
}

const Collection:FC<CollectionProps> = ({photos, name}) => {
    return (
        <div className="collection">
            <img className="collection__big" src={photos[0]} alt="Item"/>
            <div className="collection__bottom">
                <img className="collection__mini" src={photos[1]} alt="Item"/>
                <img className="collection__mini" src={photos[2]} alt="Item"/>
                <img className="collection__mini" src={photos[3]} alt="Item"/>
            </div>
            <h4>{name}</h4>
        </div>
    );
};

export default Collection;