import{H as e,A as t,r as a,R as r,a as n}from"./vendor.171a1ffe.js";const l=({IDL:e})=>e.Service({getValue:e.Func([],[e.Nat],["query"]),increment:e.Func([],[],[])}),s=new e({host:"http://localhost:8000"}),o=t.createActor(l,{agent:s,canisterId:"ryjl3-tyaaa-aaaaa-aaaba-cai"});function c(){const[e,t]=a.exports.useState(),n=a.exports.useCallback((async()=>{const e=await o.getValue();t(e.toString())}),[]);a.exports.useEffect((()=>{n()}),[]);const l=a.exports.useCallback((async()=>{await o.increment(),n()}),[o]);return r.createElement("div",{className:"App"},r.createElement("header",{className:"App-header"},r.createElement("img",{src:"/assets/logo.edbebe7a.svg",className:"App-logo",alt:"logo"}),r.createElement("p",null,"Hello Internet Computer + Vite + React!"),r.createElement("p",null,r.createElement("button",{className:"demo-button",onClick:l},"count is: ",e)),r.createElement("p",null,"Edit ",r.createElement("code",null,"App.tsx")," and save to test HMR updates."),r.createElement("p",null,r.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")," | ",r.createElement("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"},"Vite Docs")," | ",r.createElement("a",{className:"App-link",href:"https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html",target:"_blank",rel:"noopener noreferrer"},"IC SDK Docs"))))}window.global=window,n.render(r.createElement(r.StrictMode,null,r.createElement(c,null)),document.getElementById("root"));
