!function(){var t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),e=document.querySelector("body");t.addEventListener("click",(function(t){timerId=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),console.log("Color: "+e.style.backgroundColor)}),1e3)})),o.addEventListener("click",(function(){clearInterval(timerId),console.log("Interval with id ".concat(timerId," has stopped!"))}))}();
//# sourceMappingURL=01-color-switcher.b902ae5d.js.map
