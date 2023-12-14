let calculation = ""

     function totalResult(){
      document.getElementById("calculation").innerHTML = calculation
     }
      document.getElementById("1").onclick = function(){
        calculation += 1
        totalResult()
      }
      document.getElementById("2").onclick = function(){
        calculation += 2
         totalResult()
      }
      document.getElementById("3").onclick = function(){
        calculation += 3
         totalResult()
      }
      document.getElementById("4").onclick = function(){
        calculation += 4
         totalResult()
      }
      document.getElementById("5").onclick = function(){
        calculation += 5
         totalResult()
      }
      document.getElementById("6").onclick = function(){
        calculation += 6
         totalResult()
      }
      document.getElementById("7").onclick = function(){
        calculation += 7
         totalResult()
      }
      document.getElementById("8").onclick = function(){
        calculation += 8
         totalResult()
      }
      document.getElementById("9").onclick = function(){
        calculation += 9
         totalResult()
      }
      document.getElementById(".").onclick = function(){
        calculation += "."
         totalResult()
      }
      document.getElementById("=").onclick = function(){
      calculation = eval(calculation)
       totalResult()
      }
      document.getElementById("*").onclick = function(){
        calculation += "*"
         totalResult()
      }
      document.getElementById("/").onclick = function(){
        calculation += "/"
         totalResult()
      }
      document.getElementById("-").onclick = function(){
        calculation += "-"
         totalResult()
      }
      document.getElementById("+").onclick = function(){
        calculation += "+"
         totalResult()
      }
      document.getElementById("Clear").onclick = function(){
        calculation = ""
         totalResult()
      }
