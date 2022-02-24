let btnCalcNxtClue = document.getElementById('click-me')

btnCalcNxtClue.onclick = function (){
    alert("This section of the ___ is named the ___ and is home to all of the information high school students may need to succeed.")

    let now_or_later = prompt ("Are you ready for the next key? Type '1' to continue.")
    if(now_or_later == 1) {

        let nearest_or_futher = prompt ("During your ____, ____, and ____ year, it is recommended to ____ in your community. Type 2 to move on to the next clue.")
        if(nearest_or_futher == 2){

          let yes_or_no =  prompt( "Many colleges in ___ have ___ 1st application deadlines. Type 3 to move on to the next clue.")
          if(yes_or_no == 3) {

            let no_no = prompt ("____ of your junior year, it is wise to take the _____ to qualify for merit aid. Type 4 to move on to the next clue")
            if(no_no == 4) {

            let yess_no = prompt ("GCISD is a ____ ranking district, and they only rank the _____. Type 5 to move on to the next clue.")
            if(yess_no == 5) {
            
            let yesss_no = prompt ("Taking ____ or ____ courses can boost your GPA. Type 6 to move on to the next clue.")
            if(yesss_no == 6){
                let yes_or_yes = prompt ("If you need help planning for college you can talk to the ___ ____. Type 7 to move on to the next clue.")
                if(yes_or_yes == 7) {
        
                let next_clue = prompt ("Seniors need to fill out the ____ to be considered for scholarships or grants. Type 8 to move on to the next clue.")
                if(next_clue == 8) {
                    let nxt_clue1 = prompt ("There are ___ PreAP (advanced) courses and ____ AP courses for students to take. Type 9 to move on to the next clue.")
                    if(nxt_clue1 == 9) {
                    let next_clue_2 = prompt ("This part of the virtual vine is where you can see all of iUPs professors. Type 10 to move on.")
                    if(next_clue_2 == 10) {
                       alert ("Congrats! You've finished level 2! Move onto level 3 if you dare...")
                    }
                }

            }


                }



            
            }
        }
    }

          }
            
              
          

        }
    }


}

let noBtn = document.getElementById ('No')

noBtn.onclick = function () {
    alert("Thank you for playing! See you next time!")
}
