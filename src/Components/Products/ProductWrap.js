import React, { Component } from 'react'
import { Outlet } from 'react-router'

export default class ProductWrap extends Component {
    render() {
        return (
            <div>
                <br />
                <h2>SECCION PRODUCTOS</h2>
                <br />
                <Outlet/>
            </div>
        )
    }
}
