import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import FormData from '../page/FormData'

export default class ConfigRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/form-data-diri' element={<FormData/>}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}
