function getRandomInRange(from, to, fixed) {

    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

document.getElementById('randomword').addEventListener('click', randomWordDisplay() );

async function getRandom(){
    
}

async function randomWordDisplay(){

}