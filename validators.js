document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('commaButton').addEventListener('click', commaList);
    document.getElementById('quotesButton').addEventListener('click', quotesList);
    document.getElementById('deleteButton').addEventListener('click', validationList);
    document.getElementById('stolbButton').addEventListener('click', slist);

  });

function validationList() {
    let list = document.getElementById("list").value;
    let fromList = document.getElementById("fromList").value;
    let listArray = list.split(",").map(item => item.trim());
    let fromListArray = fromList.split(",").map(item => item.trim());
    let result = listArray.filter((element) => !fromListArray.includes(element));
    document.getElementById("result").innerHTML = `${result.join(", ")}`;
}

function commaList() {
    let numbersList = document.getElementById("commaList").value;
    let clearing = numbersList.trim().replace(/\s+/g, " ");
    let commaZnach = document.getElementById("znatch").value;
    let validationList = clearing.split(" ");
    let result = validationList.join(commaZnach)
    document.getElementById("commaResult").innerHTML = result
}

function quotesList() {
    let numbers = document.getElementById("quotesList").value;
    let validationsList = numbers.trim().split(/\s+/);
    let quotesZnach = document.getElementById("quotesZnach").value;
    let quotesonettwo = validationsList.map(item => quotesZnach + item + quotesZnach);
    let result = quotesonettwo.join(" ");
    document.getElementById("quotesResult").innerHTML = result;
}

function slist() {
    let arr = []
    let list = document.getElementById("valuelist").value
    let refactorlist = list.split(" ");
    arr.push(...refactorlist); 
    console.log(arr);
    document.getElementById("stolbickResult").innerHTML = arr.join("<br>");

}

