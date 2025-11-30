let name = document.querySelector(".name");
let desc = document.querySelector(".desc");
let avatars = document.querySelectorAll(".avatar");
let btnback = document.querySelector(".btnback");
let idlist = ["avatar0", "avatar1", "avatar2", "avatar3"];
let bgcolorlist = ["#ef2d2d","#c368c3","#84b75b","#f0692b"];
let active = 0;
let state = 0;

function addClickEvent(el){
    el.addEventListener("click", ()=>{
        if(el==avatars[active] && state==0){
            selectavatar();
        }else if(el.id=="avatar1"){
            shiftnext();
        }else if(el.id=="avatar3"){
            shiftprevious();
        }else{
            console.log("Nothing i can do for it...");
        }
    });
}
for(el of avatars){
    addClickEvent(el);
}

function addWheelEvent(el){
    el.addEventListener("wheel", (event)=>{
        console.dir(event);
        if(el.id=="avatar0" && event.deltaX>0){
            shiftnext();
        }else if(el.id=="avatar0" && event.deltaX<0){
            shiftprevious();
        }
    });
}
for(el of avatars){
    addWheelEvent(el);
}

function shiftnext(){
    for(let i=0; i<4; i++){
        active = (active+1)%4;
        avatars[active].id = idlist[i];
    }
    active = (active+1)%4;
    document.body.style.backgroundColor = bgcolorlist[active];
}

function shiftprevious(){
    if(active==0){
        active=3;
    }else{
        active-=1;
    }
    for(let i=0; i<4; i++){
        avatars[active].id = idlist[i];
        active = (active+1)%4;
    }
    document.body.style.backgroundColor = bgcolorlist[active];
}

function changedetails(n){
    if(n==0){
        name.innerText = "Scarlet Ember";
        desc.innerText = "A fierce and determined warrior with flowing crimson hair and eyes ablaze with passion. Scarlet Ember wields a dual-bladed fiery sword, bringing the heat to the battlefield. Her strength and bravery make her a formidable leader among the group.";
    }else if(n==1){
        name.innerText = "Voilet Shadow";
        desc.innerText = "A mysterious and agile rogue, Violet Shadow moves silently through the shadows, striking her enemies with precision. Her deep purple attire and enigmatic mask conceal a past shrouded in secrecy. Swift and elusive, she is the group's stealthy infiltrator.";
    }else if(n==2){
        name.innerText = "Emerald Enchantress";
        desc.innerText = "A nature-loving sorceress with cascading green locks, Emerald Enchantress harnesses the power of the earth and plants. With her magical staff, she can summon vines, control the elements, and heal her allies. Her nurturing spirit and connection to nature bring balance to the group.";
    }else{
        name.innerText = "Amber Blaze";
        desc.innerText = "A charismatic and adventurous acrobat, Amber Blaze dazzles with her vibrant orange costume and nimble movements. Armed with twin daggers, she excels in acrobatics and close combat. Her infectious energy and fearlessness make her the heart of the team, always ready for the next thrilling challenge.";
    }
}

function selectavatar(){
    if(state==0){
        state = 1;
        changedetails(active);
        name.classList.remove("hide");
        desc.classList.remove("hide");
        for(avatar of avatars){
            avatar.classList.add("hide");
        }
        avatars[active].classList.remove("hide");
        avatars[active].id = "mainavatar";
        btnback.classList.remove("hide");
    }else{
        state = 0;
        name.classList.add("hide");
        desc.classList.add("hide");
        for(avatar of avatars){
            avatar.classList.remove("hide");
        }
        avatars[active].id = "avatar0";
        btnback.classList.add("hide");
    }
    
}

btnback.addEventListener("click", ()=>{
    selectavatar();
});