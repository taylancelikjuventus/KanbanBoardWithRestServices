
//returns user by Id in JSON format
async  function getUser(url, userid) {

    const path = url + userid;
    let response = await fetch(path);
    let data = await response.json();
    return data;
}
async  function getAllUsers(url) {

    const path = url;
    let response = await fetch(path);
    let data = await response.json();
    return data;
}

//add new user
 async function addUser(url, username) {

    const path = url ;
    const uname = username;
    
    let response =  await fetch(path ,
    {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            username : uname
        })
    }
    )
    let data = await response.json();
    return data;
   
   
}

//add new user
 async function editUser(url,userid,username) {

    const path = url ;
    
    let response =  await fetch(path ,
    {
        method: "PUT",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            userid:userid ,
            username:username
        })
    }
    )
    let data = await response.json();
    return data;
   
   
}


//deletes user
async function deleteUser(url, userid) {

    const path = url ;
    let response =  await fetch(path ,
    {
        method: "DELETE",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            userid:userid
        })
    }
    )
   
    let data = await response.json();
    return data;
   
   
}


//////////////////Task functions//////////////////

//returns all tasks of  user with userid
async  function getTasksOfUser(url, userid) {

    const path = url + userid;
    let response = await fetch(path);
    let data = await response.json();
    return data;
}

//update taskstatus for provided taskid
async function updateTaskStatus(url, taskid, taskstatus) {

    const path = url + taskid.toString();
    let response = await fetch(path, {
        method: "PUT",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            newtaskstatus: taskstatus
        })
    }) .then(
            /*
            res => {
                return res.json()
            }*/
    ).then(
            data => {
                return data
            }
    ).catch(
            err => console.log(err)
    );
    
   
  
}

//delete task
async function deleteFromTask(url, taskid) {

    const path = url ;
    let response = await fetch(path, {
        method: "DELETE",
        headers: {
       'content-type': 'application/json'},
        body: JSON.stringify({
         taskid:taskid
        })
    }) 
    
     let data = await response.json();
    return data;
}

//edit task
async function editTaskById(url,taskid,taskname,tasktext,taskstatus,deadline,userid){
    
     const path = url + taskid ;
    let response = await fetch(path, {
        method: "PUT",
        headers: {
       'content-type': 'application/json'},
        body: JSON.stringify({
          taskname : taskname, 
          tasktext : tasktext, 
          taskstatus : taskstatus, 
          deadline : deadline, 
          userid : userid
        })
    }) 
    
     let data = await response.json();
     return data;
    
    
}


//add to task
async function addNewTask(url,taskname,tasktext,taskstatus,deadline,userid){
    
     const path = url;
    let response = await fetch(path, {
        method: "POST",
        headers: {
       'content-type': 'application/json'},
        body: JSON.stringify({
          taskname : taskname, 
          tasktext : tasktext, 
          taskstatus : taskstatus, 
          deadline : deadline, 
          userid : userid
        })
    }) 
    
     let data = await response.json();
     return data;
    
    
}

