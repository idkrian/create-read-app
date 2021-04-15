import React from 'react'
import Navbar from '../../components/Navbar'
import ProdutoService from '../../app/produtoService'
import {withRouter} from 'react-router-dom'

const estadoInicial = {
    nome: '',
    sku: '',
    preco: 0,
    fornecedor: '',
    descricao: '',
    sucesso: false
}

class CadastroProduto extends React.Component {

    constructor() {
        super()
        this.service = new ProdutoService()
    }

    state = estadoInicial

    onSubmit = (e) => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor,
            descricao: this.state.descricao
        }
        this.service.salvar(produto)
        this.limpaCampos()
        this.setState({sucesso: true})
    }

    onChange = (e) => {
        const valor = e.target.value
        const nomeDoCampo = e.target.name
        this.setState({ [nomeDoCampo]: valor })
    }

    limpaCampos = () => {
        this.setState({
            nome: '',
            sku: '',
            preco: 0,
            fornecedor: '',
            descricao: ''
        })
    }

    componentDidMount(){
        const sku = this.props.match.params.sku

        if(sku){
           const resultado = this.service.obterProdutos().filter( produto => produto.sku === sku)
           if(resultado.length === 1){
               const produtoEncontrado = resultado[0]
               this.setState({...produtoEncontrado})
           }
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='card'>
                    <div className='card-header'>
                        Cadastro do Produto
                    </div>                

                    {this.state.sucesso ? (
                        <div class="alert alert-dismissible alert-success">
                            <button type="button" class="close" data-dismiss="alert">&times;</button>
                            <strong>Parabéns!</strong> Cadastro Realizado com sucesso!
                        </div>)
                        :
                        (<></>)                                   
                    }


                    <div className='card-body'>

                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label htmlFor="">Nome: </label>
                                    <input type="text" name='nome' onChange={this.onChange} value={this.state.nome} className="form-control" />
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label htmlFor="">SKU: </label>
                                    <input type="text" name='sku' onChange={this.onChange} value={this.state.sku} className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label htmlFor="">Descrição:</label>
                                    <textarea className="form-control" onChange={this.onChange} name='descricao' value={this.state.descricao}></textarea>
                                </div>
                            </div>


                        </div>

                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label htmlFor="">Preço: </label>
                                    <input type="text" value={this.state.preco} onChange={this.onChange} name='preco' className="form-control" />
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label htmlFor="">Fornecedor: </label>
                                    <input type="text" className="form-control" onChange={this.onChange} name='fornecedor' value={this.state.fornecedor} />
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-1'>
                                <button onClick={this.onSubmit} className='btn btn-outline-success'>Salvar</button>
                            </div>

                            <div className='col-md-1'>
                                <button className='btn btn-outline-primary' onClick={this.limpaCampos}>Limpar</button>
                            </div>

                        </div>

                    </div>
                    
                </div>
            </div>
        )
    }

}

export default withRouter(CadastroProduto)
