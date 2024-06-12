const baseUrl = 'https://deckofcardsapi.com/api/deck';
const shuff_button = document.getElementById("shuff-button");
const start_deck_btn = document.getElementById('start-deck-btn');
const card_cont = document.getElementById('card-cont');
const deck_cont = document.getElementById('deck-cont');
const draw_button = document.getElementById('draw-card-btn');
const messages_cont = document.getElementById('messages-cont');
const foot = document.getElementById("foot");
//to get one cards from newly shuffled deck
//https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
//https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1
start_deck_btn.addEventListener("click",function(){
    axios
    .get(`${baseUrl}/new`)
    .then(deck=>{
        console.log(deck.data)
        console.log(deck.data.deck_id)
        const deck_id = deck.data.deck_id
        const start_message = `<p>Deck started click draw to start pulling cards</p>`
        messages_cont.innerHTML += start_message
//       
      draw_button.addEventListener("click",function(){
        axios
        .get(`${baseUrl}/${deck_id}/draw/`)
        .then(card=>{
                console.log(card.data)
                console.log(`deck_id is: ${card.data.deck_id}`)
                console.log(`card data is: ${card.data}`)
                console.log(`card code is: ${card.data.cards}`)
                console.log(`more card info is: ${card.data.cards}`)
                console.log(JSON.stringify(card.data.cards))
                for(key in card.data.cards){
                    console.log(key)
                    //[0] works because in console it says data.cards:>0:> than goes onto code: image: images: keys etc, draws the first card ,
                    //  because the way the deck works the top card is always the first in the arr
                    const newCard = `<div>
                    <h3></h3>
                   
                    <img src="${card.data.cards[0].image}">
                    </div>`
                        deck_cont.innerHTML += newCard
                        console.log(`Suit: ${card.data.cards[0].suit}`)
                        console.log(`Value: ${card.data.cards[0].value}`)
                }
                    
                    
            })

        })
        shuff_button.addEventListener("click",function(){
            axios.get(`${baseUrl}/${deck_id}/shuffle/?remaining=true`)
            .then(shuff =>{
                console.log(`deck shuffled: ${shuff.data.shuffled}`)
                if( shuff.data.shuffled === true){
                    const shuffText = `<h4>DECK SHUFFLED</h4>`
                    messages_cont.innerHTML += shuffText
                }
            })
            
        })
       
    })
    
})

start_deck_btn.addEventListener("click",function(){
    setTimeout(() => {
        foot.innerHTML = ''
    },1000);
})


 

//draw_button.addEventListener("click",function(){
//    axios
//    .get(`${baseUrl}/${deck_id}/draw/`)
//    .then(card=>{
//            console.log(`deck_id is: ${card.data.deck_id}`)
//            console.log(`card data is: ${card.data}`)
//            console.log(`card code is: ${card.data.cards.code}`)
//            console.log(`more card info is: ${card.data.cards}`)
//            console.log(JSON.stringify(card.data.cards))
//            for(key in card.data.cards){
//                console.log(key)
//                //[0] works because in console it says data.cards:>0:> than goes onto code: image: images: keys etc, draws the first card ,
//                // probably because the way the deck works the top card is always the first in the arr
//                const newCard = `<div>
//                <h3></h3>
//                <p>${card.data.cards[0].code}</p>
//                <img src="${card.data.cards[0].image}">
//                </div>`
//                    deck_cont.innerHTML += newCard
//                    
//            }
//                
//           
//        })
//
//    })