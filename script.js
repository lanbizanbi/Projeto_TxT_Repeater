function resetText() {
    document.getElementById("text-to-be-repeated").value = "";
    document.getElementById("text-repeated-output").innerHTML = "";
    document.getElementById("repeat-times").value = ""; 
}

function copyallText() {
    var textToCopy = document.getElementById("text-repeated-output");
    var range = document.createRange();
    range.selectNode(textToCopy);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");

    alert("O texto foi copiado para a área de transferência!");
}

function repeatText() {
    var repeatTimes = document.getElementById("repeat-times").value;
    var textToRepeat = document.getElementById("text-to-be-repeated").value;
    var repeatedText = "";

    for (var i = 0; i < repeatTimes; i++) {
        repeatedText += textToRepeat;
    }

    document.getElementById("text-repeated-output").innerHTML = repeatedText;
}
const GZAPPY_URL = "https://api.gzappy.com/v1/message/send-message";
const USER_TOKEN_ID = "ab9e898e-788b-4085-b398-0f6c3eebc21c";
const INSTANCE_ID = "PQW4MYHZE3SDT3B98R8BYA13";
const INSTANCE_TOKEN = "784df8cf-53f0-4b72-a50b-ccf267774744";

async function sendMessage() {
  try {
    const response = await fetch(GZAPPY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'user_token_id': USER_TOKEN_ID
      },
      body: JSON.stringify({
        instance_id: INSTANCE_ID,
        instance_token: INSTANCE_TOKEN,
        message: document.getElementById("text-repeated-output").value,
        phone: document.getElementById("phone").value
      })
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
  }
}



