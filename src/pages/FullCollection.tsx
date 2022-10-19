import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const FullCollection = () => {
    const [collection, setCollection] = useState<{
        name: string,
        photos: string[],
    }>();

    const {id} = useParams();
    console.log(id)
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCollection() {
            try {
                fetch(`https://635018d778563c1d82b8f353.mockapi.io/photo/` + id)
                    .then(data => data.json())
                    .then((res) => {
                        setCollection(res);
                    })

            } catch (error) {
                alert('Ошибка при получении пиццы!');
                navigate('/');
            }
        }

        fetchCollection();
    }, [])

    return (
        <div className='container'>
            <h2>Коллекция {collection?.name}</h2>
            <div className="full">
                {collection?.photos?.map((item: string) => {
                    return <img style={{width: '250px', height: '250px'}} src={item} alt="photo"/>
                })}
            </div>
            <button className='full__button' onClick={() => navigate('/')}>Вернуться назад</button>

        </div>
    );
};

export default FullCollection;