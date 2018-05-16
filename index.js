var katzDeliLine = [];
var counter;
function takeANumber (katzDeliLine, name) {
  counter++;
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

console.log(takeANumber(katzDeliLine, counter));
console.log(takeANumber(katzDeliLine, counter));
console.log(takeANumber(katzDeliLine, counter));
function nowServing (katzDeliLine) {
  if (katzDeliLine.length>0) {
    var nowserving =   katzDeliLine.splice(0,1);
    return "Currently serving " + nowserving + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length>0) {
    var lineList=[];
    for (var line in katzDeliLine) {
      lineList.push(" "+((line)+1)+". "+katzDeliLine[line]);
    }
    return "The line is currently:" + lineList;
  } else {
    return "The line is currently empty.";
  }

}