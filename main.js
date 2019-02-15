function loadjson(file,callback) {
  var xhr =new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange =function(){
    if (xhr.readyState === 4 && xhr.status == "200")
     {
      callback(xhr.responseText);
    }

  }
  xhr.send(null);

}
loadjson("data.json",function(text) {
  var data = JSON.parse(text)
  console.log(data);
  details(data.basic);
  careerinfo(data.info);
  educationdetails(data.education);
  tech(data.Skills);

})
var left = document.querySelector(".leftChild");
function details(det) {
  var photo = document.createElement("img");
  photo.src= det.image;
  left.appendChild(photo);
  var name = document.createElement("h3");
  name.textContent = det.name;
  left.appendChild(name);

 var mail = document.createElement("a");
 mail.herf = "mailto:madhubabupamuu@gmail.com";
 mail.textContent = det.email;
  left.appendChild(mail);

  var number = document.createElement("p");
   number.textContent = det.number;
    left.appendChild(number);

   var add = document.createElement("h3");
    add.textContent = "Address";
    left.appendChild(add);

    var hr = document.createElement("hr");
    left.appendChild(hr);

    var add1 = document.createElement("p");
    add1.textContent=det.address;
    left.appendChild(add1);
  }
  var right = document.querySelector(".rightChild");
  function careerinfo(infodata)
  {
    var car = document.createElement("h3");
     car.textContent = "career object";
     right.appendChild(car);

     var ceradd = document.createElement("p");
     ceradd.textContent = infodata.career;
     right.appendChild(ceradd);
}

function educationdetails(edu) {


     var ed = document.createElement("h3");
      ed.textContent = "Education Details";
      right.appendChild(ed);

      var tab =document.createElement("table");
      tab.border = "1";
      var tr1 ="<tr><th>instution</th><th>degree</th><th>passout</th></tr>";
      var tr2= "";

      for (var i = 0; i < edu.length; i++)
       {
        tr2+="<tr><td>"+edu[i].instution+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passout+"</td>";
      }
      tab.innerHTML=tr1+tr2;
      right.appendChild(tab);
}
function tech(sk) {
  var hr = document.createElement("h3");
  hr.textContent ="TechnicalSkills";
  right.appendChild(hr);

  var ul = document.createElement("ul");
  for (var i = 0; i < sk.length; i++) {
    var li = document.createElement("li");
    li.textContent = sk[i].title+ ":" +sk[i].content;
    ul.appendChild(li);
  }
  right.appendChild(ul);

}
