var t = 60;

function output(t) {
    
    switch(t){
        case 50:
            console.log("Orbiter transfers from ground to internal power");
            break;
        case 31:
            console.log("Ground launch sequencer is go for auto sequence start");
            break;
        case 16:
            console.log("Activate launch pad sound suppression system");
            break;
        case 10:
            console.log("Activate main engine hydrogen burnoff system");
            break;
        case 6:
            console.log("Main engine start");
            break;
        case 0:
            console.log("olid rocket booster ignition and liftoff!");
            break;
        default:
            console.log(`T-${t} seconds`);
    }
    
    
    //return var string
}

while(t >= 0){
    output(t);
    t = t - 1;
}
