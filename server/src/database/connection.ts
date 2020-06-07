import knex from 'knex';
import path from 'path';

//__dirname retorna o caminho pro diretorio do arquivo que ta executando


const connection = knex({
    client: 'sqlite3',
    connection:{
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default connection;