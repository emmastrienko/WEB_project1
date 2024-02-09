/***** REVERSE NUMBER *****/

const num = document.getElementById("number"), 
 res = document.getElementById("res"),
 btn = document.getElementById("btn");

function reverseNum() {
  if(!num.value) {
    alert("Please enter a number")
  }
  let numArr = num.value.split("")
  let output = numArr.reverse().join("");
  
  res.innerText = output;
}

btn.addEventListener("click", reverseNum)


/***** ROMAN NUMBER *****/

const romNum = document.getElementById("rom-num");
        const romRes = document.getElementById("rom-res");
        const convertBtn = document.getElementById("convert-btn");
        const conversionType = document.getElementById("conversion-type");

        const lookup = {
          M: 1000,
          CM: 900,
          D: 500,
          CD: 400,
          C: 100,
          XC: 90,
          L: 50,
          XL: 40,
          X: 10,
          IX: 9,
          V: 5,
          IV: 4,
          I: 1,
      };

      function convertToRomanNum(num) {
        if (isNaN(num) || num < 0 || num >= 4000) {
            alert("Please enter a positive number less than 4000 or select another option");
            return;
        }
    
        let roman = "";
        for (const i in lookup) {
            while (num >= lookup[i]) {
                roman += i;
                num -= lookup[i];
            }
        }
        return roman;
    }
    

        function convertToNumber(roman) {
          const validRoman = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
          if (!validRoman.test(roman)) {
            alert("Please enter a valid Roman numeral or select another option");
            return;
          }

            let numValue = 0;
            for (let i = 0; i < roman.length; i++) {
                const current = lookup[roman.charAt(i)];
                const next = lookup[roman.charAt(i + 1)];
                if (current < next) {
                    numValue -= current;
                } else {
                    numValue += current;
                }
            }
            return numValue;
        }

        convertBtn.addEventListener("click", () => {
            const inputValue = romNum.value.trim().toUpperCase();
            const selectedType = conversionType.value;

            if (selectedType === "toRoman") {
                romRes.innerText = convertToRomanNum(parseInt(inputValue));
            } else if (selectedType === "toNumber") {
                romRes.innerText = convertToNumber(inputValue);
            }
        });


/***** LONGEST WORD *****/

const words = document.getElementById("words"),
      findWordBtn = document.getElementById("find-word-btn"),
      longesrWord = document.getElementById("longest-word");


function findLongestWord() {
  let wordsArr = words.value.replace(/[,.!?]/g, '').split(" ");
  let longWord = wordsArr.reduce((currLongestWord, currWord) => {
   return  (currWord.length > currLongestWord.length) ? currWord : currLongestWord;
  });
  longesrWord.innerHTML = `${longWord} </br> </br> length: ${longWord.length}`;
}

findWordBtn.addEventListener("click", findLongestWord);


/***** BMI *****/

const height = document.getElementById("height"),
      weight = document.getElementById("weight"),
      bmiBtn = document.getElementById("bmi-btn"),
      bmiRes = document.getElementById("bmi-res"),
      bmiType = document.getElementById("bmi-type");


function calcBMI() {
  let bmi = weight.value / Math.pow(height.value, 2);
  bmiRes.innerText = bmi.toFixed(2);
  updateProgressBar(bmi);
}

function updateProgressBar(bmi) {
  let progressBar = document.getElementById("progress");
  let width = bmi * 2.3; 
  progressBar.style.width = width + '%';

  if (bmi < 18.5) {
    progressBar.style.background = 'lightblue';
    bmiType.innerText = "Underweight"
  } else if (bmi >= 18.5 && bmi < 24.9) {
    progressBar.style.background = 'lightgreen';
    bmiType.innerText = "Normal weight"
  } else {
    progressBar.style.background = 'tomato';
    bmiType.innerText = "Overweight"
  }
}

bmiBtn.addEventListener("click", calcBMI);