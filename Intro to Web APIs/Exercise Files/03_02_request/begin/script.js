var request = new XMLHttpRequest();

request.open("GET", "http://hplussport.com/api/products");

request.onload = function() {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.group(parsedData);
}

request.send();