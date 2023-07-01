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
})

//키보드 배열 생성
const origin = ['q','w','e','a','s','d'];
let gameArr = [];
for (let i = 0; i < 6; i++){
    let random = Math.floor(Math.random() * 6);
    gameArr.push(origin[random]);
}

//키보드 배열 화면으로
const key = document.querySelector('.key');
let li = document.createElement("li");
li.append("t");
key.append(li)
console.log(li); // "Some text"
