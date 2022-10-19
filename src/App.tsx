import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import Home from "./pages/Home";

const FullCollection = React.lazy(() => import(/* webpackChunkName: "FullCollection" */'./pages/FullCollection'))
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */'./pages/NotFound'))

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='collection/:id' element={
                    <React.Suspense fallback={<div><Preloader/></div>}>
                        <FullCollection/>
                    </React.Suspense>
                }/>
                <Route path='*' element={
                    <React.Suspense fallback={<div><Preloader/></div>}>
                        <NotFound/>
                    </React.Suspense>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
