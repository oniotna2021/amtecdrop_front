import React, { Component } from 'react'

export default class pago extends Component {
    render() {
        return (
            <div>
                <h3>Bienvenido al sistema de pago de Soluciones AMTEC</h3>
        <form>
            <script src='https://checkout.epayco.co/checkout.js' 
                data-epayco-key='5ea90beb13cfef4ed7ae7037d43e6111' 
                class='epayco-button' 
                data-epayco-amount='40000' 
                data-epayco-tax='0'
                data-epayco-tax-ico='0'                
                data-epayco-tax-base='40000'
                data-epayco-name='zapatos' 
                data-epayco-description='zapatos' 
                data-epayco-currency='cop'    
                data-epayco-country='CO' 
                data-epayco-test='true' 
                data-epayco-external='false' 
                data-epayco-response=''  
                data-epayco-confirmation='' 
                data-epayco-button='https://multimedia.epayco.co/dashboard/btns/btn5.png'> 
            </script> 
        </form>
                
            </div>
        )
    }
}
