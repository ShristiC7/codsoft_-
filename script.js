const start = document.querySelector('.start-btn');
const container = document.getElementById('container');
const mainpg = document.querySelector('.first');
const second = document.querySelector('.second');
const ques = document.querySelector('.ques');
const end = document.querySelector('.end');
const startquiz = document.querySelector('.start2');
const check = document.querySelector('.check');
const next = document.querySelector('.next');
const quit = document.querySelector('.quit');
const explain = document.querySelector('.explain');
const score = document.querySelector('.scoreno');
const result = document.querySelector('.scorevalue');
const percentage =document.querySelector('.precentage-value');
const done = document.querySelector('.done');
const circle = document.querySelector('.circle');
const time =document.querySelector('.time');
let currscore=0;
let questioncount=0;
let quescounter=1;
let timing;
let actualtime;
done.onclick = ()=>{
  end.classList.remove('active');
  mainpg.classList.add('active');
  container.style.background = "url('images/first1bg.jpg') no-repeat center center fixed";
}
start.onclick= ()=>{
    mainpg.classList.remove('active');
    second.classList.add('active');
}
quit.onclick= ()=>{
    second.classList.remove('active');
    mainpg.classList.add('active');
}
startquiz.onclick = ()=>{
    second.classList.remove('active');
    ques.classList.add('active');
    container.style.background = "url('images/quesbg1.jpg') no-repeat center center fixed";
    timer(15);
     questionshow(0);
    quescounter(1);
       }
check.onclick = ()=>{
      explain.classList.add('active');
                         }
next.onclick = ()=>{
  timer(15);
     if(questioncount<questions.length-1){explain.classList.remove('active');
    questioncount++;
    questionshow(questioncount);
    questioncounter(quescounter);
    quescounter++;
          next.style.pointerEvents='none';
          check.style.pointerEvents='none';
    }
     else{
            container.style.background = "url('images/lastbg.jpg') no-repeat center center fixed"
            showResult();
     }
      }
const optionlist = document.querySelector('.option-list');
// function to show the ques and all option
function questionshow(index){
          const questext =document.querySelector('.quesfirst');
    questext.textContent =`${questions[index].numb}. ${questions[index].ques}`;
    const explaination = document.querySelector('.ans');
    explaination.innerHTML = `${questions[index].Explain}`;
    let optiontag = `<div class="option">${questions[index].options[0]}</div>
              <div class="option">${questions[index].options[1]}</div>
              <div class="option">${questions[index].options[2]}</div>
                <div class="option">${questions[index].options[3]}</div>`;
    optionlist.innerHTML=optiontag;
              const selectedoptions = document.querySelectorAll('.option');
    for(let i =0 ; i<selectedoptions.length; i++){
        selectedoptions[i].setAttribute('onclick', 'optionSelected(this)');}
                           }
 //select and check option correct
function optionSelected(answer){
        let useranswer = answer.textContent;
       let correctanswer= questions[questioncount].answ;
       let alloptions = optionlist.children.length;
          if(useranswer == correctanswer){
        answer.classList.add('correct');
        currscore++;
        score.innerHTML=currscore;
      }
      else{
        answer.classList.add('incorrect');
    for(let i=0; i<alloptions; i++){if(optionlist.children[i].textContent == correctanswer){
        optionlist.children[i].setAttribute('class', 'option correct');
    }    }   }              
      for(let i=0; i<alloptions; i++){
         optionlist.children[i].classList.add('disabled');
}
next.style.pointerEvents='auto';
check.style.pointerEvents='auto';
clearInterval(timing);
     }
     // show the number of ques attempted
function questioncounter(index){
        let quescount = document.querySelector('.quesno');
        quescount.innerHTML=`${index} of 5 answered`;
    }
    // show end result
function showResult(){
  ques.classList.remove('active');
  end.classList.add('active');
  result.textContent = `${currscore} / 5`;
  let percent = (currscore / 5)*100;
    let startvalue = 0;
    let speed =20;
  let progress = setInterval(()=>{
    startvalue++;
    percentage.textContent = `${startvalue}%`;
    circle.style.background=`conic-gradient(rgb(30, 30, 233) ${startvalue*3.6}deg, rgb(164, 211, 253, .1) 0deg)`;
    if(startvalue == percent){
      clearInterval(progress);
    }
  },speed) ;
  
}

// Quiz timing
function timer(actualtime){
  timing = setInterval(()=>{
  actualtime--;
time.textContent=`${actualtime}`;
if(actualtime == 0){
  clearInterval(timing);
let correctanswer= questions[questioncount].answ;
let alloptions = optionlist.children.length;
for(let i=0; i<alloptions; i++){if(optionlist.children[i].textContent == correctanswer){
  optionlist.children[i].setAttribute('class', 'option correct');
}    }                 
for(let i=0; i<alloptions; i++){
   optionlist.children[i].classList.add('disabled');
}
next.style.pointerEvents='auto';
check.style.pointerEvents='auto';
}
  },1000);
}  


      
 