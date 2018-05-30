document.getElementById('issueInputForm').addEventListener('submit',saveIssue);

function saveIssue(e){
    
}

function fetchIssues(){
    var issues = JSON.parse(localStorage.getItem("issues"));
    if(issues === null){
        console.log("No Issues to load.");
    }
    else{
        var issuesList = document.getElementById("issues");
        issuesList.innerHTML = "";

        for( var i = 0; i<issues.length; i++){
            var id= issues[i].id;
            var desc = issues[i].description;
            var severity =  issues.severity;
            var assignee = issues[i].assignedTo;
            var status = issues[i].status;

            issuesList.innerHTML += '<div class="well" >'+
                                    '<h6>Issue ID:'+id+' </h6>'+
                                    '<p><span class="label label-info">'+status+'</span></p>'+
                                    '<h3>'+desc+'</h3>'+
                                    '<p><span class="glyphicon glyphicon-time"></span>' + severity +"</p>"+
                                    '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo + "</p>"+
                                    '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>'+
                                    '<a href="# onclick="deleteIssue(\'' + id +'\')" class="btn btn-danger"> Delete </a>'+
                                    '</div>';
            }
    }
}