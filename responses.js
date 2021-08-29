
// const key ='Why do you think so?'
// let value = 1;
// let sum ='';

function getBotResponse(input) {

        if (!(input === 'Blank') && !(input === 'stop' || input === 'Stop' || input === '中断')){
            let sum = Number(localStorage.getItem(key));
            localStorage.setItem(key, sum+1);
        }

        if (input === 'Blank'){
            return 'アイディアを入力してください';
        }
        if (input === 'stop' || input === 'Stop' || input === '中断'){
            return '壁打ちを中断します';
        }
        if (input){
            return 'Why?'
        }
        

}



