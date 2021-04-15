import React from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            <Navbar/>
            <div className="jumbotron">
                <h1 className="display-3">Oi!</h1>
                <p className="lead">Esse é um web-app simples feito em ReactJs para  
                cadastrar e ler produtos!</p>
                <hr className="my-4"/>
                <p>Clique abaixo para registrar!</p>
                <p className="lead">
                    <Link className="btn btn-primary btn-lg" to='/cadastro-produtos' role="button">Cadastrar</Link>
                </p>
            </div>
        </div>
    )
}

export default Home
