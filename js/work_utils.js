/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.getCurrentWork = function(){
  var selectedJob = null;
  var currentDate = new Date();
  
  //Check each job
  window.jobs.forEach(function(job){
    
    //Check each times
    job.times.forEach(function(jobTime){
      //Got one already?
      if (selectedJob !== null) {
        return;
      }
      
      //Check day of week
      if (jobTime.day_of_week !== null && currentDate.getDay() !== jobTime.day_of_week) {
        return;
      }
      
      //Check hour of day
      if (currentDate.getHours() < jobTime.start.hour) {
        return;
      } else if (currentDate.getHours() >= jobTime.end.hour) {
        return;
      }
      
      //We have a match
      selectedJob = job;
      
    });
    
  });
  
  //Check to see if there were matches
  if (selectedJob === null) {
    return {
      name: "Unknown!",
      description: "There whereabouts of Ollie is unknown",
      background_color: "",
      foreground_color: "",
      interuptable: true
    };
  }
  
  return selectedJob;
  
}

window.updateWork = function(){
  var job = window.getCurrentWork();
  
  document.getElementById("shortName").innerHTML = window.shortName;
  
  document.getElementsByTagName("body")[0].style.backgroundColor = "#" + job.background_color;
  document.getElementById("job").style.color = "#" + job.foreground_color;
  document.getElementById("title").innerHTML = job.name;
  document.getElementById("description").innerHTML = job.description;
  document.getElementById("title").innerHTML = job.name;
  document.getElementById("interuptable").innerHTML = job.interuptable ? "I am interuptable" : "Please do not interupt me! I may bite!";
  document.getElementById("interuptable").className = job.interuptable ? "yes" : "no";
  
  
}


