
document.getElementById('login').addEventListener('click', function(){
var allinputsdisplay = JSON.parse(window.localStorage.getItem("Mytask"));   
 console.log(allinputsdisplay[2][2].password)
var log1= false;
 for(i=0;i<allinputsdisplay.length;i++)
 {
        if(document.getElementById('password').value == allinputsdisplay[i][2].password && document.getElementById('email').value == allinputsdisplay[i][3].email){
           location.href = "index.html"
            // console.log('logged in')
            log1= true;
        }
}
if (log1== false)
{
    alert('Incorrect UserName or Password')
}
})