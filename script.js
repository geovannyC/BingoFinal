const {Pool } = require('pg');
let numeros = require('./js/bingo')
let numLanzados = require('./js/lanzar')
const config ={
    user: 'postgres',
    host: 'localhost',
    password: 'marcelo272',
    database: 'Bingo'
};
const pool = new Pool (config)
const datUsr = async() =>{
    try{
        const datUsr=await pool.query('select * from cartillas2(info) WHERE ');
        console.log(datUsr.rows);
        pool.end();
    }catch(error){
        console.log(error)
    }
}
const insertUsr=async() =>{
    const text= "INSERT INTO cartillas2(info) VALUES ($1)"
    const VALUES=[numeros.paraInsertart()]

    const res = await pool.query(text, VALUES);
    
    
}
const deleteUsr = async() =>{

    const text = 'DELETE FROM numLanzados';
    
    const res = await pool.query(text);
    
}
const deleteCartillas = async() =>{

    const text = 'DELETE FROM cartillas2';
    
    const res = await pool.query(text);
    
}

const actualizaUsr =async ()=>{
    // if (pool.query('select * from numLanzados'))
    // {
    //     const text = 'UPDATE numLanzados SET info = $1 WHERE id = $2';
    //     const values = [numLanzados.exportar2() , 1];
    //     const res = await pool.query(text,values);
        
    // }else{
        try{
          
        const text= "INSERT INTO numLanzados(id,lanzados) VALUES ($1,$2)"
        const VALUES=[1,numLanzados.exportar2()]
        const res = await pool.query(text, VALUES);
        console.log(numeros.numerosUs())
        }catch{
        const text = 'UPDATE numLanzados SET lanzados = $1 WHERE id = $2';
        const values = [numLanzados.exportar2() , 1];
        const res = await pool.query(text,values);
        for(let i =0; i>numeros.numerosUs().length;i++){
            if(numLanzados.exportar2().includes(numeros.numerosUs()[i])){
                const text = "UPDATE INTO cartillas2(Ganador) SET Ganador = $1 WHERE id = $2";
                const VALUES = ['Gano',i]
                const resp =  pool.query(text, VALUES);
            }
        }
    }
    // }
    
 
    
}
exports.insertUsr = insertUsr;
exports.actualizaUsr =actualizaUsr;