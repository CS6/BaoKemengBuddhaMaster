(this.webpackJsonpstorybox=this.webpackJsonpstorybox||[]).push([[0],{117:function(e,t,o){e.exports=o(187)},121:function(e,t,o){},122:function(e,t,o){e.exports=o.p+"static/media/logo.5d5d9eef.svg"},123:function(e,t,o){},173:function(e,t){var o=window.AFRAME,a=window.THREE;o.registerComponent("mythreejsthingObj",{schema:{color:{default:"#000"}},update:function(){var e=new a.MeshBasicMaterial({color:this.data.color,wireframe:!0}),t=new a.BoxGeometry(1,1,1);this.mesh=new a.Mesh(t,e),this.el.setObject3D("mesh",this.mesh)},remove:function(){this.el.removeObject3D("mesh")}})},174:function(e,t,o){e.exports=o.p+"static/media/wavefile_short.ce2964db.mp3"},175:function(e,t,o){e.exports=o.p+"static/media/miku_v2.bffb7f9d.pmd"},176:function(e,t,o){e.exports=o.p+"static/media/wavefile_v2.f4c8de6a.vmd"},187:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o.n(a),i=o(28),r=o.n(i),l=(o(121),o(9)),c=o(199),s=o(195),d=o(200),m=o(202),p=o(201),h=o(203),u=o(198),f=o(194),g=o(197),y=(o(122),o(123),o(12)),E=o(0),w=(o(52),o(53),o(54),o(55),o(56),o(57),o(58),o(87),o(10)),F=o(42),b=o.n(F),v=o(43),j=o.n(v),M=(o(44),o(59),o(45)),x=o.n(M),C=(o(60),o(61),o(38)),A=window.AFRAME,O=window.THREE;A.registerComponent("VRMcomponent",{schema:{src:{type:"string"}},init:function(){var e=this;(new O.GLTFLoader).load(this.data.src,(function(t){C.VRM.from(t).then((function(t){e.el.object3D.add(t.scene)}))}),(function(e){console.log("Loading model...",e.loaded/e.total*100,"%")}),(function(e){return console.error(e)}))}});window.AFRAME;var k=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),o=(t[0],t[1],[{id:"fish",src:"https://poly.googleapis.com/downloads/fp/1600941173254652/5RqQmne01WF/ddDgMluUzWs/model.gltf",position:" 0 0 0",scale:"1 1 1",rotation:"-71.491 -38.73194695084365 18"},{id:"car",src:"https://poly.googleapis.com/downloads/fp/1575545288491751/2u4e9d0aePt/fSG2yghO86V/model.gltf",position:" 0 0 0",scale:"1 1 1",rotation:"0 -38.73194695084365 0"},{id:"gundam",src:"https://poly.googleapis.com/downloads/fp/1598786852441356/26x_0PKFg-l/crBUhvk7wuC/model.gltf",position:" 1 0 0",scale:"1 1 1",rotation:"0 0 0"},{id:"fireside",src:"https://poly.googleapis.com/downloads/fp/1601030391303913/ero8IJnrXzk/dXu3gCUrsUp/model.gltf",position:" 1 0 0",scale:"1 1 1",rotation:"0 0 0"}]);document.querySelector("#mario");return n.a.createElement(d.a,{background:"dark-3"},n.a.createElement(d.a,{direction:"row",flex:!0,overflow:{horizontal:"hidden"}},n.a.createElement(d.a,{flex:!0,align:"center",justify:"center"},"app body",n.a.createElement(w.Scene,{stats:!0},n.a.createElement("a-sky",{color:"#ECECEC"}),n.a.createElement("a-plane",{rotation:"-90 0 0",width:"4",height:"4",color:"#7BC8A4"}),n.a.createElement("a-entity",{id:"mainCamera",position:"0 0 3.8",camera:!0,active:!0,"look-controls":!0}),n.a.createElement("a-entity",{id:"observerCamera",position:"2 1.8 4.8",rotation:"-20 45 0",camera:!0,observer:"canvas: #cameraObserver;",active:"false"}),n.a.createElement("a-entity",{id:"mario"}),n.a.createElement("a-entity",{id:"mythreejsthing",mythreejsthing:"color: green;",position:"0 1 -5"}," "),n.a.createElement(w.Entity,{geometry:{primitive:"box"},material:{color:"red"},position:{x:0,y:0,z:-5}}),n.a.createElement(w.Entity,{"particle-system":{preset:"snow"}}),n.a.createElement(w.Entity,{light:{type:"point"}}),n.a.createElement(w.Entity,{"gltf-model":{src:"virtualcity.gltf"}}),n.a.createElement(w.Entity,{text:{value:"Hello, WebVR!"}}),n.a.createElement(w.Entity,{primitive:"a-box",color:"red",position:"0 0 -5"}),n.a.createElement(w.Entity,{primitive:"a-sphere",color:"green",position:"-2 0 -3"}),n.a.createElement(w.Entity,{primitive:"a-cylinder",color:"blue",position:"2 0 -3"}),n.a.createElement("a-plane",{rotation:"-90 0 0",position:"0 0 0",color:"#66FFFF",width:"3",height:"3"}),n.a.createElement("a-entity",{id:"\u92fc\u5f48\u5728\u9019","gltf-model":x.a,"modify-materials":!0,position:"-3 0 0",scale:"0.5 0.5 0.5","animation-mixer":"clip: TPoseUWK"},n.a.createElement("a-light",{type:"ambient",ntensity:"2",position:"0 4 0",color:"#445451"})),n.a.createElement("a-camera",{position:"0 1.28 0",cursor:"rayOrigin: mouse"}),[{id:"C1",color:"#FF1100",obj:[],positon:["1 0.2 -1"]},{id:"C2",color:"#FF5555",obj:[],positon:["1 0.2 0"]},{id:"C3",color:"#7BC8A4",obj:[],positon:["1 0.2 1"]},{id:"B1",color:"#56a2FF",obj:[],positon:["0 0.2 -1"]},{id:"B2",color:"#FFC65D",obj:[],positon:["0 0.2 0"]},{id:"B3",color:"#FF22FF",obj:[],positon:["0 0.2 1"]},{id:"A1",color:"#0011FF",obj:[],positon:["-1 0.2 -1"]},{id:"A2",color:"#5555FF",obj:[],positon:["-1 0.2 0"]},{id:"A3",color:"#FFaaFF",obj:[],positon:["-1 0.2 1"]}].map((function(e){return n.a.createElement("a-plane",{rotation:"-90 0 0",position:e.positon,color:e.color,width:"1",height:"1"},n.a.createElement("a-cylinder",{rotation:"90 0 0",radius:"0.3",height:"0.5",color:e.color,shadow:!0}),n.a.createElement("a-entity",{id:"\u9bc9\u9b5a\u738b","gltf-model":o[0].src,position:o[0].position,scale:o[0].scale,rotation:o[0].rotation}))})),n.a.createElement("a-entity",{"gltf-model":"https://poly.googleapis.com/downloads/fp/1575545288491751/2u4e9d0aePt/fSG2yghO86V/model.gltf",scale:"1 1 1",position:"0 0 0",rotation:"0 -38.73194695084365 0"}),n.a.createElement(w.Entity,{gblock:"https://poly.google.com/view/eY4KSqePVFq&key=AIzaSyAJy9LE4G4YKMceL5SCAQwSnTlOWV0NMsA"}),n.a.createElement(w.Entity,{gblock:"https://poly.googleapis.com/v1/assets/eY4KSqePVFq/?key=AIzaSyAJy9LE4G4YKMceL5SCAQwSnTlOWV0NMsA"}),n.a.createElement("a-entity",{id:"GODlightJUMP",geometry:"primitive: sphere; radius: 0.4",material:"opacity: 0",light:"type: point; color: #FFF",position:"0 1.31793 -3",animation:"property: position;dur:500; to: 0 1.5 -3; dir: alternate; loop: NaN"}),n.a.createElement("a-entity",{id:"GODJUMP","gltf-model":j.a,rotation:"0 180 0",geometry:"primitive: sphere; radius: 0.2",material:"shader: flat",color:"#FFF",position:"0 0.75735 -2",animation:"property: position;dur:500; to: 0 1 -2; dir: alternate; loop: true"}),n.a.createElement("a-cylinder",{position:"-0.05 0.5 -2.5",radius:"0.5",height:"0.5",color:"#FFC65D"}),n.a.createElement("a-plane",{rotation:"-90 0 0",position:"0 -0.1 0",color:"#445451",width:"30",height:"30"}),n.a.createElement("a-box",{position:"-1 0.5 -3",rotation:"0 45 0",color:"#4CC3D9",shadow:!0}),n.a.createElement("a-sphere",{position:"0 1.25 -5",radius:"1.25",color:"#EF2D5E",shadow:!0}),n.a.createElement("a-cylinder",{position:"1 0.75 -3",radius:"0.5",height:"1.5",color:"#FFC65D",shadow:!0}),n.a.createElement("a-plane",{position:"0 0 -4",rotation:"-90 0 0",width:"4",height:"4",color:"#7BC8A4",shadow:!0}),n.a.createElement("a-light",{type:"ambient",color:"#445451"}),n.a.createElement(w.Entity,Object(y.a)({primitive:"a-sky",src:"sechelt.jpg",rotation:"0 270 -7.840000000000001",radius:"10",position:"0 0.63 0"},"src",b.a))))))},D=window.AFRAME;D.registerComponent("mythreejsthing",{schema:{color:{default:"#000"}},update:function(){var e=new E.MeshBasicMaterial({color:S,wireframe:!0}),t=new E.BoxGeometry(2,2,2);this.el.setObject3D("mesh",new E.Mesh(t,e))},remove:function(){this.el.removeObject3D("mesh")}}),D.registerComponent("bar",{schema:{color:{default:"#000"}},init:function(){},remove:function(){}}),D.registerComponent("mythreejsOBJ",{schema:{bottom:{default:5},top:{default:5},height:{default:20},color:{default:"#FFC65D"}},update:function(){var e=this,t=new E.CylinderGeometry(this.data.top,this.data.bottom,this.data.height,4);t.vertices.find((function(t){return 0===t.x&&t.y===e.data.height/2&&0===t.z})).y=this.data.height/2+this.data.height/4;t.vertices.find((function(e){return 0===e.x&&0===e.y&&0===e.z}));var o=new E.MeshPhongMaterial({color:this.data.color,specular:12303291,shininess:100,transparent:!0,opacity:.8}),a=new E.Mesh(t,o);a.receiveShadow=!0,a.translateY(this.data.height/2);var n=new E.Object3D;n.add(a),n.rotateX(.6*Math.random()-.3),n.rotateY(.6*Math.random()-.3),n.rotateZ(.6*Math.random()-.3),this.el.setObject3D("mesh",n)},remove:function(){this.el.removeObject3D("mesh")}}),D.registerComponent("lowpoly",{schema:{color:{type:"string",default:"#FFF"},nodes:{type:"boolean",default:!1},opacity:{type:"number",default:1},wireframe:{type:"boolean",default:!1}},init:function(){var e=this.el.getObject3D("mesh"),t=document.querySelector("a-scene").object3D;e.material=new E.MeshPhongMaterial({color:this.data.color,shading:E.FlatShading});var o=new E.OctahedronGeometry(2.5,2),a=new E.MeshPhongMaterial({color:"#FFFFFF",opacity:this.data.opacity,transparent:!0,wireframe:!0}),n=new E.Mesh(o,a),i=e.parent.position,r=i.x,l=i.y,c=i.z;if(n.position.set(r,l,c),this.data.wireframe&&t.add(n),this.data.nodes){var s=new E.Group,d=n.geometry.vertices;for(var m in d){var p=new E.SphereGeometry(.045,16,16),h=new E.MeshBasicMaterial({color:"#FFFFFF",opacity:this.data.opacity,shading:E.FlatShading,transparent:!0}),u=new E.Mesh(p,h);u.position.set(d[m].x,d[m].y+4,d[m].z+-10),s.add(u)}t.add(s)}},update:function(){this.el.getObject3D("mesh").material.color=new E.Color(this.data.color)}});var S=["#FF1100","#FF5555","#7BC8A4","#56a2FF","#FFC65D","#FF22FF","#0011FF","#5555FF","#FFaaFF"],R=(o(173),window.AFRAME),B=window.THREE;R.registerComponent("vrm-model",{schema:{src:{type:"string"}},init:function(){var e=this;(new B.GLTFLoader).load(this.data.src,(function(t){C.VRM.from(t).then((function(t){e.el.object3D.add(t.scene)}))}),(function(e){console.log("Loading model...",e.loaded/e.total*100,"%")}),(function(e){return console.error(e)}))}});o(174),o(175),o(176);var G=window.AFRAME,z=window.THREE;G.registerComponent("mmd-model",{schema:{src:{type:"string"}},init:function(){var e=this;(new z.GLTFLoader).load(this.data.src,(function(t){C.VRM.from(t).then((function(t){e.el.object3D.add(t.scene)}))}),(function(e){console.log("Loading model...",e.loaded/e.total*100,"%")}),(function(e){return console.error(e)}))}});o(11),o(35);var L=function(e){return n.a.createElement(d.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))},P={global:{colors:{},font:{family:"Roboto",size:"18px",height:"20px"}}},T=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),o=t[0],i=t[1];return n.a.createElement(c.a,{theme:P,themeMode:"dark",full:!0},n.a.createElement(s.a.Consumer,null,(function(e){return n.a.createElement(d.a,{fill:!0},n.a.createElement(L,null,n.a.createElement(m.a,{level:"3",margin:"none"},"My App Hello Grommet!"),n.a.createElement(p.a,{icon:n.a.createElement(f.a,null),onClick:function(){return i(!o)}})),n.a.createElement(d.a,{direction:"row",flex:!0,overflow:{horizontal:"hidden"}},n.a.createElement(d.a,{fill:!0,flex:!0,align:"center",justify:"center"},n.a.createElement(k,null)),o&&"small"===e?n.a.createElement(u.a,null,n.a.createElement(d.a,{background:"light-2",tag:"header",justify:"end",align:"center",direction:"row"},n.a.createElement(p.a,{icon:n.a.createElement(g.a,null),onClick:function(){return i(!1)}})),n.a.createElement(d.a,{fill:!0,background:"light-2",align:"center",justify:"center"},"sidebar")):n.a.createElement(h.a,{direction:"horizontal",open:o},n.a.createElement(d.a,{flex:!0,width:"medium",background:"light-2",elevation:"small",align:"center",justify:"center"},"sidebar"))))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,o){e.exports=o.p+"static/media/360.1f3ff844.jpg"},43:function(e,t,o){e.exports=o.p+"static/media/f15.8678bb27.glb"},44:function(e,t,o){e.exports=o.p+"static/media/AliciaSolid.cf089991.vrm"},45:function(e,t,o){e.exports=o.p+"static/media/gundan.e4c7563f.glb"},59:function(e,t,o){e.exports=o.p+"static/media/jk.c0c465d5.vrm"},60:function(e,t,o){e.exports=o.p+"static/media/Crouch_To_Stand.223653c5.fbx"},61:function(e,t,o){e.exports=o.p+"static/media/Jumping_Down.27525540.fbx"}},[[117,1,2]]]);
//# sourceMappingURL=main.33744b54.chunk.js.map