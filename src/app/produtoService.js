import React, { Component } from 'react'

const PRODUTOS = '_PRODUTOS'

export default class produtoService extends Component {
   
    obterProdutos = () =>{
        let produtos = localStorage.getItem(PRODUTOS)

        return JSON.parse(produtos)
    }

    obterIndex = (sku) =>{
        let index = null
        this.obterProdutos().forEach((produto, i) =>{
            if(produto.sku === sku){
                index = i;
            }
        })
        return index
    }
    salvar = (produto) =>{
       let produtos = localStorage.getItem(PRODUTOS)
       if(!produtos){
           produtos = []
       }else{
           produtos = JSON.parse(produtos)
       }

       localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

