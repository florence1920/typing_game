//타이핑 게임 
//1. start 눌렀을 때 게임 시작
//1.1 start display 사라지고 게임 디스플레이 등장
//2. qweasd 배열에 담아서 나오게 하기 
const startBtn = document.querySelector('.startBtn');
const before = document.querySelector('.before');
const start = document.querySelector('.start');
const end = document.querySelector('.end');
//start 버튼 눌렀을 때 
startBtn.addEventListener('click', function(){
    //화면 조정
    before.style.display = 'none';
    start.style.display = 'block';

    stageStart();
})

//stage
let stage = 1;

//키보드 배열 생성
const origin = ['q','w','e','a','s','d'];
const key = document.querySelector('.key');
let keySet = [];


function stageStart(){
    
    //배열 화면에 나오게
    for (let i = 0; i < 6; i++){
        let li = document.createElement("li");
        let random = Math.floor(Math.random() * 6);
        keySet.push(origin[random]);
        li.append(origin[random]);
        key.append(li)
    }
    
    checkKey();
}

// 키 확인
function checkKey (){
    countStart();
    let keyCount = 0;
    let step = 1;
    window.addEventListener("keydown", (e) => {
        console.log(e.key)
        console.log(keySet[keyCount])
        if(e.key === keySet[keyCount]){
            getClass(step);
            console.log(`step: ${step}`)
            step = step + 1;
        }else{
            fail();
        }
        //시간초과
        if(timeSafe === false){
            fail();
        }
        keyCount = keyCount + 1;
        if(step === 7 && timeSafe){

            document.querySelector('.clear').innerHTML='Clear'
        }
        console.log(timeSafe)
    });
}




//클래스 주는 함수 
function getClass(num){
    let now = document.querySelector('.now');
    if (now !== null){
        now.classList.remove('now');
    }
    let need = document.querySelector(`.key li:nth-child(${num})`);
    need.className='now';
}

//실패 시!
function fail(){
    start.style.display = 'none';
    end.style.display = 'block';
}

//성공 시 
function success(){
    console.log('다음')
}


const progressBar = document.getElementById("bar");
let timeSafe = true;

//카운터 시작
function countStart(){
    //시간 진행되게
    let barWidth = 0;

    const animate = () => {
        barWidth = barWidth + 2.5;
        console.log(barWidth);
        progressBar.style.width = `${barWidth}%`;
    };

    // animation starts 2 seconds after page load
    setTimeout(() => {
        let intervalID = setInterval(() => {
        if (barWidth >= 100) {
            timeSafe = false;
            clearInterval(intervalID);
        } else {
            animate();
        }
        }, 100); //this sets the speed of the animation
    }, );
    //진행바 넘어가게

}


// let progressBar = document.querySelector()
// let interval = 10;
// let countDown = setInterval(()=>{
//     interval--;
//     let progressWidth = (interval/10) * 100;
//     if(interval > 0){

//     } else {

//     }
// },1000);