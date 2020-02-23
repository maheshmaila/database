 var sub = document.getElementById('Submit').addEventListener('click', function(){
     var gendrvalue;
     if(document.getElementById('male').checked)
     {
         gendrvalue= 'male'
     }
     else if(document.getElementById('female').checked){
         gendrvalue='female'
     }
    var Mytask = JSON.parse(localStorage.getItem('Mytask')) || [];
    var allinputsdisplay  = JSON.parse(localStorage.getItem("Mytask"));   

   if(document.getElementById("frstname").value != '' && document.getElementById("lastname").value != ''&& document.getElementById('email').value != '' 
            && document.getElementById('phn').value != '' && document.getElementById('password').value != '' && gendrvalue != '')
    {
    var taskObject = [{first:document.getElementById("frstname").value},
    {last:document.getElementById("lastname").value},
    {password:document.getElementById('password').value},
    {email:document.getElementById('email').value},
    {phn:document.getElementById('phn').value},
    {gender:gendrvalue}
    ];
    Mytask.push(taskObject);
    localStorage.setItem("Mytask", JSON.stringify(Mytask));
    // location.replace("index.html");
}
console.log(allinputsdisplay)
// localStorage.clear();
})