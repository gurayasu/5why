
const key ='Why？'
let value = 1;
let sum = '';

let botResponse = '';
let botHtml = '';

let userText ='';
let userHtml = '';

var coll = document.getElementsByClassName('collapsible');

//console.log(coll);

for (let i =0; i < coll.length; i++){
    coll[i].addEventListener('click',function(){
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if(content.style.maxHeight){
            content.style.maxHeight =null;
        }else{
            content.style.maxHeight = content.scrollHeight + 'px';
        }

        setTimeout(()=>{
            firstBotMessage();
        },500)

        setTimeout(()=>{
            secondBotMessage();
        },1000)


    });
}

function getTime(){

    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if(hours < 10){
        hours = `0${hours}`;
    }
    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    let time = `${hours}:${minutes}`;
    return time;

}

function firstBotMessage(){
    let firstMessage = '壁打ちbotへようこそ！一緒にWhyを深めよう';
    document.getElementById('botstarterMessage').innerHTML = `<p class = "botText"><span>${firstMessage}</span></p>`;

    // let secondMessage = '壁打ちしたいアイディアを入力してください';
    // document.getElementById('botsecondMessage').innerHTML = `<p class = "botText"><span>${secondMessage}</span></p>`;

    let time = getTime();
    $('#chat-timestamp').append(time);
    document.getElementById('userInput').scrollIntoView(false);
}

function secondBotMessage(){
    let secondMessage = '壁打ちしたいアイディアを入力してください';
    document.getElementById('botsecondMessage').innerHTML = `<p class = "botText"><span>${secondMessage}</span></p>`;

    document.getElementById('userInput').scrollIntoView(false);
}



function getHardResponse(userText){

    botResponse = getBotResponse(userText);
    botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

}


function getResponse(){
    let userText = $('#textInput').val();

    if(userText === ''){
        userText = 'Blank';
    }
    let userHtml = `<p class = "userText"><span>${userText}</span></p>`;

    $('#textInput').val('');
    $('#chatbox').append(userHtml);
    document.getElementById('chat-bar-bottom').scrollIntoView(true);

    setTimeout(()=>{
        getHardResponse(userText);
    },1000)

}

function buttonSendText(samoleText){
    let userHtml = `<p class = "userText"><span>${samoleText}</span></p>`;
    $('#textInput').val('');
    $('#chatbox').append(userHtml);
    document.getElementById('chat-bar-bottom').scrollIntoView(true);
}

function sendButton(){
    getResponse();
}

function heartButton(){
    buttonSendText("LIKE!");
}

$('#textInput').keypress(function(e){
    if(e.which == 13){
        sum = Number(localStorage.getItem(key));
        if(sum === 5){

            userText = $('#textInput').val();
            if(userText === ''){
                userText = 'Blank';
            }
            userHtml = `<p class = "userText"><span>${userText}</span></p>`;
        
            $('#textInput').val('');
            $('#chatbox').append(userHtml);
            document.getElementById('chat-bar-bottom').scrollIntoView(true);

            setTimeout(()=>{
                botResponse = '5Whyで思考が深まりましたね！お疲れ様でした👏👏';
                botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
                $("#chatbox").append(botHtml);
                botResponse = '壁打ちしたいアイディアを入力してください';
                botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                localStorage.removeItem(key);
            },1500)

        }else{
            getResponse();
        }


        console.log(sum);
    }
});
localStorage.removeItem(key);