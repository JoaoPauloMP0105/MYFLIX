import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FomField';


  
  


function Video() {

  const valoresIniciais = {
    titulo: '',
    linkVideo: '',
    imgVideo: '',
    categoria: '',
    description: '',

  }

  const [videos, setVideos] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
        <h1>Cadastrar video</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setVideos([
            ...videos,
            values
          ]);

          setValues(valoresIniciais)
      }}>
        <FormField

          label="Titulo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}

        />
        <FormField

          label="Link do video"
          type="url"
          name="linkVideo"
          value={values.linkVideo}
          onChange={handleChange}

        />
        <FormField

          label="Image do video"
          type="url"
          name="imgVideo"
          value={values.imgVideo}
          onChange={handleChange}

        />
        <FormField

          label="Categoria"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />
        <FormField

          label="Descrição"
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}

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