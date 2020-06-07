# ![alt text](https://github.com/vaanessamota/ecoleta/blob/master/mobile/src/assets/logo.png)

 Ecoleta, um marketplace para pontos de coleta de resíduos. Projeto foi desenvolvido durante a NextLevelWeek 1.0.

## Tecnologias

* [Typescript](https://www.typescriptlang.org/)
* [NodeJS](https://nodejs.org/en/)
* [ReactNative](https://reactnative.dev/)
* [ExpressJS](https://expressjs.com/pt-br/)
* [KnexJS](http://knexjs.org/)
* [SQLite](https://www.sqlite.org/index.html)

## [Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta?node-id=136%3A546)

## API

  * Endpoint Items ` /items `
      * GET Criar Items
      * Data Response
      ```
      [
    {
        "id": 1,
        "name": "Lâmpadas",
        "image_url": "http://192.168.100.7:3333/uploads/lampadas.svg"
    },
    {
        "id": 2,
        "name": "Pilhas e Baterias",
        "image_url": "http://192.168.100.7:3333/uploads/baterias.svg"
    },
    ] 
    ```
      
   * Endpoint Points ` /points/id `
      * GET Listar ponto específico
      * Data Response
      
```   
    {
        "point": {
        "id": 4,
        "image": "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
        "name": "Mercado do seu Zé",
        "email": "contato@imperatriz.com.br",
        "whatsapp": "4761545465",
        "latitude": -46.556465,
        "longitude": -35.56545,
        "city": "Sao Luis",
        "uf": "MA"
    },
    "items": [
        {
            "title": "Óleo de Cozinha"
        }
    ]}   
```
 
 * Endpoint Points ` /points `
      * GET Listar ponto filtrado
      Query Params: city, uf, items 
      * Data Response
      
      
```      
[
    {
        "id": 4,
        "image": "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
        "name": "Mercado do seu Zé",
        "email": "contato@imperatriz.com.br",
        "whatsapp": "4761545465",
        "latitude": -23.3255345,
        "longitude": -54.54325,
        "city": "Sao Luis",
        "uf": "MA"
    },
    {
        "id": 6,
        "image": "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
        "name": "Mercado do João",
        "email": "contato@imperatriz.com.br",
        "whatsapp": "4761545465",
        "latitude": -54.54354,
        "longitude": -56.46565,
        "city": "Sao Luis",
        "uf": "MA"
    }
]
```
      
  * Endpoint Points ` /points `
      * POST Criar ponto de coleta
      * Campos: name, email, whatsapp, latitude, longitude, city, uf, items[] 
      
