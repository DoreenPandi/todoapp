const pool = require("./db");

const sql = 'INSERT INTO public.assignment (cat_id, todo_id) VALUES ($1,$2) RETURNING *';
const data = [3,4];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	}else{
		console.log(res.rows[0]);
	}
});

pool.end();