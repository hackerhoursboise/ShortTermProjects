var stuff = {
  table: document.getElementById("test"),
  tableRow: document.getElementById("bish"),
  diceLetter: ["A","A","A","A","A","B","B","C","C","D","D","D","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","H","H","H","H","H","I","I","I","I","I","I",'J','K','L','L','L','L','M','M','N','N','N','N','N','N','O','O','O','O','O','O','O','P','P',"Qu",'R','R','R','R','R','S','S','S','S','S','S','T','T','T','T','T','T','T','T','T','U','U','U','V','V','W','W','W','X','Y','Y','Y','Z']
};

var test = Math.floor(Math.random()*(95 - 0 + 1))+0;
/**
function nGrid(xYGrid) {
  var y = xYGrid,
      x = y;
 for(i = 0;i <= y; i++){ document.getByElementId("grid").appendElement =  
    "<div class='red'>"+ test +"</div>"
  }
};

**/

function boggleGrid(xY) {
  var grid = document.getElementById("test"),
      dynoTR = "",
      dynoTD = "";
  
  
  for (i = 0; i < xY; ++i) {
    for (j=0;j<xY;++j) {
    dynoTD += "<td>" + stuff.diceLetter[Math.floor(Math.random()*(94 - 0 + 1))+0] + "</td>";
  }
     dynoTR += "<tr>" + dynoTD + "</tr>";
     dynoTD= "";
  }
  grid.innerHTML = dynoTR;
};

