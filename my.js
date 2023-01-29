
function addv(){
    const id = document.getElementById('taskn').value;
  
    const task = [];
    var input = document.getElementsByName('task[]');
  
   for (var i = 0; i < input.length; i++) {
       var a = input[i];
       task.push(a.value);
   }
  
    task.push(id);
    document.getElementById('taskn').value="";
    document.getElementById("addv").classList.add("d-none");
    document.getElementById("all").value = document.getElementById("all").value+","+id;
    document.getElementById("uncomplete").value=document.getElementById("uncomplete").value+","+id;
    document.getElementById("tlength").innerHTML = input.length+1;
    taskv();
  }
  
  function taskv(){
          
          var task = document.getElementById("all").value;
          var ab = 0;
        if(task.length==0){
          document.getElementById('task2').innerHTML="";
          document.getElementById("tlength").innerHTML = 0;
          return;
        }
          
         
          var task5 = task.charAt(0);
          if(task5==","){
            var task6 = task.slice(1);
          }
          else{
            var task6 = task;
          }
  
          
          task = task6.split(",");
  
          var cities = task;
          var task1 = ' ';
          
         
          cities.forEach(function(value,index){
  
            var task2 = document.getElementById("complete").value;
          var task3 = task2.slice(1);
          var task4 = task2.charAt(0);
          if(task4==","){
            var task3 = task2.slice(1);
          }
          else{
            var task3 = task2;
          }
          task2 = task3.split(",");
  if(task2.includes(value)){
    task1 += "<div id='t"+index+"' onclick='cp(this.id)'  class='task complete'><input id='c"+index+"' type='checkbox' checked value='"+value+"' name='task[]' class='checkbox-round'>" + value + "<span><i onclick='del("+index+")' class='fa fa-trash icon submit-d'></i></span></div>";
        ab++;
  }
  else{
    task1 += "<div id='t"+index+"' onclick='cp(this.id)'  class='task'><input id='c"+index+"' type='checkbox' value='"+value+"' name='task[]' class='checkbox-round'>" + value + "<span><i onclick='del("+index+")' class='fa fa-trash icon submit-d'></i></span></div>";
        ab++;
  }
          });
          document.getElementById("tlength").innerHTML = ab;
          document.getElementById("task2").innerHTML = task1;
          document.getElementById("al").classList.remove("grey");
          document.getElementById("uc").classList.add("grey");
          document.getElementById("comp").classList.add("grey");
        }
  
        
  function tasku(){
          
          var task = document.getElementById("all").value;
  var ab = 0;
          var task5 = task.charAt(0);
          if(task5==","){
            var task6 = task.slice(1);
          }
          else{
            var task6 = task;
          }
  
          
          task = task6.split(",");
  
          
          var cities = task;
          var task1 = ' ';
          
         
          cities.forEach(function(value,index){
  
            var task2 = document.getElementById("complete").value;
          var task3 = task2.slice(1);
          var task4 = task2.charAt(0);
          if(task4==","){
            var task3 = task2.slice(1);
          }
          else{
            var task3 = task2;
          }
          task2 = task3.split(",");
          
  if(task2.includes(value)){
  //  task1 += "<div id='t"+index+"' onclick='cp(this.id)'  class='task complete'><input id='c"+index+"' type='checkbox' value='"+value+"' name='task[]' class='checkbox-round'>" + value + "<span><i onclick='del("+index+")' class='fa fa-trash icon submit-d'></i></span></div>";
        
  }
  else{
    task1 += "<div id='t"+index+"' onclick='cp(this.id)'  class='task'><input id='c"+index+"' type='checkbox' value='"+value+"' name='task[]' class='checkbox-round'>" + value + "<span><i onclick='del("+index+")' class='fa fa-trash icon submit-d'></i></span></div>";
     ab++;   
  }
          });
          document.getElementById("tlength").innerHTML = ab;
          document.getElementById("task2").innerHTML = task1;
          document.getElementById("al").classList.add("grey");
          document.getElementById("uc").classList.remove("grey");
          document.getElementById("comp").classList.add("grey");
        }
  
             
  function taskc(){
          
          var task = document.getElementById("all").value;
  
  var ab=0;
          var task5 = task.charAt(0);
          if(task5==","){
            var task6 = task.slice(1);
          }
          else{
            var task6 = task;
          }
  
          
          task = task6.split(",");
  
          
          var cities = task;
          var task1 = ' ';
          
         
          cities.forEach(function(value,index){
  
            var task2 = document.getElementById("complete").value;
          var task3 = task2.slice(1);
          var task4 = task2.charAt(0);
          if(task4==","){
            var task3 = task2.slice(1);
          }
          else{
            var task3 = task2;
          }
          task2 = task3.split(",");
  if(task2.includes(value)){
    task1 += "<div id='t"+index+"' onclick='cp(this.id)'  class='task complete'><input id='c"+index+"' type='checkbox' checked value='"+value+"' name='task[]' class='checkbox-round'>" + value + "<span><i onclick='del("+index+")' class='fa fa-trash icon submit-d'></i></span></div>";
       ab++; 
  }
  else{
   // task1 += "<div id='t"+index+"' onclick='cp(this.id)'  class='task'><input id='c"+index+"' type='checkbox' value='"+value+"' name='task[]' class='checkbox-round'>" + value + "<span><i onclick='del("+index+")' class='fa fa-trash icon submit-d'></i></span></div>";
        
  }
          });
  
         
  
          document.getElementById("tlength").innerHTML = ab;
          document.getElementById("task2").innerHTML = task1;
          document.getElementById("al").classList.add("grey");
          document.getElementById("uc").classList.add("grey");
          document.getElementById("comp").classList.remove("grey");
        }
  
        function del(id){
          var cid = "c"+id;
          var checkBox = document.getElementById(cid); 
          if (checkBox.checked == false){
      var task = document.getElementById("uncomplete").value;
      var task4 = task.charAt(0);
          if(task4==","){
            var task1 = task.slice(1);
          }
          else{
            var task1 = task;
          }
          task = task1.split(",");
          for( var i = 0; i < task.length; i++){ 
      
      if ( task[i] === checkBox.value) { 
        task.splice(i, 1); 
      }
  
  }
          document.getElementById("uncomplete").value=task;
    } else {
      var task = document.getElementById("complete").value;
      var task4 = task.charAt(0);
          if(task4==","){
            var task1 = task.slice(1);
          }
          else{
            var task1 = task;
          }
          task = task1.split(",");
          for( var i = 0; i < task.length; i++){ 
      
      if ( task[i] === checkBox.value) { 
  
        task.splice(i, 1); 
      }
  
  }
          document.getElementById("complete").value=task;
    }
          var task = document.getElementById("all").value;
        
          var task4 = task.charAt(0);
          if(task4==","){
            var task1 = task.slice(1);
          }
          else{
            var task1 = task;
          }
  
  
          task = task1.split(",");
          var input = task;
   task.splice(id, 1);
   document.getElementById("all").value = task;
   document.getElementById("tlength").innerHTML = input.length-1;
    taskv();
        }
  
        function cp(id){
         
          var result = id.slice(1);
          var cid = "c"+result;
          var element = document.getElementById(id);
          var checkBox = document.getElementById(cid);  
    if (checkBox.checked == true){
      element.classList.add("complete");
      document.getElementById("complete").value=document.getElementById("complete").value+","+checkBox.value;
      var task = document.getElementById("uncomplete").value;
      var task4 = task.charAt(0);
          if(task4==","){
            var task1 = task.slice(1);
          }
          else{
            var task1 = task;
          }
          task = task1.split(",");
          for( var i = 0; i < task.length; i++){ 
      
      if ( task[i] === checkBox.value) { 
  
        task.splice(i, 1); 
      }
  
  }
          document.getElementById("uncomplete").value=task;
    } else {
      element.classList.remove("complete");
      document.getElementById("uncomplete").value=document.getElementById("uncomplete").value+","+checkBox.value;
      var task = document.getElementById("complete").value;
      var task4 = task.charAt(0);
          if(task4==","){
            var task1 = task.slice(1);
          }
          else{
            var task1 = task;
          }
          task = task1.split(",");
          for( var i = 0; i < task.length; i++){ 
      
      if ( task[i] === checkBox.value) { 
  
        task.splice(i, 1); 
      }
  
  }
          document.getElementById("complete").value=task;
    }
  
  
         
    
        }
        function cat(){
          
          var compl = document.getElementById("all").value;
    
          document.getElementById("complete").value = compl;
          document.getElementById("uncomplete").value = "";
          taskv();
        }
        function cc(){
      
          var task = document.getElementById("all").value;
  
  var complet = [];
          var task5 = task.charAt(0);
          if(task5==","){
            var task6 = task.slice(1);
          }
          else{
            var task6 = task;
          }
  
          
          task = task6.split(",");
  
          
          var cities = task;
          var task1 = ' ';
          
         
          cities.forEach(function(value,index){
  
            var task2 = document.getElementById("complete").value;
          var task3 = task2.slice(1);
          var task4 = task2.charAt(0);
          if(task4==","){
            var task3 = task2.slice(1);
          }
          else{
            var task3 = task2;
          }
          task2 = task3.split(",");
  if(task2.includes(value)){
    complet.push(index);
  }
  else{
   // task1 += "<div id='t"+index+"' onclick='cp(this.id)'  class='task'><input id='c"+index+"' type='checkbox' value='"+value+"' name='task[]' class='checkbox-round'>" + value + "<span><i onclick='del("+index+")' class='fa fa-trash icon submit-d'></i></span></div>";
        
  }
          });
          
  
        
                
              for (var i = complet.length -1; i >= 0; i--){
                  task.splice(complet[i], 1);
              }
  
  
          document.getElementById("all").value = task;
    
          document.getElementById("complete").value = "";
          document.getElementById("uncomplete").value = task;
  
          taskv();
  
  
  
        }
        function dsubmit(){
          var tl = document.getElementById('taskn').value;
          if(tl!=''){
            document.getElementById("addv").classList.remove("d-none");
          }
          else{
          document.getElementById("addv").classList.add("d-none");
          }
  
        }