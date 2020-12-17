import React, { useState }  from "react";
import head from "./head.svg";
import screen from "./screenImg.svg";
import "./App.css";

var Black={};
var Blue={};
var Gray={};
var Pink={};
var White={};
var NeonBlue={};

NeonBlue.color="Neon"
NeonBlue.colorCode="#22d1ee"
NeonBlue.accent=[Black,Gray,White]

Black.color="Black";
Black.colorCode="#000";
Black.accent=[Blue,White,NeonBlue];

Blue.color="Blue";
Blue.colorCode="#10316b";
Blue.accent=[Black,Pink];

Pink.color="Pink";
Pink.colorCode="#fc85ae";
Pink.accent=[Gray,Black];

White.color="White";
White.colorCode="#fff";
White.accent=[Black,Pink];

Gray.color="Gray";
Gray.colorCode="#dee1ec";
Gray.accent=[Black,Pink,Blue];

var primaryColors=[Black,Blue,Pink,White,Gray,NeonBlue]; 
var bgColors = [Black,Blue,White,Gray,Pink];
export default function App() {
  var [pColor, colorSetter] = useState("");
  var [bgColor, bgColorSetter] = useState("");
  var [aColors, aColorSetter] = useState([{'color':'','colorCode':''}]);
  var [screenAC, screenACS] = useState("");
    function changeColors(index,code) {
    console.log(index);
    aColors=[];
    document.querySelector("#accColor").style.display = "block";
    document.querySelector("#aColor").style.display = "flex";
    pColor = code;
    colorSetter(pColor);
    console.log(pColor);
    console.log(index);
    primaryColors[index].accent.map((item)=>{
    aColors=aColors.concat({'color':item.color,'colorCode':item.colorCode}); 
    return aColors;
    })
    aColorSetter(aColors);
}
  function changeAccentColor(item) {
    screenAC = item;
    console.log(screenAC);
    screenACS(screenAC);
  }
  function changeBgColor(item) {
    bgColor = item;
    bgColorSetter(bgColor);
    document.querySelector("#pColor").style.display = "block";
    document.querySelector("#pDiv").style.display = "flex";
  }

  function componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/a076d05399.js";
    script.async = true;
    document.body.appendChild(script);
  }

  function myFunction() {
    console.log("in js");
    var x = document.getElementById("navi");
    if (x.className === "mainHead") {
      x.className += " responsive";
    } else {
      x.className = "mainHead";
    }
  }
  let url = "#";

  return (
    <div className="App">
      <div>
        <title>Color-Map</title>
        {componentDidMount()}
        <div className="mainHead" id="navi">
          <div className="title">Color Map</div>
          <ul className="list-none floating">
            <li className="list-inline">
              <a 
                className="noDeco"
                href="http://jesswindevelops.netlify.app"
              >
                Developer 
              </a>
            </li>
            <li className="list-inline">
              <a className="noDeco colorr"  href="https://colorsinspo.com/">
                Colors
              </a>
            </li>
          </ul>

          <a href={url} onClick={myFunction} className="icon noDecoI">
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>
      <div className="hero">
        <img src={head} alt="color-palatte"></img>
      </div>

      <div className="everyThing">
        <div className="colors">
          <span style={{ fontWeight: "bolder", color: "#fdfdfd" }}>
            Backgroud Colors
          </span>
          <div className="bgColorsDiv">
            {bgColors.map((item) => {
              return (
                <span key={item} onClick={() => changeBgColor(item.colorCode)} className="bgColors">
                  {item.color}
                </span>
              );
            })}
          </div>

          <span id="pColor" style={{ display: "none", fontWeight: "bolder" }}>
            Primary Colors
          </span>
          <div
            className="primaryColorsDiv"
            id="pDiv"
            style={{ display: "none" }}
          >
            {primaryColors.map((item,index) => {
              return (
                <span
                  onClick={() => changeColors(index,item.colorCode)}
                  className="primaryColors"
                >
                  {/* {console.log("i am jess"+item.color)} */}
                  {item.color}
                </span>
                
              );
            })}
          </div>
          <span
            id="accColor"
            style={{ color: "#fdfdfd", display: "none", fontWeight: "bolder" }}
          >
            Accent Colors
          </span>
          <div style={{display:"none"}} id="aColor" className="accentColorsDiv">
            {
            aColors.map((item) => {
                return(
                <span
                  onClick={() => changeAccentColor(item.colorCode)}
                  className="accentColors">
                {/* > {console.log(item.colorCode)} */}
                  {item.color}
                </span>
                 ) ;
            })}
          </div>
        </div>
        <div
          className="screenn"
          style={{ boxShadow:`0 0 30px ${screenAC}`, backgroundColor: bgColor }}
        >
          <div className="screenNav" style={{ backgroundColor: pColor }}>
            {/* {console.log(pColor)} */}
            <ul className="list-none">
              <li className="list-inline">
                <a className="decoNone" style={{ color: screenAC }} href="/">
                  Home
                </a>
              </li>
              <li className="list-inline">
                <a className="decoNone" style={{ color: screenAC }} href="/">
                  About
                </a>
              </li>
              <li className="list-inline">
                <a className="decoNone" style={{ color: screenAC }} href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img class="screenImg" alt="screen-img" src={screen}></img>
          </div>
          <div>
            <div className="screenText" style={{ color: pColor }}>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
          </div>
          <div style={{ backgroundColor: pColor }}>
            <div className="screenText" style={{ color: screenAC }}>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
          </div>
          <div>
            <div className="screenText" style={{ color: pColor }}>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
          </div>
          <div className="screenFooter" style={{ backgroundColor: pColor }}>
            <span style={{ color: screenAC }}>All Rights Reserved-2020</span>
          </div>
        </div>
      </div>
      <footer className="footer">
        <span>
          All Rights Reserved-2020 |{" "}
          <a
            href="http://jesswindevelops.netlify.app"
            style={{
              textDecoration: "none",
              color: "#ec4899",
              fontWeight: "bolder"
            }}
          >
            Jesswin Chetnani
          </a>
        </span>
      </footer>
    </div>
  );
}
