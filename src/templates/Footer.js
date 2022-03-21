import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <br />
                <br />

                <footer className="py-5 bg-dark">
                    <div className="container">
                        <p className="m-0 text-center text-white">Copyright &copy; soluciones AMTEC</p>
                    </div>

                    <div className="col-auto text-center">
                        <router-link className="m-0 text-center text-white" to="/terminos">Terminos y Condiciones</router-link>
                    </div>
                    <div className="col-auto text-center">
                        <router-link className="m-0 text-center text-white" to="/privacidad">Política de privacidad</router-link>
                    </div>
                </footer>
            </div>
        )
    }
}
