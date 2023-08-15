
let btn = document.querySelector("button")
let result = document.querySelector(".result")
btn.addEventListener("click",function(){
    let height = parseInt(document.querySelector("#inp1").value)
let weight = parseInt(document.querySelector("#inp2").value)

if (height === "" || isNaN(height))
result.innerHTML = "Provide a valid Height!";

else if (weight === "" || isNaN(weight))
result.innerHTML = "Provide a valid Weight!";

else {
 
    // Fixing upto 2 decimal places
    let bmi = (weight / ((height * height)
                        / 10000)).toFixed(2);
         if (bmi < 18.6) result.innerHTML =
                        `Under Weight : <span>${bmi}</span>`;
             
                    else if (bmi >= 18.6 && bmi < 24.9)
                        result.innerHTML =
                            `Normal : <span>${bmi}</span>`;
             
                    else result.innerHTML =
                        `Over Weight : <span>${bmi}</span>`;
}
})