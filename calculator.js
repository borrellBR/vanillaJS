let calculation = ""

      document.getElementById("1").onclick = function(){
        calculation += 1
        console.log(calculation)
      }
      document.getElementById("2").onclick = function(){
        calculation += 2
        console.log(calculation)
      }
      document.getElementById("3").onclick = function(){
        calculation += 3
        console.log(calculation)
      }
      document.getElementById("4").onclick = function(){
        calculation += 4
        console.log(calculation)
      }
      document.getElementById("5").onclick = function(){
        calculation += 5
        console.log(calculation)
      }
      document.getElementById("6").onclick = function(){
        calculation += 6
        console.log(calculation)
      }
      document.getElementById("7").onclick = function(){
        calculation += 7
        console.log(calculation)
      }
      document.getElementById("8").onclick = function(){
        calculation += 8
        console.log(calculation)
      }
      document.getElementById("9").onclick = function(){
        calculation += 9
        console.log(calculation)
      }
      document.getElementById(".").onclick = function(){
        calculation += "."
        console.log(calculation)
      }
      document.getElementById("=").onclick = function(){
      calculation = eval(calculation)
      console.log(calculation)
      }
      document.getElementById("*").onclick = function(){
        calculation += "*"
        console.log(calculation)
      }
      document.getElementById("/").onclick = function(){
        calculation += "/"
        console.log(calculation)
      }
      document.getElementById("-").onclick = function(){
        calculation += "-"
        console.log(calculation)
      }
      document.getElementById("+").onclick = function(){
        calculation += "+"
        console.log(calculation)
      }
      document.getElementById("Clear").onclick = function(){
        calculation = ""
        console.log(calculation)
      }
