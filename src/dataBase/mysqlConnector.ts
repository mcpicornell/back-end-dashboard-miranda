import mysql from 'mysql2/promise';


export const queryDb = async<T>(query: string, params: any[] | null): Promise<T[]> => {
    const connected: mysql.Connection | null = null;
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'admin',
            password: 'admin',
            database: 'miranda_db'
        })
        console.log(query)
        console.log(params)
        const [rows] = await connection.execute(query, params);
        
        return rows as T[];
    }
    catch (error) {
        console.log(error);
        throw error;
    }
    finally {
        if(connected){
            (connected as mysql.Connection).end();
        }
    }
}


