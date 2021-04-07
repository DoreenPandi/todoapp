const pool = require("./db");
const sql = 'UPDATE public.category SET cat_desc = $1 WHERE cat_id=4 RETURNING *';
const data = ['HOBBY'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	}else{
		console.log(res.rows[0]);
	}
});

pool.end();