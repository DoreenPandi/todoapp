const pool = require("./db");
const sql = 'UPDATE public.assignment SET cat_id = $1, todo_id = $2  WHERE ass_id=6 RETURNING *';
const data = [2,4];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	}else{
		console.log(res.rows[0]);
	}
});

pool.end();