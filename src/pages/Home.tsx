import React, {useEffect, useState} from 'react';
import Collection, {CollectionProps} from "../components/Collection/Collection";
import Preloader from "../components/Preloader/Preloader";

const cats = [
    {name: 'Все'},
    {name: 'Море'},
    {name: 'Горы'},
    {name: 'Архитектура'},
    {name: 'Города'},
]

const Home = () => {
    const [collections, setCollections] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [categoryId, setCategoryId] = useState(0);
    const [searchValue, setSearchValue] = useState('');

    const category: string = categoryId ? `&category=${categoryId}` : '';

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://635018d778563c1d82b8f353.mockapi.io/photo?page=${page}&limit=3${category}`)
            .then(data => data.json())
            .then(res => {
                setCollections(res);
            })
            .catch(e => console.log(e))
            .finally(() => {
                setIsLoading(false)
            })
    }, [categoryId, page])

    const changeCategory = (i: number) => {
        setCategoryId(i)
    }

    const onInput = (value: string) => {
        setSearchValue(value);
    }

    const changePage = (i: number) => {
        setPage(i);
    }
    return (
        <div className="App">
            <div className="container">
                <h1>Моя коллекция фотографий</h1>
                <div className="top">
                    <ul className="tags">
                        {cats.map((item, i) => {
                            return <li key={item.name} onClick={() => changeCategory(i)}
                                       className={categoryId === i ? 'active' : ''}>{item.name}</li>
                        })}
                    </ul>
                    <input onChange={(e) => onInput(e.target.value)} className="search-input"
                           placeholder="Поиск по названию"/>
                </div>

                {isLoading ? <Preloader/> : <div>
                    <div className="content">
                        {collections.filter((item: any) => {
                            return item.name.toLowerCase().includes(searchValue.toLowerCase())
                        })
                            .map((item: CollectionProps, i: number) => {
                                return <Collection
                                    key={i}
                                    name={item.name}
                                    photos={item.photos}
                                    id={item.id}
                                />
                            })}

                    </div>
                    <ul className="pagination">
                        {[...Array(5)].map((_, i) => (
                            <li key={i} onClick={() => changePage(i + 1)}
                                className={page === i + 1 ? 'active' : ''}>{i + 1}</li>
                        ))}
                    </ul>
                </div>}
            </div>
        </div>
    );
};

export default Home;