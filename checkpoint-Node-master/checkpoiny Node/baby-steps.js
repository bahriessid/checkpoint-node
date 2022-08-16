
console.log(process.argv.filter((el,id)=>id>1).reduce((prev,current)=>
Number(prev)+Number(current),0))