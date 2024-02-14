const players=['salman','faiz','santo','ramjan','malek','rafique','jabbar','salman','salman','didar','faiz','santo','ramjan','jabbar'];

function removeDuplicate(names){
    let uniqueName =[];
    for(let i =0; i<names.length; i++){
        let arrayElements =names[i];
        if(uniqueName.includes(arrayElements) === false){
            uniqueName.push(arrayElements);

        }
    }
    return uniqueName;
}
let uniqueNameList=removeDuplicate(players);
console.log(uniqueNameList);