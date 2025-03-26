const btnE1 = document.getElementById("btn");
const emojiNameE1 = document.getElementById("emoji-name");

const emoji = [];


 async function getEmoji(){
      let response = await fetch ("https://emoji-api.com/emojis?access_key=d5a34083284a5a32af6500b2016d8c16e55c4886");

      data = await response.json()

    
      for (let i=0; i<1500;i++){
             emoji.push({
               emojiName: data[i].character,
               emojiCode: data[i].unicodeName,
             })
      }
    }

getEmoji()

btnE1.addEventListener("click", ()=>{
   const randomNum = Math.floor (Math.random() * emoji.length);
   btnE1.innerText = emoji[randomNum].emojiName;
   emojiNameE1.innerText = emoji[randomNum].emojiCode;
})