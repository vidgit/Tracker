document.getElementById('issueInputForm').addEventListener('submit',saveIssue);
var uid;
$(document).ready(function () {
    $('select').material_select();
});
function generateUID(){
    if (localStorage.getItem('lastUID')==null){
        localStorage.setItem("lastUID",1);
        uid = 0;
    }
    else{
        uid = parseInt(localStorage.getItem("lastUID"));
        localStorage.setItem("lastUID", uid+1);
    }
    return uid+1;
}

function saveIssue(e){
    var issueDesc = document.getElementById("issueDescription").value;
    var issueSeverity = document.getElementById("issueSeverity").value;
    var assignee = document.getElementById("assignee").value;
    var issueID = generateUID();
    var issueStatus = "Open";

    var issue = {
        id: issueID,
        description:issueDesc,
        severity:issueSeverity,
        assignedTo:assignee,
        status:issueStatus,
        id:issueID
    };

    if(localStorage.getItem('issues') == null){
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }
    else{
        var issues = JSON.parse(localStorage.getItem("issues"));
        issues.push(issue);
        localStorage.setItem('issues',JSON.stringify(issues));
    }

    document.getElementById("issueInputForm").reset();
    fetchIssues();
    e.preventDefault();

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
            var severity =  issues[i].severity;
            var assignee = issues[i].assignedTo;
            var status = issues[i].status;

            issuesList.innerHTML += '<div class="">'+
                                    '<h6>Issue ID:'+id+' </h6>'+
                                    '<p><span class="">'+status+'</span></p>'+
                                    '<h3>'+desc+'</h3>'+
                                    '<p><span class=""></span>' + severity +"</p>"+
                                    '<p><span class=""></span>' + assignee + "</p>"+
                                    '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="col-xs-3 btn btn-warning">Close</a>'+
                                    '<a href="# onclick="deleteIssue(\'' + id +'\')" class="col-xs-3 btn btn-danger"> Delete </a>'+
                                    '</div>';
            }
    }
}