
function funcOne()
{ 
    try {
        carName = "Ford";
        let carName = "Volvo";
      }
    catch(err) {
        document.getElementById("demo").innerHTML = err;
      }
}
