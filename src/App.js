import React, { useState }  from "react";  
import head from "./head.svg";
import screen from "./screenImg.svg";
import "./App.css";

alert("Click on Color to Copy Color Code!")
var Black={};
var Blue={};
var Gray={};
var Pink={};
var White={};
var NeonBlue={};
var Teal={};
var Sky={};
var BeautyBush={};
var Brown={};
var RoyalBlue={};
var MistyRose={};
var Topaz={};
var WispPink={}


WispPink.color="WispPink"
WispPink.colorCode="#f3e6e3"
WispPink.accent=[Brown,Black,RoyalBlue,Blue,Teal,Topaz]

Topaz.color="Topaz"
Topaz.colorCode="#776d8a"
Topaz.accent=[White,MistyRose,Pink,Gray,BeautyBush,WispPink]

MistyRose.color="MistyRose"
MistyRose.colorCode="#ffdada"
MistyRose.accent=[Brown,Black,RoyalBlue,Blue,Teal,Topaz]

RoyalBlue.color="RoyalBlue"
RoyalBlue.colorCode="#31326f"
RoyalBlue.accent=[BeautyBush,White,Gray,Sky,Pink,MistyRose]

Brown.color="Brown"
Brown.colorCode="#3f3b3b"
Brown.accent=[BeautyBush,White,Gray,Sky]

BeautyBush.color="BeautyBush"
BeautyBush.colorCode="#e7b3b3"
BeautyBush.accent=[Blue,Black,Brown]


Sky.color="Sky"
Sky.colorCode="#a1eafb"
Sky.accent=[Blue,Black,Brown]

Teal.color="Teal"
Teal.colorCode="#1e6262"
Teal.accent=[Gray,White]

NeonBlue.color="Neon"
NeonBlue.colorCode="#22d1ee"
NeonBlue.accent=[Black,Gray,White]

Black.color="Black";
Black.colorCode="#000";
Black.accent=[White,NeonBlue,Sky];

Blue.color="MidnightExpress";
Blue.colorCode="#14274e";
Blue.accent=[Gray,Pink,Sky,White];

Pink.color="Pink";
Pink.colorCode="#fc85ae";
Pink.accent=[Gray,Black,Blue];

White.color="White";
White.colorCode="#fff";
White.accent=[Black,Blue,Teal,NeonBlue,Brown];

Gray.color="SmokyGray";
Gray.colorCode="#dee1ec";
Gray.accent=[Black,Pink,Blue];

var primaryColors=[Black,Blue,Pink,White,Gray,NeonBlue,Teal,Sky,Brown,BeautyBush,RoyalBlue,MistyRose,Topaz,WispPink]; 
var bgColors = [Black,Blue,White,Gray,Pink,NeonBlue,RoyalBlue,MistyRose];
export default function App() {
  var [pColor, colorSetter] = useState("");
  var [bgColor, bgColorSetter] = useState("");
  var [aColors, aColorSetter] = useState([{'color':'','colorCode':''}]);
  var [screenAC, screenACS] = useState("");
    function getBg(colorCode){
      if(colorCode===bgColor){
        return colorCode;
        }
    }
    function getPrimaryBg(colorCode){
      if(colorCode===pColor){
        return colorCode;
        }
      }
    function getAccentBg(colorCode){
      if(colorCode===screenAC){
        return colorCode;
        }
      }  
    function changeColors(index,code) {
    copyCode(code);
    aColors=[];
    document.querySelector("#accColor").style.display = "block";
    document.querySelector("#aColor").style.display = "flex";
    pColor = code;
    colorSetter(pColor);
    primaryColors[index].accent.map((item)=>{
    aColors=aColors.concat({'color':item.color,'colorCode':item.colorCode});
    return aColors;
    })
    aColorSetter(aColors);
}
  function changeAccentColor(item) {
    copyCode(item);
    screenAC = item;
    screenACS(screenAC);
  }
  function changeBgColor(item) {
    copyCode(item);
    document.querySelector("#pColor").style.display = "block";
    document.querySelector("#pDiv").style.display = "flex";
    bgColor = item;
    bgColorSetter(bgColor);
   }
   function copyCode(colorCode){
    var cb = document.getElementById("cb");
    cb.value = colorCode;
    cb.style.display='block';
    cb.select();
    document.execCommand('copy');
    cb.style.display='none';
   }

  function componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/a076d05399.js";
    script.async = true;
    document.body.appendChild(script);
  }

  function myFunction() {
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
        {componentDidMount()}
        <div className="mainHead" id="navi">
        <a href={url} style={{textDecoration:"none",color:"#22d1ee"}}>
          <div className="title">Color Map</div></a>
          
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
            <i className="fa fa-bars"></i>
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
              <span onClick={() => changeBgColor(item.colorCode)} className="bgColors" style={{backgroundColor:getBg(item.colorCode)}}>
                {item.color}
              </span>
            );
          })}
        </div>
        <input id="cb" type="text" hidden></input>
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
              <span style={{backgroundColor:getPrimaryBg(item.colorCode)}}
                onClick={() => changeColors(index,item.colorCode)}
                className="primaryColors"
              >
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
              <span style={{backgroundColor:getAccentBg(item.colorCode)}}
                onClick={() => changeAccentColor(item.colorCode)}
                className="accentColors">
                {item.color}
              </span>
               );
          })}
        </div>
      </div>
      <div
        className="screenn"
        style={{ boxShadow:`0 0 30px ${screenAC}`, backgroundColor: bgColor }}
      >
        <div className="screenNav" style={{ backgroundColor: pColor }}>
          
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

  // function MainApp(){
  //   return(
  //     <div>
  //       {console.log("Main again")}
        
  //   </div>
  //   );
  // }
  function KnowMore() {
    // document.querySelector("#knowMore").classList.add("active")
    return (
    <div>
      <h1 style={{color:"pink"}}>KNow More</h1>
    </div>
    );
  }

  
    
}
