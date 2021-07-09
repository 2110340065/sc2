const r_btn = document.getElementById("rbtn");
const c_btn = document.getElementById("cbtn");
const p_btn = document.getElementById("pbtn");
const result = document.getElementById("result");

r_btn.addEventListener("click", function(){
    rpc(1);
});
c_btn.addEventListener("click", function(){
    rpc(2);
});
p_btn.addEventListener("click", function(){
    rpc(3);
});

function rpc(p_hand){
    const e_hand = Math.ceil(Math.random()*3);
    if(p_hand==e_hand){
        return result.textContent = "Draw";
    }else if ((((p_hand+e_hand)%2==1)&&(p_hand<e_hand)) || (((p_hand+e_hand)%2!=1)&&(p_hand>e_hand))){
        return result.textContent = "You Win";
    }else{
        return result.textContent = "You Lose";
    }
}

