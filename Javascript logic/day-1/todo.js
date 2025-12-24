let todo = [];

let req = prompt("please enter your request");

while(true){
    if(req == 'quit'){
        console.log("app close");
        break;
    }

    if(req == 'list'){
        console.log('-------');
        for(task of todo){
            console.log(task);
        }
        console.log('--------');
    }
    else if(req == 'add'){
        let task = prompt('enter to add todo');
        todo.push(task);
        console.log(`task is added #${task}`);
    }
    else if(req == 'delete'){
        let idx = prompt('enter the index of task');
        todo.splice(idx,1);
        console.log('task added');
    }
    else{
        console.log('wrong input ,enter valid request ')
    }

    req = prompt('enter the request again or type quit');
}