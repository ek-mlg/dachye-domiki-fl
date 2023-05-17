import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
export default (
    <BrowserRouter>
        <Route path={'/main'} />
        <Route path={'/services'} />
        <Route path={'/about'} />
        <Route path={'/contacts'} />
        <Route path={'/catalog'} />
        <Route path={'/error404'} />
    </BrowserRouter>
)