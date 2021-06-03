import React from 'react'
import ReactDOM from 'react-dom';
import LisctarMoedas from './listar-moedas';

describe('Teste do componente de listagem de moedas', () => {

    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LisctarMoedas/>,div);
        ReactDOM.unmountComponentAtNode(div);
    });

});