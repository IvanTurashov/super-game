(function(t){function e(e){for(var n,r,h=e[0],o=e[1],g=e[2],u=0,d=[];u<h.length;u++)r=h[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,g||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,h=1;h<i.length;h++){var o=i[h];0!==s[o]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var h=window["webpackJsonp"]=window["webpackJsonp"]||[],o=h.push.bind(h);h.push=e,h=h.slice();for(var g=0;g<h.length;g++)e(h[g]);var c=o;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"034f":function(t,e,i){"use strict";var n=i("85ec"),s=i.n(n);s.a},"122f":function(t,e,i){t.exports=i.p+"media/background.354cce50.mp3"},"2e11":function(t,e,i){t.exports=i.p+"img/1_right arm.dfc7b175.png"},"55a4":function(t,e,i){t.exports=i.p+"img/1_hend.d58a0c8a.png"},"5f52":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAZCAYAAABq35PiAAAACXBIWXMAAA4VAAAOFQHUajXPAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAArESURBVHjavJhrjF1Xdcd/a+/zuI+5d+6Mx1OPE48SRyYQipQQgWiUqFKLitQUFQIh/VAe6gc+VJWKQESl/YSECkhRRasKkr5UoKFYbUEBp+FRrCYhoCgPEkSN6zhxPH4xM75z79z3uefsvfrh7IlvnETEqPaWju49++zHWv+19n+tveCVTbj87eI9zC8Zb7jCQt0GtIEcWAkCHAXWgQi4CUiBF4Aa8EagB5wC9gIVYAR4YBjm/FqYvwH8eph3DKgDC2E84XcArIb9jwN7gGvD/Cys/2hY/7KBYYB3AZ8HlkLfEJgATwL3AJ8CDgA3BIXWgAJoBqXHARgNCozDmOUA7HYAuhHGE/r64ftSAMkDbwgynAqyVcOzDfwV8EOgA8wBSZCjNwOaB1zov2QwUuBPgc83Gg3SNCWOY86f3yTPC4ATwNVAvGfPHiaTCfV6nUajgarS6/UYjUYsLi5SqVTY2NhgMhmzd+9VVKsVNjfP472n1WqRJAnD4ZDBYECapiwsLDAYDGi32ywsLLC0tMRgMKDb7dJsNmg25xkMBqytrTEajQiAdoNnafC4HR06AbBngKfC7+lgmNfVImAaLMjv3n47f3fffXz5y/fzybs/QcVGqOo1WZbJ7uVlPv6Ju7nrA+9nfWOLfr9PpZLQbNQpnKfd7lCp1Ni91CLPC7Y6PeI4pjVfZ5orw8GAvChozc+RpgmdTpdp7lleXqKSxnS6PaZTR7NZ1ySNZdgfMx6PsdZyzz2f5eDBr7O4uLhraWlpV6fToSgKWq3WirWWjY0Ner2en/FygLPhWP0n8H3g3OsBQ4O75tftvyZuNpv+qtXrFPX2TTe8iTvv/IB89av30+t2ePvN17t9q/t0dXVf4JoxUDEgrlynZ6GmEHlwAj0DNQ+pKb9PFLwpx+BgbGFqYL64BgS2DeCVeREQcB5GUqs3LMB77ng/H/nwR6jVKqDQ6W5TOE+zUQVV8+RTz/LEk0/x6MOHOXnyxF7grgDO48BB4MHgTa8JhgFUhOLpH33dTk4e0+X+psTWKxLJHXf8gXvg2w+ZY0d/Lv31v1YZPuAYDyxaBU0detaguUH2KGQety5IA0xdIVNUPeIVjEVaDu16fCdCFgwy5/DnQL1gdysUiqoK6pEiIp5XrHPjrcMGkLfc8EZ32603A4lc4ISxhRiIzC233KIAk6max378LA8eOsR3v/Ot1vPP/exdWTZ+B/Bu4IuBdyavBkYdaIpQrZsXSc0Gu5MRWQYvvnBMi7WPsXbifwTxROZ7kevH1o4c5F4QImyl5C2nFgFEQihU8AiCxcSKzwVPggFsCi4z6E7QDA6hCIrFxormApgpIC5GgK3nD5KdOpcn/eNW/dRK9TqnbuiYrFmpvsFJ7WpIdvtKsk9+623LvOOtH7R3vOc3uf/gt83Bf/33+c75E+8F3gb8JfClVwNjBPS8R5cakcjYc7qbkruMfUs9ab/4PduMJ4zmYHm+io1UUIE4CtzlSv6KJLwrUJRebnZOoRNsFawJZK9gqzNieFAVjN1ZU9AUahG9bSWNpyiQnX/cpucft36Yoj5DCyymNIB2H1aYgscQtTDpbldfvFFvffON7ta/+X157+038bf3fiM6/INHrh72N74I3Aj8BXB+FgwXwqXbnmg0GhqMFFRTmJ8zuInjwKrlzDOeky863vr2KFhfwzObqujMsrPv9oLSr5VzyewaIceynlqtTDwAJIlRTTCRwxWVcFp2puWlkQyCDvCjrjB4Djn5b0Jlnnfu/w1/7d2r7ksrb5F7//lROx5PPxT0/lSIOuyYd7cINKqC1IXlRcOupvDCWfCJodN3DIZKkQRh9QrkqaY8fbVEmE5KUOMYprmSirxSBolBkguA2kgwHgXBDTCb35cD84t87qM1v5Kid3+BCvCHIRx/nJLJEeCENURWIS08gwmcbSv9gWe5BWc2FWPg+lVTpjdXImGn9FmfK0ak3FJBFXzxWjLojDcKiA1PgndGfHtTkuKM/eQfRXLfn8XsWxaAPw55FiHkMSwcbPbBFEI2UozA3iVBM1iehySGX5zVl7vm5WwKxNCZQiXQyzRXKpXSMJeea0eoqeGGMQyVj3445rabzM6Z/T1g/w4Y+wHds0ugCSaB5ZaQVoSjZ5TFlpAVcKytZXrmrpBnSMhIvJZMYgEjF3j6V0DYRMAu+O5hz/OndYfIfgaMdpiuC0wTNHVT6DvIPfQHSrUi9EagDq5dkVeJzpfx1pRDdU7Ii9Ib00goRloGrl+Bg2wVHWfwk4e9/slnc3P8tAf4EfA5YDMqnZGTxpAeOaVIDrUpdPtKEgnXr0B/WJrBDMF3goWuRPOA0fL4U3pIXlAeE3kdYAYPMhFIjWL7jOqhR7z/9D8V6fF1D/AI8LEQTTQKW654D9UKmAWhWi29MU6gPSnjeJoqm1NFGiEyyyWef7mEMTtHIIFuR6mlZcfEC9VF8L0QrYuZe7cCHkUQEmCCtw6hwOHwx5/25h8PFfL3h33aLqPTg+FG/pOL84wU4KqWgIdzORQKu+bEnzyF1iuYubrIfEuQeWDrogJAYP6XUgQ7825DX3FRmcbvWH6mrwjjowv/k1gwkZS65goTcTJSpwYb9ithnFAG3ILC5GpIRHxHcUPs157w9iv/Xcjh455wzf8X4AuBK16Wge5wRv9MRxvZhvp0BI2amGKosr/ANUSkN/TCtno28RQYFCHC4xDyoEQFYYwnR6liUZQpDsGgGAweC5oj4lBqGDzoUJ1EIsRYMgomgGLxaLWGZpkaQJIezh/1amLBOjw5MFZPTSx1hLYKFRJU/DPHnDlyWuXexxz/e07ZGCjAEeArwD+EcsAr0vEUWDBCY7SNj7r4GwTyTM16VyRxGp3dVPIMZQ3lae9xAiNVCjxVsViFPjkGG0BwZDgMERbFisOhOlYnESJVici00DEqdWKJUSZa4NHSM8QjwES9WGCr9J3RGDvKFNtV3dqG6hyy2EQ3zyrHR8hcCj99wfODI94+t6788HlfuovSC97wNeCxX3ZrdQArFcSuqznfwQwzmOTKpx8q5NimkkawNxbjTiHbXW+aTSFKRWmrbmWYSpWoVkN1GzpD0jiGRgPIMNs9r5Jgmk2xDND+GTW5JV1sAB3R7YHaaaHxrqZgrOhw25tRgVlYKJPIaFKyyQM/dRw7r0SiUkuE9lAZZ0hkYb0Pp9ql8r0y4g2AtioPAd8IUWP4emqgfy7wmet2G7nrZsORtvLNJ16eTNQTeOebDQeWDXkOoxxGmVJLoF4VtvqQ5crCnGAFxrkHysyxnpb00RmBemVhzpAV0BkotRQqieAKJXMKKqQRxJHQnyj9ifLchvLzc2VOEBlMUV5x+kAkQlWVHDgTjLsOHArM9h+hAja6lILwZ8INjpkCbS1Uhx4Afhs4YE1ZbgFyEWIjL70PgeqMoFPApBFRdqESOUkiKtPipe/TyDJXuJfot4gMqVfwZfAYm1LRneCyBfw4FGmaZerEWiDEJNRBnw0e0eHC/e6Sq+OrwJ2h/NcIl5cG8F/At4D3Ab8TKuMrQCsUcF2oYo9D7NgRaiHMPx7Wvxb4RXhWggX7oaibhXVWg1XPAtcH2Y6GdZZDgfj+oKi76KgX/98pTi0os9OaF32f2wnBoaWhas3MPX3hVebMtsrMfZ6gaHKRDLMtuWjPy9r+bwDdpuJkts6eGwAAAABJRU5ErkJggg=="},7245:function(t,e,i){t.exports=i.p+"img/shot gun.b1bde589.png"},8198:function(t,e,i){t.exports=i.p+"media/shoot.071536da.mp3"},"85ec":function(t,e,i){},"8bb7":function(t,e,i){t.exports=i.p+"img/1_head.d080f160.png"},9972:function(t,e,i){t.exports=i.p+"img/1_body.6903a4f9.png"},"9c06":function(t,e,i){t.exports=i.p+"img/1_right leg.6fb7af4f.png"},aebd:function(t,e,i){t.exports=i.p+"img/1_left leg.1f556e8f.png"},b8c3:function(t,e,i){},bd49:function(t,e,i){t.exports=i.p+"img/WEAPON.05e2c123.png"},cd49:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=i("750b"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t.isGameStarted?i("Game",{attrs:{"target-keys":t.targets},on:{win:t.onWin}}):i("div",{staticClass:"h-100 d-flex flex-row justify-content-center align-items-center"},[t.winnerName?i("winner",{attrs:{"winner-name":t.winnerName},on:{"new-game":t.startNewGame}}):i("target-creator",{staticClass:"w-25",model:{value:t.targets,callback:function(e){t.targets=e},expression:"targets"}})],1)],1)},r=[],h=(i("f9e3"),i("2dd8"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("canvas",{ref:"canvas"})}),o=[],g=(i("4160"),i("159b"),i("4de4"),i("d4ec")),c=i("bee2"),u=i("9ab4"),d=i("081e"),f=(i("cb29"),i("13d5"),i("b64b"),i("ade3")),l=i("5530"),p=i("0f32"),m=i.n(p),v=i("5f52"),w=i.n(v),y=function(){function t(e,i,n){Object(g["a"])(this,t),this.size={width:20,height:10},this.speed=80,this.position=i,this.direction=n,this.canvasCtx=e,this.velocity={x:n.x*this.speed,y:n.y*this.speed},this.image=new Image(this.size.width,this.size.height),this.image.src=w.a}return Object(c["a"])(t,[{key:"render",value:function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.canvasCtx.drawImage(this.image,this.position.x,this.position.y,this.size.width,this.size.height)}}]),t}(),b=y,I=i("2e11"),A=i.n(I),x=i("e0e8"),C=i.n(x),k=i("9c06"),z=i.n(k),j=i("aebd"),O=i.n(j),B=i("55a4"),P=i.n(B),E=i("9972"),W=i.n(E),D=i("8bb7"),F=i.n(D),R=i("bd49"),L=i.n(R),S=i("7245"),T=i.n(S),G=i("8198"),N=i.n(G),V=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=document.createElement("audio");i.src=t,i.loop=e,i.volume=.1,i.play()},M=V,K={leftArmImage:{width:325,height:235},rightArmImage:{width:219,height:332},leftLegImage:{width:217,height:255},rightLegImage:{width:217,height:255},bodyImage:{width:442,height:496},headImage:{width:753,height:773},hendImage:{width:122,height:179},weaponImage:{width:349,height:272},shotGunImage:{width:138,height:193}},Q=function(){function t(e,i){Object(g["a"])(this,t),this.bullets=[],this.size={width:0,height:0},this.p=.2,this.angleWeapon=0,this.leftArmImage=new Image,this.rightArmImage=new Image,this.leftLegImage=new Image,this.rightLegImage=new Image,this.bodyImage=new Image,this.headImage=new Image,this.hendImage=new Image,this.weaponImage=new Image,this.shotGunImage=new Image,this.lastShot=0,this.position=i,this.canvasCtx=e,this.leftArmImage.src=C.a,this.rightArmImage.src=A.a,this.leftLegImage.src=O.a,this.rightLegImage.src=z.a,this.bodyImage.src=W.a,this.headImage.src=F.a,this.hendImage.src=P.a,this.weaponImage.src=L.a,this.shotGunImage.src=T.a,this.sizes=this.generateSizes(K),this.weaponPosition={x:this.position.x+this.sizes.bodyImage.width,y:this.position.y+.8*this.sizes.bodyImage.height},this.initEvents()}return Object(c["a"])(t,[{key:"generateSizes",value:function(t){var e=this,i=Object.keys(t).reduce((function(t,i){return Object(l["a"])({},t,Object(f["a"])({},i,{width:K[i].width*e.p,height:K[i].height*e.p}))}),{});return i}},{key:"render",value:function(){this.canvasCtx.beginPath(),this.canvasCtx.fillStyle="black",this.canvasCtx.fill(),this.renderPlayer(),this.renderBullets(),Date.now()-this.lastShot<100&&this.canvasCtx.drawImage(this.shotGunImage,this.weaponPosition.x+this.sizes.weaponImage.width,this.weaponPosition.y-.25*this.sizes.weaponImage.height,this.sizes.shotGunImage.width,this.sizes.shotGunImage.height)}},{key:"renderPlayer",value:function(){this.renderLeftArm(),this.renderLeftLeg(),this.renderRightLeg(),this.renderBody(),this.renderHead(),this.renderRightArm()}},{key:"renderBody",value:function(){this.canvasCtx.drawImage(this.bodyImage,this.position.x,this.position.y,this.sizes.bodyImage.width,this.sizes.bodyImage.height)}},{key:"renderLeftArm",value:function(){var t={x:this.position.x+.8*this.sizes.bodyImage.width,y:this.position.y+.25*this.sizes.bodyImage.height};this.canvasCtx.drawImage(this.leftArmImage,this.position.x+.8*this.sizes.bodyImage.width,this.position.y+.25*this.sizes.bodyImage.height,this.sizes.leftArmImage.width,this.sizes.leftArmImage.height),this.renderWeapon(t)}},{key:"renderRightArm",value:function(){this.canvasCtx.drawImage(this.rightArmImage,this.position.x-.3*this.sizes.bodyImage.width,this.position.y+.25*this.sizes.bodyImage.height,this.sizes.rightArmImage.width,this.sizes.rightArmImage.height)}},{key:"renderRightLeg",value:function(){this.canvasCtx.drawImage(this.rightLegImage,this.position.x+.1*this.sizes.bodyImage.width,this.position.y+.75*this.sizes.bodyImage.height,this.sizes.rightLegImage.width,this.sizes.rightLegImage.height)}},{key:"renderLeftLeg",value:function(){this.canvasCtx.drawImage(this.leftLegImage,this.position.x+.55*this.sizes.bodyImage.width,this.position.y+.75*this.sizes.bodyImage.height,this.sizes.leftLegImage.width,this.sizes.leftLegImage.height)}},{key:"renderWeapon",value:function(t){this.weaponPosition={x:t.x+.8*this.sizes.leftArmImage.width,y:this.position.y+10},this.canvasCtx.drawImage(this.weaponImage,this.weaponPosition.x,this.weaponPosition.y,this.sizes.weaponImage.width,this.sizes.weaponImage.height)}},{key:"renderHead",value:function(){this.canvasCtx.drawImage(this.headImage,this.position.x-.45*this.sizes.bodyImage.width,this.position.y-1.05*this.sizes.bodyImage.height,this.sizes.headImage.width,this.sizes.headImage.height)}},{key:"initEvents",value:function(){var t=this;this.canvasCtx.canvas.addEventListener("click",m()((function(e){t.addBullet({x:e.x,y:e.y})}),1e3))}},{key:"renderBullets",value:function(){var t=this;this.bullets.length&&this.bullets.forEach((function(e){var i=t.checkLostBullet(e);i?t.destroyBullet(e):e.render()}))}},{key:"addBullet",value:function(t){this.lastShot=Date.now();var e={x:this.weaponPosition.x+this.sizes.weaponImage.width,y:this.weaponPosition.y+3},i=t.x-e.x,n=t.y-e.y,s=Math.sqrt(i*i+n*n),a={x:i/s,y:n/s},r=new b(this.canvasCtx,e,a);this.bullets.push(r),M(N.a)}},{key:"destroyBullet",value:function(t){this.bullets=this.bullets.filter((function(e){return e!==t}))}},{key:"checkLostBullet",value:function(t){return t.position.x+t.size.width<0||t.position.x>this.canvasCtx.canvas.width||(t.position.y+t.size.height<0||t.position.y>this.canvasCtx.canvas.height)}}]),t}(),H=Q,Y=function(){function t(){Object(g["a"])(this,t)}return Object(c["a"])(t,null,[{key:"checkCollision",value:function(t,e,i){t.forEach((function(t){e.forEach((function(e){var n=t.position.x+t.size.width,s=t.position.x,a=t.position.y,r=t.position.y+t.size.height,h=e.position.x+e.size.width,o=e.position.x,g=e.position.y,c=e.position.y+e.size.height,u=n>o&&n<h||s<h&&s>o,d=a<c&&a>g||r>g&&r<c;u&&d&&i(t,e)}))}))}}]),t}(),U=i("f8c1"),X=i.n(U),q=function(){function t(e,i){Object(g["a"])(this,t),this.speed=0,this.position={x:0,y:0},this.size={width:40,height:50},this.canvasCtx=e,this.key=i,this.image=new Image(this.size.width,this.size.height),this.image.src=X.a,this.dropTarget()}return Object(c["a"])(t,[{key:"setStartPosition",value:function(){var t=this.canvasCtx.canvas.width-this.size.width,e=t-t/3;this.position={x:Math.random()*(t-e)+e,y:Math.random()*this.size.height*4-4*this.size.height}}},{key:"setSpeed",value:function(){var t=6,e=2;this.speed=Math.random()*(t-e)+e}},{key:"dropTarget",value:function(){this.setStartPosition(),this.setSpeed()}},{key:"render",value:function(){this.position.y>=this.canvasCtx.canvas.height?this.dropTarget():this.position.y+=this.speed,this.canvasCtx.drawImage(this.image,this.position.x,this.position.y,this.size.width,this.size.height)}}]),t}(),J=function(){function t(e){Object(g["a"])(this,t),this.canvasCtx=e}return Object(c["a"])(t,[{key:"create",value:function(t){return new q(this.canvasCtx,t)}}]),t}(),Z=i("e904"),_=i.n(Z),$=i("122f"),tt=i.n($),et=function(){function t(e,i){Object(g["a"])(this,t),this.targets=[],this.backgroundImage=new Image,this.canvasCtx=e,this.canvasCtx.canvas.width=i.width,this.canvasCtx.canvas.height=i.height,this.targetFactory=new J(e),this.player=new H(this.canvasCtx,{x:50,y:this.canvasCtx.canvas.height-150}),this.backgroundImage.src=_.a,this.render(),M(tt.a,!0)}return Object(c["a"])(t,[{key:"shoot",value:function(t,e){this.player.destroyBullet(t),this.targets=this.targets.filter((function(t){return t!==e})),this.emitWinner(e.key)}},{key:"render",value:function(){var t=this,e=this.canvasCtx.canvas;this.canvasCtx.clearRect(0,0,e.width,e.height),this.renderBackground(),this.player.render(),this.renderTargets(),Y.checkCollision(this.player.bullets,this.targets,this.shoot),window.requestAnimationFrame((function(){t.renderTargets(),t.render()}))}},{key:"renderBackground",value:function(){var t=this.canvasCtx.canvas;this.canvasCtx.drawImage(this.backgroundImage,0,0,t.width,t.height)}},{key:"addTarget",value:function(t){var e=this.targetFactory.create(t);this.targets.push(e)}},{key:"renderTargets",value:function(){this.targets.forEach((function(t){t.render()}))}},{key:"emitWinner",value:function(t){var e=new CustomEvent("win",{detail:{winnerName:t}});this.canvasCtx.canvas.dispatchEvent(e)}}]),t}();Object(u["a"])([d["bind"]],et.prototype,"shoot",null);var it=et,nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-form",{on:{submit:function(e){return e.preventDefault(),t.addTargets(e)}}},[i("b-form-tags",{ref:"tagsInput",staticClass:"mb-2",attrs:{placeholder:"Добавить названия целей"},model:{value:t.targets,callback:function(e){t.targets=e},expression:"targets"}}),i("b-button",{staticClass:"mr-2",attrs:{variant:"success",type:"submit",block:""}},[t._v(" Let's play! ")])],1)},st=[],at=i("a17a"),rt=i("1947"),ht=i("11de"),ot=["Max Green","Roman Domoratskii","Сергей Ермаков | podkot","Ivan Turashov","wwwova","Gautama Shakyamuni","Andrey Brunetkin","Anna Shtanova","Irina","Ivan Votche 👽"],gt=ot,ct=Object(s["c"])({name:"TargetsCreator",components:{BFormTags:at["a"],BButton:rt["a"],BForm:ht["a"]},setup:function(t,e){var i=e.emit,n=Object(s["f"])(gt),a=function(){i("input",n.value)};return{targets:n,addTargets:a}}}),ut=ct,dt=i("2877"),ft=Object(dt["a"])(ut,nt,st,!1,null,null,null),lt=ft.exports,pt=Object(s["c"])({name:"Game",components:{TargetCreator:lt},props:{targetKeys:{type:Array,required:!0}},setup:function(t,e){var i=t.targetKeys,n=e.emit,a=Object(s["f"])(null),r=Object(s["f"])(null),h=function(){var t=a.value.getContext("2d"),e=window,n=e.innerWidth,s=e.innerHeight;r.value=new it(t,{width:n,height:s}),i.forEach((function(t){return r.value.addTarget(t)}))};return Object(s["d"])((function(){h(),a.value.addEventListener("win",(function(t){n("win",t.detail.winnerName)}))})),{canvas:a}}}),mt=pt,vt=(i("e4f9"),Object(dt["a"])(mt,h,o,!1,null,"02fa371e",null)),wt=vt.exports,yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"winner"},[i("div",{staticClass:"winner__name"},[t._v(t._s(t.winnerName)+"!")]),i("b-button",{attrs:{variant:"success"},on:{click:t.startNewGame}},[t._v(" New Game ")])],1)},bt=[],It=i("890b"),At=i.n(It);n["a"].use(At.a);var xt=Object(s["c"])({name:"Winner",components:{BButton:rt["a"]},props:{winnerName:{type:String,required:!0}},setup:function(t,e){var i=e.emit,n=e.root,a=function(){i("new-game")};return Object(s["d"])((function(){n.$confetti.start()})),Object(s["e"])((function(){n.$confetti.stop()})),{startNewGame:a}}}),Ct=xt,kt=(i("efe5"),Object(dt["a"])(Ct,yt,bt,!1,null,null,null)),zt=kt.exports,jt=Object(s["c"])({name:"App",components:{Game:wt,TargetCreator:lt,Winner:zt},setup:function(){var t=Object(s["f"])([]),e=Object(s["f"])(""),i=Object(s["a"])((function(){return t.value.length>0})),n=function(i){t.value=[],e.value=i},a=function(){e.value=""};return{targets:t,winnerName:e,isGameStarted:i,onWin:n,startNewGame:a}}}),Ot=jt,Bt=(i("034f"),Object(dt["a"])(Ot,a,r,!1,null,null,null)),Pt=Bt.exports;n["a"].config.productionTip=!1,n["a"].use(s["b"]),new n["a"]({render:function(t){return t(Pt)}}).$mount("#app")},e0e8:function(t,e,i){t.exports=i.p+"img/1_left arm.98d64d28.png"},e131:function(t,e,i){},e4f9:function(t,e,i){"use strict";var n=i("b8c3"),s=i.n(n);s.a},e904:function(t,e,i){t.exports=i.p+"img/BACKGROUND.bc46be22.png"},efe5:function(t,e,i){"use strict";var n=i("e131"),s=i.n(n);s.a},f8c1:function(t,e,i){t.exports=i.p+"img/bottle.afdf9bf1.png"}});
//# sourceMappingURL=app.68964413.js.map