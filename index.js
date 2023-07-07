//타이핑 게임 
//1. start 눌렀을 때 게임 시작
//1.1 start display 사라지고 게임 디스플레이 등장
//2. qweasd 배열에 담아서 나오게 하기 
const startBtn = document.querySelector('.startBtn');
const before = document.querySelector('.before');
const start = document.querySelector('.start');
const end = document.querySelector('.end');
//start 버튼 눌렀을 때 
startBtn.addEventListener('click', function () {
    //화면 조정
    before.style.display = 'none';
    start.style.display = 'block';

    checkKey();
})


let keySet = [];
//키보드 배열 생성
function makeKeySet() {
    console.log('makeSet');
    keySet = [];
    const origin = ['q', 'w', 'e', 'a', 's', 'd'];
    let key = document.querySelector('.key');
    key.replaceChildren();
    //배열 화면에 나오게
    for (let i = 0; i < 6; i++) {
        let li = document.createElement("li");
        let random = Math.floor(Math.random() * 6);
        keySet.push(origin[random]);
        li.append(origin[random]);
        key.append(li)
    }
}
let step = 1;
// 키 확인
function checkKey() {
    //카운터 시작
    function countStart() {
        //시간 진행되게
        let barWidth = 0;

        const animate = () => {
            barWidth = barWidth + 1.25;
            progressBar.style.width = `${barWidth}%`;
        };


        setTimeout(() => {
            let intervalID = setInterval(() => {
                console.log(step);
                if (step === 7) {
                    console.log('step 7!!')
                    clearInterval(intervalID);
                }
                if (barWidth >= 100) {
                    timeSafe = false;
                    clearInterval(intervalID);
                    if (step !== 7) {
                        final(false);
                    }
                } else {
                    animate();
                }
            }, 100);
        },);
    }

    makeKeySet();
    console.log('checkKey');
    countStart();
    let keyCount = 0;
    console.log(keySet)
    console.log(keyCount)
    let stage = 1;
    window.addEventListener("keypress", (e) => {
        console.log(`눌러야하는 키 : ${keySet[keyCount]}`)
        console.log(`누른 키 : ${e.key}`)
        if (e.key === keySet[keyCount]) {
            getClass(step);
            step = step + 1;
            keyCount = keyCount + 1;
            console.log(`step:${step}`)
            if (step === 7) {

                stage = stage + 1;
                console.log(stage)
                if (stage === 4) {
                    final(true);
                }
                makeKeySet();
                console.log(keySet)

                keyCount = 0;
                step = 1;
            }
        } else {
            final(false);
        }

        console.log('------------')
    });
}

const progressBar = document.getElementById("bar");
let timeSafe = true;




//클래스 주는 함수 
function getClass(num) {
    let now = document.querySelector('.now');
    if (now !== null) {
        now.classList.remove('now');
    }
    let need = document.querySelector(`.key li:nth-child(${num})`);
    console.log(need);
    console.log(need);
    need.className = 'now';
}

//완료
function final(win) {
    start.style.display = 'none';
    end.style.display = 'block';
    let result = document.querySelector('.result');
    if (win) {
        result.innerText = '성공!!'
    } else {
        result.innerText = '땡!'
    }
}

