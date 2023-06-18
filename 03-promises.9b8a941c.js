const e=document.querySelector(".form");function t(e,t){Math.random()}e.addEventListener("submit",(function(n){n.preventDefault();const{delay:o,step:u,amount:r}=e.elements;for(let e=0;e<Number(r.value);e+=1){const n=Number(o.value)+Number(u.value)*e;t(e+1,n).then()}})),console.dir(typeof e);
//# sourceMappingURL=03-promises.9b8a941c.js.map
