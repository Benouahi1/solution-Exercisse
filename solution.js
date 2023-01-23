//Start Date 21/01/2023
//Morroco

//get Id Button 
let submit = document.getElementById("sub");

//funcyion to  
submit.onclick = function () {
//get Id number row and line 
  let a3 = document.getElementById("a3").value;
  let a1 = document.getElementById("a1").value;
  let a2 = document.getElementById("a2").value;
  let a4 = document.getElementById("a4").value;
  let b1 = document.getElementById("b1").value;
  let b2 = document.getElementById("b2").value;
  let b3 = document.getElementById("b3").value;
  let result = document.getElementById("result");

  let b4 = document.getElementById("b4").value;
  c1 = c2 = c3 = c4 = 1;
  val = 1;
  let Max1 = document.getElementById("Max").value;
//Create a 2D table
  var arr1 = new Array();
  var arr2 = new Array();
  var arr3 = new Array();
  var arr4 = new Array();

  var Max = Max1;
  console.log(Max);

  console.log(a1, a3, a2, a4);
  for (let i = 0; i < Math.max(b1, b2, b3, b4); i++) {
    if (c1 <= b1) {
       arr1[i] = new Array();
      arr1[i][a1 - 1] = val;
      val++;
      c1++;
      if (val > Max) {
        break;
      }
    }
    if (c2 <= b2) {
      arr2[i] = new Array();
      arr2[i][0] = val;
      val++;
      if (val > Max) {
        break;
      }
      arr2[i][a2 - 1] = val;
      val++;
      c2++;
      if (val > Max) {
        break;
      }
    }
    if (c3 <= b3) {
       arr3[i] = new Array();
      arr3[i][0] = val;
      val++;
      if (val > Max) {
        break;
      }
      arr3[i][a3 - 1] = val;
      val++;
      c3++;
      if (val > Max) {
        break;
      }
    }
    if (c4 <= b4) {
      arr4[i] = new Array();
      arr4[i][0] = val;
      val++;
      c4++;
      if (val > Max) {
        break;
      }
    }
  }

  c1 = c2 = c3 = c4 = 1;

  for (let i = 0; i < Math.max(b1, b2, b3, b4); i++) {
    if (c1 <= b1) {
      arr1[i][0] = val;
      val++;
      c1++;
      if (val > Max) {
        break;
      }
    }
    if (c4 <= b4) {
      arr4[i][a4 - 1] = val;
      val++;
      c4++;
      if (val > Max) {
        break;
      }
    }
  }

  c1 = c2 = c3 = c4 = 1;
  for (let i = 0; i < Math.max(b1, b2, b3, b4); i++) {
    for (let j = 0; j < a1 - 2; j++) {
      if (c1 <= b1) {
        if (val > Max) {
          break;
        }
        arr1[i][j + 1] = val;
        val++;
      }
    }
    for (j = 0; j < a2 - 2; j++) {
      if (c2 <= b2) {
        if (val > Max) {
          break;
        }
        arr2[i][j + 1] = val;
        val++;
      }
    }
    for (j = 0; j < a3 - 2; j++) {
      if (c3 <= b3) {
        if (val > Max) {
          break;
        }
        arr3[i][j + 1] = val;
        val++;
      }
    }
    for (j = 0; j < a4 - 2; j++) {
      if (c4 <= b4) {
        if (val > Max) {
          break;
        }
        arr4[i][j + 1] = val;
        val++;
      }
    }
    c1++;
    c2++;
    c3++;
    c4++;
    console.log(val, "Value");
  }

  var Now = document.createElement("div");

  Now.className = "lass";

  for (i = 0; i < a1; i++) {
    var newdiv = document.createElement("div");
    newdiv.className = "aa";
    for (j = 0; j < b1; j++) {
      var newElement = document.createElement("div");
      if (i == 0) {
        newElement.className = "windows";
        if (arr1[j][i] == undefined) {
          var newText = document.createTextNode(" ");
        } else {
          var newText = document.createTextNode(arr1[j][i]);
        }
      } else if (i == a1 - 1) {
        newElement.className = "inf";
        if (arr1[j][i] == undefined) {
          var newText = document.createTextNode(" ");
        } else {
          var newText = document.createTextNode(arr1[j][i]);
        }
      } else {
        newElement.className = "centre";
        if (arr1[j][i] == undefined) {
          var newText = document.createTextNode(" ");
        } else {
          var newText = document.createTextNode(arr1[j][i]);
        }
      }
      newElement.appendChild(newText);
      newdiv.appendChild(newElement);
    }
    console.log("aaaaaa");
    Now.appendChild(newdiv);
    result.appendChild(Now);
  }

  var Now = document.createElement("div");

  Now.className = "lass";
  for (i = 0; i < a2; i++) {
    var newdiv = document.createElement("div");
    newdiv.className = "aa";
    for (j = 0; j < b2; j++) {
      var newElement = document.createElement("div");
      if (i == 0 || i == a2 - 1) {
        newElement.className = "inf";
        if (arr2[j][i] == undefined) {
          var newText = document.createTextNode(" ");
        } else {
          var newText = document.createTextNode(arr2[j][i]);
        }
      } else {
        newElement.className = "centre";
        if (arr2[j][i] == undefined) {
          var newText = document.createTextNode(" ");
        } else {
          var newText = document.createTextNode(arr2[j][i]);
        }
      }
      newElement.appendChild(newText);
      newdiv.appendChild(newElement);
    }
    console.log("aaaaaa");
    Now.appendChild(newdiv);
    result.appendChild(Now);
  }

  var Now = document.createElement("div");

  Now.className = "lass";
  for (i = 0; i < a3; i++) {
    var newdiv = document.createElement("div");
    newdiv.className = "aa";
    for (j = 0; j < b3; j++) {
      var newElement = document.createElement("div");
      if (i == 0 || i == a3 - 1) {
        newElement.className = "inf";
        if (arr3[j][i] == undefined) {
          var newText = document.createTextNode(" ");
        } else {
          var newText = document.createTextNode(arr3[j][i]);
        }
      } else {
        newElement.className = "centre";
        if (arr3[j][i] == undefined) {
          var newText = document.createTextNode(" ");
        } else {
          var newText = document.createTextNode(arr3[j][i]);
        }
      }
      newElement.appendChild(newText);
      newdiv.appendChild(newElement);
    }
    console.log("aaaaaa");
    Now.appendChild(newdiv);
    result.appendChild(Now);
  }

  var Now = document.createElement("div");

  Now.className = "lass";

  for (i = 0; i < a4; i++) {
    var newdiv = document.createElement("div");
    newdiv.className = "aa";
    for (j = 0; j < b4; j++) {
      var newElement = document.createElement("div");
      if (i == a4 - 1) {
        newElement.className = "windows";
        if (arr4[j][i] == undefined) {
          var newText = document.createTextNode(" ");
        } else {
          var newText = document.createTextNode(arr4[j][i]);
        }
      } else if (i == 0) {
        newElement.className = "inf";
        if (arr4[j][i] == undefined) {
          var newText = document.createTextNode(" ");
        } else {
          var newText = document.createTextNode(arr4[j][i]);
        }
      } else {
        newElement.className = "centre";
        if (arr4[j][i] == undefined) {
          var newText = document.createTextNode(" ");
        } else {
          var newText = document.createTextNode(arr4[j][i]);
        }
      }
      newElement.appendChild(newText);
      newdiv.appendChild(newElement);
    }
    console.log("aaaaaa");
    Now.appendChild(newdiv);
    result.appendChild(Now);
  }

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  console.log(arr4);
};
