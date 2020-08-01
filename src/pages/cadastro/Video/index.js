import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';



function Video() {
  return (
    <PageDefault>
        <h1>Cadastrar video</h1>

        <Link to="/cadastro/categoria">
            Cadastrar Categoria            
        </Link>
                
    </PageDefault>
  );
}

export default Video;