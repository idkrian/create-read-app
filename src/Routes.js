import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Home from './views/Home'
import CadastroProduto from './views/produtos/cadastro'
import ConsultaProdutos from './views/produtos/consulta'

function Routes() {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>

                    <Route exact path='/cadastro-produtos/:sku?' component={CadastroProduto}/>

                    <Route exact path='/consulta-produtos' component={ConsultaProdutos}/>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Routes
