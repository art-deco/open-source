var sa={},ta={"akashic-emails":S,"github-badge":V,"social-buttons":W},ua=L();
[{key:"akashic-emails",id:"emails-div",props:{"api-key":"akashic"}},{key:"social-buttons",id:"ca0cd",props:{url:"https://art-deco.github.io/open-source/documents.html",b:!0,className:"b-xq b-Hk"}},{key:"github-badge",id:"ce823",props:{i:"art-deco",name:"open-source"}}].forEach(function(a){var b=a.key,c=a.id,d=void 0===a.props?{}:a.props,h=void 0===a.children?[]:a.children,e=ta[b],p=e.plain||/^\s*class\s+/.test(e.toString())&&!I.isPrototypeOf(e);d.g={c:"/open-source/",j:function(g){return F(sa[g])}};
c.split(",").forEach(function(g){var l=K(g,b),n=l.parent,f=l.a;if(f){var k={key:b,id:g,plain:p},m;f.render=function(){return m=N(k,e,m,f,n,d,h)};f.render.b=k;ua.observe(f)}})});

//# sourceMappingURL=documents.js.map