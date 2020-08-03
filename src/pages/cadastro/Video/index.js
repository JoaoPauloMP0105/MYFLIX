import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FomField';



function Video() {
  return (
    <PageDefault>
        <h1>Cadastrar video</h1>

      <form action="">
        <FormField

          label="Titulo"
          type="text"
          name="titulo"
          value="Titulo"

        />
        <FormField

          label="Link do video"
          type="url"
          name="link"
          value="http://"

        />
        <FormField

          label="Image do video"
          type="url"
          name="image do video"
          value="http://link-da-image-do-video"

        />
        <FormField

          label="Categoria"
          type="text"
          name="categoria"
          value="Filmes"
        />
        <FormField

          label="Descrição"
          type="text"
          name="description"
          value="Descrição"

        />
      </form>
      <div>
        <button className="ButtonLink">
          Salvar
        </button>
        <Link className="ButtonLink" to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>

      </div>
        
                
    </PageDefault>
  );
}

export default Video;