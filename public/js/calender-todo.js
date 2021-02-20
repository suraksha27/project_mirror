let calenderData={
    '1/20/2021':['Do laundry','Catch mouse','Do toilet']
}

const addTodo=(todoCommand)=>{
    if(!calenderData['1/19/2021']){
        calenderData['1/19/2021']=['New data inserted']
      }else if(calenderData['1/19/2021'].length<5){
        calenderData['1/19/2021'].push('Added to existing one')
      }
}