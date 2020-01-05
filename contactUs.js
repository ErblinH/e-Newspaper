
	//Perdorimi i metodes toString()
	//Perdorimi i objektit Date
function fillimi(){
    document.getElementById("nowButton").addEventListener("click",printoTani,false);
  }

    function printoTani(){
    var tani=new Date();
    window.alert("Time and date \n" +tani.toString());
    }
//Perdorimi i metodes match() dhe perdorimi i RegEx / gi
    function specialChars(){
      var teksti = document.getElementById("username").value;
      var special = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi;
      var res = teksti.match(special);
      if(res != null){
           var teksti2 = document.getElementsByName("username")[0];
           teksti2.value='';
           teksti2.placeholder='No special character';
           teksti2.classList.add("error");
           return false;
      }
      return true;
    }

//Perdorimi i try-catch dhe definimi i gabimit permes Throw, perdorimi i metodes toExponential(), perdorimi i konstantes MAX_VALUE,
// parseFloat,Math.max(), Math.floor, Math.sqrt()
function multiply(){
    document.getElementById("multiply").addEventListener("click",shumezo,false);}
function shumezo(){
  var first = document.getElementById("firstnumber").value;
  var second = document.getElementById("secondnumber").value;

  try {
    if(isNaN(first) || isNaN(second)) throw "not a number";
    else{
       a = Number(first);
       b = Number(second);
       if (a * b > Number.MAX_VALUE) {
       document.getElementById("p01").innerHTML = "Process as infinity"
      }

      else{
      document.getElementById("p01").innerHTML ="The result is: " +(a * b) + ", to exponential: "+ Number.parseFloat(a*b).toExponential(3)+"<br> The largest of two numbers is: "+ Math.max(a,b)+"<br> The lower bound of result is: "+Math.floor(a*b)+"<br>The square root of "+(a*b)+" is "+Math.sqrt(a*b).toPrecision(4)+"<br> The square root of two is: "+Math.SQRT2.toPrecision(4);;
      }
    }

    }
    catch(err) {
    document.getElementById("p01").innerHTML = "Input is "+ err;
  }
}
//Perdorimi i prototipeve, metodes Math.pow(), konstantes Math.PI, metodes toPrecision(), perdorimi i konstruktorit Number
function siperfaqja(){
    document.getElementById("area").addEventListener("click",calculate,false);
  }
  Number.prototype.circleArea = function() {
  return (Math.pow(this.valueOf(),2)*Math.PI);
};
function calculate() {
  var num = parseInt(document.getElementById("radius").value, 10);
  var rrethi = num.circleArea()
  var numri = rrethi.toPrecision(4);
  console.log(numri);
 // var n = parseInt(numri, 10)
 
  document.getElementById("demo2").innerHTML = "Area of the circle with radius " + num+" is: "+numri+"<br>"+numri.whoAmI();
}
Object.prototype.whoAmI = function(){
    return "The result is an object";
}
//Perdorimi i konstantes Number.EPSILON, metodes Math.abs 
function eps(){
var result = Math.abs(0.2 - 0.3 +0.1);



console.log(result);

console.log(result < Number.EPSILON);}
//Perdorimi i metodes replace() te stringjet
function replaceMethod(){
    document.getElementById("change").addEventListener("click",ndrysho,false);}
    function ndrysho(){
      var str = document.getElementById("text").innerHTML; 
      var res = str.replace("Sir", "Madam");
  document.getElementById("text").innerHTML = res;
}
//Perdorimi i metodes isNaN() dhe funksioni per validim te te dhenave(rangu i vlerave te RateUs vetem nga 1-10)
function myFunction() {
  var x, text;

  x = document.getElementById("rating").value;

  if (isNaN(x) || x < 1 || x > 10) {//metoda isNaN()
    var email = document.getElementsByName("rating")[0];
   	email.value='';
    email.placeholder='Invalid input.(1-10)';
    email.classList.add("error");
    return true;
  } 
  return false;

}
//Validimi i email, perdorimi i metodes test() regex

function validateEmail() 
{
  var mail = document.getElementById("mail").value;
 if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)))
  {
    var element = document.getElementsByName("mail")[0];
    element.value='';
    element.placeholder='Invalid email address';
    element.classList.add("error");
    return true;
  }
    
    return (false);
}
	//Validimi se a pershtaten password dhe confirmaton password
  var password = document.getElementById("pass1")
  var confirm_password = document.getElementById("pass2");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
   return false;
  } else {
    confirm_password.setCustomValidity('');
    return true;
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

 //Validimi i nje strongPassword perdorimi i regEx metoda exec(), paswwordi duhet te permbaj numer, shkronje, karakter, min. 8 gjatesia
 function strongPassword(){
  var passwordi = document.getElementById("pass1").value;
  var parametri = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%* #+=\(\)\^?&])[A-Za-z\d$@$!%* #+=\(\)\^?&]{3,}$/g;
  var vargu = parametri.exec(passwordi);
  if(vargu == null){
    var pasi = document.getElementsByName("pass1")[0];
    var pasi2 = document.getElementsByName("pass2")[0];
    pasi.value = '';
    pasi2.value ='';
    pasi.placeholder='Weak Password'
    pasi2.placeholder='Weak Password';
    pasi.classList.add("error");
    return true;
  }
  return false;
 }
 //Validim nese nje fushe eshte e zbrazet ose jo
function isBlank(inputField)
{
    if(inputField.value==""){
        return true;
    }
    return false;
}


//pastrimi i fushave te formes nga gabimet
function makeClean(element)
{
    element.classList.remove("error");
}
window.addEventListener("load", function(){
    
    //i shtojme "pergjuesit" per klasen highlightable
    var highlightableInputs = document.querySelectorAll(".highlight");
    for (var i =0; i <highlightableInputs.length; i++)
    {
        highlightableInputs[i].addEventListener("focus",function(e){
            e.target.classList.toggle("highlight");
        });
        highlightableInputs[i].addEventListener("blur",function(e){
            e.target.classList.toggle("highlight");
        });
    }
    //i shtojme pergjuesit per selektoret klase "required"
    var requiredInputs = document.querySelectorAll(".required");
    for (var i =0; i<requiredInputs.length; i++)
    {
        requiredInputs[i].addEventListener("change", function(e){
            makeClean(e.target);
        });
    }
    
    //kur te bejme submit formen, "empty" checks kerkohet te plotesohen ne input fushat qe jane required
    var mainForm = document.getElementById("mainForm");
    mainForm.addEventListener("submit", function(e){
    
    var requiredInputs = document.querySelectorAll(".required");
    for (var i =0; i<requiredInputs.length; i++)
    {
        if(isBlank(requiredInputs[i]))
        {
            e.preventDefault();
            requiredInputs[i].classList.add("error");
        }
        else
        {
            makeClean(requiredInputs[i]);
        }
    }

      if(validatePassword()){
          e.preventDefault();
          validatePassword();
      }
      if(specialChars()){
        e.preventDefault()
        specialChars();
      }
      if(myFunction()){
         e.preventDefault();
         myFunction(); 

      }
      if(validateEmail()){
        e.preventDefault();
        validateEmail() ;
      }
      if(strongPassword()){
        e.preventDefault();
        strongPassword();
      }
    });
})