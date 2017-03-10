// Event handling
var iot1 = 50;
var iot2 = 75;
var os1 = 55;
var os2 = 92;
var mpmc1 = 73;
var mpmc2 = 61;
// document.addEventListener("DOMContentLoaded",
//   function (event) {
    
    function sayHello () {
      this.textContent = "Update Marks";

      var name =
       document.getElementById("name").value;
      var iot = 
        document.getElementById("IOT").checked;
      var os = 
        document.getElementById("OS").checked;
      var mpmc = 
        document.getElementById("MPMC").checked;

      console.log(iot);
      console.log(os);
      console.log(mpmc);
       // var message = "<h2>Hello " + name + "!</h2>";

      // document
      //   .getElementById("content")
      //   .innerHTML = message;

      if (name === "abc") {
      document
        .getElementById("content")
        .innerHTML = "Please Check a Course";
      }
      if(name === "abc" && iot){
        document
        .getElementById("content")
        .innerHTML = "Hello "+name+" you Marks are as follows :<br>IOT : "+iot1;
      }
      if(name === "abc" && os){
        document
        .getElementById("content")
        .innerHTML = "Hello "+name+" you Marks are as follows :<br>OS : "+os1;
      }
      if(name === "abc" && mpmc){
        document
        .getElementById("content")
        .innerHTML = "Hello "+name+" you Marks are as follows :<br>MPMC : "+mpmc1;
      }
      if(name === "abc" && iot && os){
        document
        .getElementById("content")
        .innerHTML = "Hello "+name+" you Marks are as follows :<br>IOT : "+iot1+"<br>OS : "+os1;
      }
      if(name === "abc" && iot && mpmc){
        document
        .getElementById("content")
        .innerHTML = "Hello "+name+" you Marks are as follows :<br>IOT : "+iot1+"<br>MPMC : "+mpmc1;
      }
      if(name === "abc" && os && mpmc){
        document
        .getElementById("content")
        .innerHTML = "Hello "+name+" you Marks are as follows :<br>OS : "+os1+"<br>MPMC : "+mpmc1;
      }
      if(name === "abc" && iot && os && mpmc){
        document
        .getElementById("content")
        .innerHTML = "Hello "+name+" you Marks are as follows :<br>IOT : "+iot1+"<br>OS : "+os1+"<br>MPMC : "+mpmc1;
      }



            if (name === "xyz") {
      document
        .getElementById("content")
        .innerHTML = "Please Check a Course";
      }
      if(name === "xyz" && iot){
        document
        .getElementById("content")
        .innerHTML = "Hello "+name+" you Marks are as follows :<br>IOT : "+iot2;
      }
      if(name === "xyz" && os){
        document
        .getElementById("content")
        .innerHTML = "Hello "+name+" you Marks are as follows :<br>OS : "+os2;
      }
      if(name === "xyz" && mpmc){
        document
        .getElementById("content")
        .innerHTML = "Hello "+name+" you Marks are as follows :<br>MPMC : "+mpmc2;
      }
      if(name === "xyz" && iot && os){
        document
        .getElementById("content")
        .innerHTML = "Hello "+name+" you Marks are as follows :<br>IOT : "+iot2+"<br>OS : "+os2;
      }
      if(name === "xyz" && iot && mpmc){
        document
        .getElementById("content")
        .innerHTML = "Hello "+name+" you Marks are as follows :<br>IOT : "+iot2+"<br>MPMC : "+mpmc2;
      }
      if(name === "xyz" && os && mpmc){
        document
        .getElementById("content")
        .innerHTML = "Hello "+name+" you Marks are as follows :<br>OS : "+os2+"<br>MPMC : "+mpmc2;
      }
      if(name === "xyz" && iot && os && mpmc){
        document
        .getElementById("content")
        .innerHTML = "Hello "+name+" you Marks are as follows :<br>IOT : "+iot2+"<br>OS : "+os2+"<br>MPMC : "+mpmc2;
      }



    }