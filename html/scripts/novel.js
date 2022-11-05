(function() {
    const p = [`In the Galaxy Mobile Platoon's hangar, Ryu gazes at his machine and wonders what secrets it contains. Remember when Captain Falcon said the Dragon Bird, Blue Falcon and Black Bull are "brothers from another time"? (Yes.) Jody wanders in and Ryu demands to know if there was a deeper meaning behind them reviving him in the year 2201. Dr. Stewart believes it is now time to tell Ryu... of the Legend of Falcon. Since the dawn of time good and evil have co-existed, forever battling - just like Captain Falcon and Black Shadow. However, the good Captain could not win the war all on his own...and one day, Dr. Stewart received a data chip from him containing a message. On it, Falcon explained that there are six Reactor Mights throughout the galaxy, and unless they want Black Shadow to claim them and rule over the universe, they need a savior with the power to control all six Reactor Mights.
    And wouldn't you know it, Rick Wheeler is that very savior! They followed the Captain's instructions and installed his Dragon Bird with a Reactor Might, but had yet to find a pilot capable enough to control it. Once Black Shadow revived Zoda, they believed he was concerned about safeguarding himself from this savior, so they dipped into Zoda's past and found Rick, an ace driver turned cop who was also awaiting revival.
    Of course, Jody wasn't so sure on him being savior material - remember all the times he was a hotheaded prick who chased after Zoda? (Yes.)
    And Stewart didn't believe Rick was the right pilot for the Dragon Bird until Captain Falcon demonstrated its true potential. Remember when Rick was taught the Spin Booster and used it to fix a warp gate, among other things? (Yes.)
    The Platoon had three Reactor Mights; one is in the Dragon Bird, but one got stolen by Zoda and the other's location is unknown, what with the Blue Falcon being sucked into a bloody great vortex. Remember when Captain Falcon got sucked into a bloody great vortex? (Yes.)
    They refuse to believe the Captain is dead, but for now the best use of their time is for Rick to begin training. If he's going to save the universe he's gotta be a mighty good racer.
    Meanwhile on planet Tank, Zoda is digging his way to the caves where the two Falcons vanished; maybe the Reactor Might is still there!
    Baba reports this to Black Shadow, and Miss Killer wonders what Zoda would want with another Reactor Might. The lord of evil reveals he owns three of them, and all of his plans have been mere exercises for Zoda to mature his Reactor Might's strength. Even the time he let Zoda nearly kill him? (Yes.)
    So if he has three and the Platoon have two, where's the sixth one? Blood Falcon tracked it down, but he vanished into the same vortex that took Captain Falcon. To confirm the Captain's death, he revived Blood Falcon as a liquid human. Remember that? (Yes.)
    The Captain has yet to return, but it's no issue: Black Shadow's dream is nearing completion. In the meantime they'll use the mysterious Berserker (remember him?) to win them prize money, and destroy the so-called savior Rick Wheeler when the time comes.
    Miss Killer leaves and recalls that Zoda was a bioweapon sent back in time to defeat Rick. That must mean Rick Wheeler is the so-called Man of Legend...but why was she revived in this time as well?
    Hearing of Zoda's activity on planet Tank, the Platoon depart in the Galaxy Runner to see what he's up to...they might find clues to Captain Falcon's disappearance as well! Instead they find Zoda in the caves, who challenges Rick to a race to the Reactor Might - whoever reaches it first can lay claim to it! Rick's game and the two zoom forward, Zoda blattering him with the Death Anchor.
    The two are equally matched, even when they push their Reactor Mights to the limit with their Spin Boosters. The radiant energy causes the entire cave to fall apart, energy bursting from beneath its cracks. The Platoon escape to the surface, but Rick is nowhere to be found...
    The Dragon Bird emerges from the smoke, but Zoda has escaped again. Rick finally comes to terms with his sense of duty, and knows he cannot rest until Black Shadow is finally defeated. As the Platoon return home, Berserker watches the alaxy Runner as it makes its departure...`, `Would you like to know more about Rick? His father was a racer and his mother was of ill health, so he served as a helping hand on their farm in rural Boston along with his dog, Axel. Burt once let Rick work in the Falcon House for a day, but his cooking was so bad it made Jack and Clank sick.
    So, we finally understand why Black Shadow's doing what he's doing: He revived Zoda in fear of the savior's coming, and Rick is considered as such. Stewart wasn't confident he'd handle Clash's prototype, the Dragon Bird, and Jody wasn't confident on reviving someone from cold sleep. But Clash inserted a Reactor Might inside his craft, upon Falcon's instructions who informed the top dogs personally.
    There are 6 Reactor Mights, 3 Dark and 3 Light, created during the Big Bang. And Black Shadow and Capt. Falcon can't defeat each other by themselves, so a savior must hold all 6 Mights to turn the tides of the war. It seems the Falcon, Bull, and Dragon were ancestors from a different time; the Dragon could be either Rick or Zoda..?
    This could be a concept based on the Yin, Yang, and Wuji; that Falcon's the Yang, Shadow's the Yin, and Rick could be the Wuji, the three elements of balance in Chinese mythology.
    Who obtained the last Reactor Might, anyway? And we see Planet Tank, the same location where both Falcons so-called vanished; we know Berserker's here, so...`, ``, `NONE`, ]
    const main = document.querySelector('.main')
    const lis = document.querySelectorAll('.mains li')
    window.onload = function() {
        const a = window.location.search.toString()[1];
        main.innerHTML = p[a]
        lis[a].style.color = 'blue'
    }
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function() {
            window.location.href = `novel.html?${i}`;
        }
    }
})()