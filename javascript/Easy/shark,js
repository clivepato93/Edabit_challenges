function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin){
    sharkSpeed/=2
  }



  while(pontoonDistance>0||sharkDistance>pontoonDistance){
    
    pontoonDistance-=youSpeed;
    sharkDistance-=sharkSpeed
    if(pontoonDistance<=0){
      return 'Alive!'
    }
    if(sharkDistance<=0){
      return 'Shark Bait!'
    }

  }
}


console.log(shark(12, 50, 4, 8, true), "Alive!");

console.log(shark(7, 55, 4, 16, true), "Alive!");

console.log(shark(24, 0, 4, 8, true), "Shark Bait!");
