var i;
function loadData(){
	var xhttp = new XMLHttpRequest;
	xhttp.onreadystatechange = function (){
		if(this.status == 200 && this.readyState == 4){
			handleResponse(this);
		}
	};

	function handleResponse(obj){
		var data = JSON.parse(obj.responseText);
		var button =  document.getElementById("button");
		var name = document.getElementById("name").value.toLowerCase();
		var output = document.getElementById("select");
		var flag = 0;
		for(i = 0; i < data.length ; i++){
			if (data[i].name == name) {
				flag = 1;
				break;
			}
		}

		if(flag == 0 && name == ""){
			output.innerHTML = "Please Enter Your Name !";
		}else if(flag == 0){
			output.innerHTML = "No Records were found by that name !";
		}else{
			var lec_percent = ((data[i].wp_lec.att/data[i].wp_lec.con)*100).toFixed(2);
			if (lec_percent > 100){ lec_percent = 100}
			var lab_percent = ((data[i].wp_lab.att/data[i].wp_lab.con)*100).toFixed(2);
			if (lab_percent > 100) {lab_percent = 100}
			output.innerHTML = "Hello "+name.charAt(0).toUpperCase()+name.slice(1)+",<br>";
			output.innerHTML+= "Your WP Lecture Attendance : "+lec_percent+"%<br>";
			output.innerHTML+= "Your WP Lab Attendance : "+lab_percent+"%<br>";
			if(lab_percent<80 || lec_percent <80){
				output.innerHTML+= "<span style='color:red;'>Defaulter</span><br>";
			}
		}
	}
	xhttp.open("GET","data/data.json");
	xhttp.send();
}