import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';



function Categoria() {
  return (
    <PageDefault>
        <h1>Cadastrar Categoria</h1>

        <Link to="/">
            Ir para home            
        </Link>
                
    </PageDefault>
  );
}

export default Categoria;