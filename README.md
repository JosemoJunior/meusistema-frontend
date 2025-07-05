# Meu Sistema Front-end
Projeto Front-end em ReactJs do Curso Presencial Programação FullStack


## Bibliotecas:

- react-bootstrap bootstrap
- react-router-dom
- react-icons
- react-input-mask
- axios
- json-server

``````bash
npm install react-router-dom axios json-server react-bootstrap bootstrap react-icons react-input-mask
``````

### Lembre-se, é necessário importar o bootstrap no arquivo main.jsx

```JS
import 'bootstrap/dist/css/bootstrap.min.css'
``````````

### Configuração do JSON-SERVER:

- No package.json, insira um script novo:
```Json
    "server": "json-server --watch data/db.json"
``````

- NO DIRETORIO RAIZ: Crie uma pasta e aquivos: data/db.json 
- Dentro dele inicialize as tabelas do banco de dados:

```Json
{
    "fornecedores": [],
    "produtos": [],
    "clientes": []
}
``````

