


let GetRandomJokes = () =>{
    
    let RandomJokesArry = [
            "What does a vegan zombie like to eat? Graaains.",
            "What do you call a dinosaur with only one eye? A Do-you-think-he-saw-us!",
            "Assistant: So what dimensions do the doors, hinges, walls, and locks need to be so that it all fits?",
            " The person who invented public bathroom stalls: Can't stress how unimportant that part is",
            "Why should you never fall in love with a tennis player? Because to them... love means NOTHING!",
            "What did the full glass say to the empty glass? You look drunk.",
            "What’s a potato’s favorite form of transportation? The gravy train",
            "What did one ocean say to the other? Nothing, they just waved.",
            "What did the right eye say to the left eye? Honestly, between you and me something smells.",
            "What do you call a dog that's been run over by a steamroller? Spot!",
            " Knock knock. (Who’s there?) Déja. (Déja who?) Knock knock.",
            " Knock knock. (Who's there?) To (To who?) It's to whom.",
            " Knock knock. (Who's there?) Doorbell repair man.",
            " Knock knock. (Who's there?) You. (You who?) Yoo-hoo! Anybody home?",
           " Why can't Chuck Norris use the internet? Because he won't submit.",
           " How does Lady Gaga like her steak? (sing) Raw-raw-raw-ra-ah-aww",
           " What's Forrest Gump's email password? 1forrest1",
           " Did you know that the urge to sing The Lion Sleeps Tonight is only ever a whim away? A whim away... a whim away…",
           " Why didn’t the Terminator upgrade to Windows 10? I asked him and he said, “I still love vista, baby.”",
           
           
        ]
        let cardtext = document.querySelector('.card-text');
        let RandomHex = Math.floor(Math.random()*18);
        
        cardtext.textContent = "\""+ RandomJokesArry[RandomHex]+"\"";
        
    }
    let btn =  document.querySelector('.btn');

    btn.addEventListener('click', function(){
        GetRandomJokes();
    })
    