const conEl = document.querySelector(".container")

const careers = ["Youtube", "Freelancer", "Ecology", "Web developer", "Software developer"]

let careerIndx = 0

let charterIndx = 0;
 
uptadeText();

function uptadeText() {
    charterIndx ++;
    conEl.innerHTML = `
    <h1> I am ${careers[careerIndx].slice(0,1)=== "I" ? "an" : "a" } ${careers[careerIndx].slice(0,charterIndx)}
    </h1>
   `;
   
   if(charterIndx === careers[careerIndx].length){
      careerIndx ++
      charterIndx = 0
   }
   if(careerIndx === careers.length){
      careerIndx = 0;
   }
   setTimeout(uptadeText,400);

}
