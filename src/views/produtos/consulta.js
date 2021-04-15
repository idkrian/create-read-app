import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import ProdutoService from './../../app/produtoService'
import {withRouter} from 'react-router-dom'

class ConsultaProdutos extends Component {

    state ={
        produtos : []
    }
    
    constructor(){
        super()
        this.service = new ProdutoService()
    }

    componentDidMount(){
        const produtos = this.service.obterProdutos()
        this.setState({produtos})
    }

    preparaEditar = (sku) =>{
        this.props.history.push(`/cadastro-produtos/${sku}`)
    }

    render() {      
        return (
            <div>
                <Navbar/>
                <div className='card-header'>
                        Consulta dos Produtos
                </div>

                <div className='card-body'>

                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Nome:</th>
                                <th>SKU:</th>
                                <th>Preço:</th>
                                <th>Fornecedor</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produtos.map( produto=>{
                                    return(
                                        <tr>
                                            <th>{produto.nome}</th>
                                            <th>{produto.sku}</th>
                                            <th>{produto.preco}</th>
                                            <th>{produto.fornecedor}</th>
                                        </tr>
                        )})
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(ConsultaProdutos) 
