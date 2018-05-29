function fetchIssues(){
    var issues = JSON.parse(localStorage.getItem("issues"));
    if(issues === null){
        Console.log("No Issues to load.");
    }
}