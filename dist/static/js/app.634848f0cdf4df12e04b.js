webpackJsonp([1],{"1/oy":function(t,e){},"12y+":function(t,e,i){"use strict";function a(t){i("BDC/")}var s=i("L6ng"),o=i("8sqa"),n=i("VU/8"),r=a,c=n(s.a,o.a,!1,r,"data-v-3debafe8",null);e.a=c.exports},"6xdD":function(t,e,i){"use strict";function a(t){i("EhbL")}var s=i("863F"),o=i("PRoE"),n=i("VU/8"),r=a,c=n(s.a,o.a,!1,r,"data-v-e2950694",null);e.a=c.exports},"863F":function(t,e,i){"use strict";e.a={data:function(){return{project:null}},created:function(){console.log("PARAMS",this.$route.params),this.project=this.$route.params.object},mounted:function(){window.scrollTo(0,0)},methods:{goBack:function(){this.$router.go(-1)}}}},"8sqa":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"visualizer",attrs:{id:"visualizer"}})},s=[],o={render:a,staticRenderFns:s};e.a=o},"9M+g":function(t,e){},"BDC/":function(t,e){},EhbL:function(t,e){},F9yf:function(t,e,i){"use strict";function a(t,e,i,s){this.level=i,this.life=0,this.pos=new o.a.Vector(t,e),this.vel=o.a.Vector.random2D(),this.vel.mult(s.map(this.level,0,5,5,2)),this.move=function(t){if(this.life++,this.vel.mult(.9),this.pos.add(this.vel),this.life%10==0&&this.level>0){this.level-=1;var e=new a(this.pos.x,this.pos.y,this.level-1,s);t.push(e)}}}e.a=a;var s=i("RBYm"),o=i.n(s)},GfHa:function(t,e){},Id91:function(t,e){},L6ng:function(t,e,i){"use strict";var a=i("YOsN"),s=i("RBYm"),o=i.n(s);e.a={data:function(){return{myp5:null}},mounted:function(){this.myp5=new o.a(a.a,document.getElementById("visualizer"))},methods:{}}},M93x:function(t,e,i){"use strict";function a(t){i("w96F")}var s=i("xJD8"),o=i("nm3v"),n=i("VU/8"),r=a,c=n(s.a,o.a,!1,r,null,null);e.a=c.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s=i("e6fC"),o=i("M93x"),n=i("YaEn"),r=i("qb6w"),c=(i.n(r),i("9M+g")),l=(i.n(c),i("Q0/0")),p=(i.n(l),i("aA7d")),h=i.n(p);a.a.component("glitch",h.a),a.a.use(s.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:n.a,template:"<App/>",components:{App:o.a}})},PRoE:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",staticStyle:{"text-align":"left","margin-bottom":"50px"}},[i("b-button",{staticStyle:{border:"0px","font-size":"30px",position:"absolute",top:"20px",left:"20px","z-index":"40"},attrs:{variant:"outline-secondary"},on:{click:t.goBack}},[i("i",{staticClass:"fa fa-arrow-left"})]),t._v(" "),i("b-row",[i("img",{staticClass:"img-project",attrs:{src:t.project.cardImage}})]),t._v(" "),i("b-row",{staticStyle:{"margin-top":"50px"}},[i("b-col",{attrs:{md:"9"}},[i("h3",{staticClass:"text-uppercase"},[t._v(t._s(t.project.name))]),t._v(" "),""!=t.project.github?i("div",[i("a",{attrs:{target:"_blank",href:t.project.github}},[t._v("Github")])]):t._e(),t._v(" "),""!=t.project.link?i("div",[i("a",{attrs:{target:"_blank",href:t.project.link}},[t._v("Website")])]):t._e(),t._v(" "),i("p"),t._v(" "),i("span",{domProps:{innerHTML:t._s(this.project.details)}}),t._v(" "),i("b-row",t._l(t.project.images,function(e,a){return t.project.images?i("b-col",{key:a},[i("img",{staticClass:"images",attrs:{src:e}})]):t._e()}))],1),t._v(" "),i("b-col",{attrs:{md:"3"}},[i("ul",{staticClass:"cat-ul"},[i("div",{staticClass:"badges"},t._l(t.project.tags,function(e,a){return i("b-badge",{key:a,attrs:{variant:"light"}},[t._v(t._s(e))])}))]),t._v(" "),i("div",{staticClass:"h-10"}),t._v(" "),i("ul",{staticClass:"social-ul"},[i("li",{staticClass:"box-social"},[i("a",{attrs:{href:"#0"}},[i("i",{staticClass:"fab fa-github"})])]),t._v(" "),i("li",{staticClass:"box-social"},[i("a",{attrs:{href:"#0"}},[i("i",{staticClass:"fab fa-linkedin-in"})])]),t._v(" "),i("li",{staticClass:"box-social"},[i("a",{attrs:{href:"#0"}},[i("i",{staticClass:"fab fa-twitter"})])]),t._v(" "),i("li",{staticClass:"box-social"},[i("a",{staticStyle:{"font-size":"15px"},attrs:{href:"#0"}},[t._v("tothepoweroftom@gmail.com")])])])])],1)],1)},s=[],o={render:a,staticRenderFns:s};e.a=o},Pwb3:function(t,e){},"Q0/0":function(t,e){},RXZr:function(t,e,i){"use strict";e.a={projects:[{name:"Audio As An Interface",type:[2],tags:["Swift","DSP","XCode","Cocoapods","Front End","Research"],details:"<p> Audio UI is a Swift iOS experiment in Ultrasound based gesture recognition on iOS. The research is based on a paper by <a href='https://www.microsoft.com/en-us/research/publication/ultrasound-based-gesture-recognition-2/'>Microsoft Research </a>The simple idea behind this experiment is utilise the inbuilt speaker and microphone on mobile devices to allow hands free interaction.</p><p>An ultrasonic tone ~20-22kHz is emitted by the phone's speaker. This tone will reflect off the user's hand. This reflected sound will be affected by a Doppler Shift.</p><p>DSP is achieved using a combination of the fantastic <a href='https://github.com/stsievert/swix'>SWIX</a> Matrix Math/Numpy port  and the Accelerate framework from Apple. The incoming audio from the microphone is buffered and an FFT is applied using the vDSP_fft function. The Fourier Transform results are used to determine the gesture based on the shifts away from the fundamental frequency of the tone.",cardImage:"/static/img/audiointerface.png",images:["/static/img/audiointerface2.gif"],github:"https://github.com/tothepoweroftom/AudioUI/",link:""},{name:"3d Printing Desktop App",type:[1],tags:["Vue","Bootstrap","Electron","Desktop App","Client","python","node js","serial","arduino"],details:"<p>A freelance project to build a desktop application for London based startup Additive Flow Ltd, a 3d printing company. I was asked to help build the front end and work on the serial communcations with the printing machines.</p><p> A front end application was built using Vue and Electron. The Node.js serialport module was used for serial communications. </p>",cardImage:"/static/img/additiveflow.png",images:[],github:"",link:""},{name:"MintCoin",type:[1],tags:["Vue","Bootstrap","Web App","blockchain"],details:"<p>We rig a desktop mint plant to an office-only cryptocurrency so that the value of the currency is tied to the health of the plant. You can give the plant water, or take some leaves for your mint tea. Either action will be logged in the blockchain ledger, and have an effect on the value of the currency. The idea is to make the plant autonomously tied to the micro-economy, with no need for an owner, and to incentivize our collective care and conscious harvesting of it through financial devices. </p><p>Project involved a web app developed in Vue.js, which acted as a front end to the blockchain written in Ethereum. Users could buy leaves for tea by paying the mint plant's wallet through the app. </p>",cardImage:"/static/img/mintcoin.jpg",images:["/static/img/mintcoin2.png"],github:"",link:""},{name:"CryptoMusic",type:[1,3],tags:["Vue","Bootstrap","Web App","Creative","Web Audio","Tonejs","p5js"],details:"<p>Crypto Music is a research project by Tom Power undertaken while at MOBGEN:Lab. The aim of this project is to create an art project from Bitcoin transactions. The website blockchain.com provides an open api websocket to listen to real time bitcoin transactions.</p><p> Each transaction triggers a new particle system in the visualisation and a new note in the audio. p5js and delaunayjs are being used for the visualisation and the wonderful tonejs for the audio.</p>",images:[],cardImage:"/static/img/cryptomusic.png",github:"https://github.com/tothepoweroftom/crypto-music",link:"https://tothepoweroftom.github.io/cryptomusicsite/#/"},{name:"MOBGEN:Lab Website",type:[1],tags:["Vue","Bootstrap","Website","Full Stack"],details:"<p>I built the website for my team at MOBGEN:Lab to showcase the projects we worked on. It consisted of building a frontend app in Vue.js which rendered content supplied from a backend server.</p><p>I chose Vue because it was perfect for such a project. Dynamic content can be handled easy. The background of the website contains a rotating 360 image of the workplace, which is rendered using three.js</p>",images:["/static/img/labwebsite2.png"],cardImage:"/static/img/labwebsite.png",github:"",link:"https://tompowermobgen.bitbucket.io"},{name:"XY Synth",type:[1,3],tags:["HTML","Bootstrap","Website","Creative","WebAudio","Tonejs","p5js","physics"],details:"<p>The XY Synth is a sonic implementation of the XY Model from Condensed Matter Physics. Featured on the Google Chrome Experiments website!! The XY Model consists of a square 2d lattice of atomic spins. Each atom can have a spin which lies in any direction on the unit circle. A Metropolis Monte-Carlo algorithm is used to propagate the system forward. This algorithm sweeps through the system to decided how to line up the atomic spin vectors. </p><p>The sliders give control over the Temperature, Interaction Term and the external field of the system. The visualisation gives an indication of the various possible states of the system; Domains of similar spin can be seen forming. Huge worms which wind their way across the screen. Vortices of spin like eddies of the surface of water can appear.</p><p>The corresponding music is designed to accompany the visuals. The distortion of the drone is related to the temperature. The Harmonicity and modulation index of the FM synth are related to the interaction term. The modulation depth is mapped to the external magnetic field.</p>",cardImage:"/static/img/xysynth.png",images:["/static/img/xysynth2.png","/static/img/xysynth3.png"],github:"https://github.com/tothepoweroftom/xysynth",link:"https://experiments.withgoogle.com/xy-synth"},{name:"Magnetic Music",type:[1,3],tags:["HTML","Bootstrap","Website","Creative","WebAudio","Tonejs","p5js","physics"],details:"<p>This is a web audio experiment built with p5js and Tonejs, that takes a model from physics, The Ising Model, and creates music from the properties of the model</p><p> The Ising Model is a mathematical model of ferromagnetism. Electrons within a magnet can have a spin up or a spin down. The model governs how these spins interact under different circumstances.</p>",cardImage:"/static/img/magneticmusic.png",images:[],github:"https://github.com/tothepoweroftom/MagneticMusic",link:"https://tothepoweroftom.github.io/MagneticMusic/"},{name:"Music From The Atom",type:[1,3],tags:["HTML","Bootstrap","Website","Creative","WebAudio","Tonejs","p5js","physics"],details:"<p>An musical experiment using Tone.js and p5.js. This was my Master's project in University. I built a Cloud Chamber, which is a subatomic article detector, with my bare hands. I then recorded a long video of particles decaying the chamber. They leave faint trails in the vapour, much like airplanes do in the sky. These trails were analysed using a computer vision system developed in Javascript with p5.js. Their position was mapped to a grid.</p>",cardImage:"/static/img/musicfromtheatom.png",images:[],github:"https://github.com/tothepoweroftom/musicfromtheatom",link:"https://tothepoweroftom.github.io/musicfromtheatom/"},{name:"Trained By Machines",type:[1],tags:["HTML","Bootstrap","Website","Creative","WebAudio","Tonejs","p5js","physics"],details:"<p>Trained by Machines is a short film and website, speculating about future scenarios between man and machine. The website was built to recreate the emotion reconditioning program from the short film.</p>",cardImage:"/static/img/trained.png",images:["/static/img/trained2.png","/static/img/trained3.png"],github:"",link:"https://mobgen.com/trainedbymachines"},{name:"Arcadis",type:[1],tags:["Vue","Client","Framework 7","Mobile PWA App"],details:"<p> Built a PWA app for the portfolio survey team within Arcadis. A PWA Vue app was developed which interacted with Arcadis data to improve their workflows. Framework 7 was used to provide a native-like look and feel to the application.</p>",cardImage:"/static/img/arcadis.jpg",images:["/static/img/arcadisredac.png"],github:"",link:""},{name:"Vodafone Ziggo",type:[1],tags:["Vue","Client","d3js","Mobile PWA App"],details:"<p> Built a POC web app for Vodafone Ziggo for their IOT Smart Home department. The app featured d3js which was used for data visualisation relating to energy consumption. </p>",cardImage:"/static/img/vodafone.png",images:["/static/img/vodafoneziggo.png","/static/img/vodafoneziggo2.png"],github:"",link:""},{name:"Daily Futures",type:[2],tags:["Swift","DSP","XCode","Front End","Research","Machine Learning"],details:"<p>Daily Futures is an experment with Machine Learning on iOS. A Text Generation model trained in Keras is imported into iOS for inference. Seed words then seed the model to generate text within the app. </p>",cardImage:"/static/img/dailyfuture.png",images:["/static/img/daily.png","/static/img/daily2.png"],github:"https://github.com/tothepoweroftom/FictionNewsGenerator",link:""},{name:"Artificial Poetry",type:[2],tags:["Swift","DSP","XCode","Front End","Research","Machine Learning"],details:"<p>Poems are generated by a LSTM running on Metal and Accelerate. Code is borrowed from Infinite Monkeys. </p>  <p> Neural Network is an LSTM in keras trained on a Haiku database for 10 hours. The network is reconstructed on the device using BraincoreiOS. From here a seed sentence starts the process of text generation based on the weights that the network has learned from the training data. The result is the reconstruction of a phrases from the haiku database. </p>",cardImage:"/static/img/artificial.png",images:["/static/img/artificial1.png","/static/img/artificial2.png"],github:"https://github.com/tothepoweroftom/ArtificialLove",link:""},{name:"Open Terra",type:[3],tags:["Touchdesigner","Processing","openFrameworks","Computer Vision","Arduino","Machine Learning"],details:"<p>Open Terra is a map of hypothetical open source shipping data and it impact on the earth</p><p> It was built using a combination of technologies. ML4A convolutional neural net classifier for recognizing which fruit was placed under the camera, Processing generated the shipping route visuals using a shipping dataset from the Dutch Government. Touchdesigner tied everything together and added Leap Motion control support</p>",cardImage:"/static/img/kakushin/center.gif",images:["/static/img/kakushin/right.gif","/static/img/kakushin/DSCF3323.jpg"],github:"",link:""},{name:"Heartbeat Miner",type:[3],tags:["PureData","Processing","openFrameworks","Arduino","Machine Learning"],details:"<p>Heartbeat Miner is an art installation that explores blockchain and health sensors.</p><p> The installation consisted of an arduino heartbeat and blood oxygenation sensor housed in a laser cut box. A health value was calculated from the heart data to gather a baseline health metric from the participant. This health score then was logged on a Hyperledger Fabric blockchain and healthcoins were released to the user. </p><p> The project was meant as an artistic framing of a what if question, if we chased good health and happiness instead of money.</p>",cardImage:"/static/img/kakushin/cover.png",images:["/static/img/kakushin/box.jpg","/static/img/kakushin/hand.jpg"],github:"",link:""},{name:"Meditation VR",type:[1,3],tags:["AFRAME","Threejs","Tonejs","Music","VR"],details:"<p>Meditation VR is a meditative space created in AFrame, a WebVR platform from Mozilla.</p><p> This installation piece is also a shared VR space, leveraging websockets to synchronize the data between the VR apps.Each of the participants can see the other as a primitive shape in the space. Their head movements corresponding to their own navel gazing. </p><p> The artistic aim of the piece was to create a soothing shared virtual space that we can escape too in this busy world.</p>",cardImage:"/static/img/meditationvr.gif",images:["/static/img/meditationvr1.png","/static/img/meditationvr2.png"],github:"",link:""}]}},Tnpt:function(t,e,i){var a;!function(){"use strict";function e(t){var e,i,a,s,o,n,r=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,p=Number.NEGATIVE_INFINITY;for(e=t.length;e--;)t[e][0]<r&&(r=t[e][0]),t[e][0]>l&&(l=t[e][0]),t[e][1]<c&&(c=t[e][1]),t[e][1]>p&&(p=t[e][1]);return i=l-r,a=p-c,s=Math.max(i,a),o=r+.5*i,n=c+.5*a,[[o-20*s,n-s],[o,n+20*s],[o+20*s,n-s]]}function i(t,e,i,a){var s,n,r,c,l,p,h,u,d,m,g=t[e][0],f=t[e][1],v=t[i][0],b=t[i][1],w=t[a][0],y=t[a][1],k=Math.abs(f-b),_=Math.abs(b-y);if(!(k<o&&_<o))return k<o?(c=-(w-v)/(y-b),p=(v+w)/2,u=(b+y)/2,s=(v+g)/2,n=c*(s-p)+u):_<o?(r=-(v-g)/(b-f),l=(g+v)/2,h=(f+b)/2,s=(w+v)/2,n=r*(s-l)+h):(r=-(v-g)/(b-f),c=-(w-v)/(y-b),l=(g+v)/2,p=(v+w)/2,h=(f+b)/2,u=(b+y)/2,s=(r*l-c*p+u-h)/(r-c),n=k>_?r*(s-l)+h:c*(s-p)+u),d=v-s,m=b-n,{i:e,j:i,k:a,x:s,y:n,r:d*d+m*m}}function s(t){var e,i,a,s,o,n;for(i=t.length;i;)for(s=t[--i],a=t[--i],e=i;e;)if(n=t[--e],o=t[--e],a===o&&s===n||a===n&&s===o){t.splice(i,2),t.splice(e,2);break}}var o=1/1048576;a={triangulate:function(t,a){var n,r,c,l,p,h,u,d,m,g,f,v,b=t.length;if(b<3)return[];if(t=t.slice(0),a)for(n=b;n--;)t[n]=t[n][a];for(c=new Array(b),n=b;n--;)c[n]=n;if(c.sort(function(e,i){return t[i][0]-t[e][0]}),l=e(t),t.push(l[0],l[1],l[2]),void 0==i(t,b+0,b+1,b+2))return[];for(p=[i(t,b+0,b+1,b+2)],h=[],u=[],n=c.length;n--;u.length=0){for(v=c[n],r=p.length;r--;)d=t[v][0]-p[r].x,d>0&&d*d>p[r].r?(h.push(p[r]),p.splice(r,1)):(m=t[v][1]-p[r].y,d*d+m*m-p[r].r>o||(u.push(p[r].i,p[r].j,p[r].j,p[r].k,p[r].k,p[r].i),p.splice(r,1)));for(s(u),r=u.length;r;)f=u[--r],g=u[--r],p.push(i(t,g,f,v))}for(n=p.length;n--;)h.push(p[n]);for(p.length=0,n=h.length;n--;)h[n].i<b&&h[n].j<b&&h[n].k<b&&p.push(h[n].i,h[n].j,h[n].k);return p},contains:function(t,e){if(e[0]<t[0][0]&&e[0]<t[1][0]&&e[0]<t[2][0]||e[0]>t[0][0]&&e[0]>t[1][0]&&e[0]>t[2][0]||e[1]<t[0][1]&&e[1]<t[1][1]&&e[1]<t[2][1]||e[1]>t[0][1]&&e[1]>t[1][1]&&e[1]>t[2][1])return null;var i=t[1][0]-t[0][0],a=t[2][0]-t[0][0],s=t[1][1]-t[0][1],o=t[2][1]-t[0][1],n=i*o-a*s;if(0===n)return null;var r=(o*(e[0]-t[0][0])-a*(e[1]-t[0][1]))/n,c=(i*(e[1]-t[0][1])-s*(e[0]-t[0][0]))/n;return r<0||c<0||r+c>1?null:[r,c]}},t.exports=a}()},YOsN:function(t,e,i){"use strict";var a=i("F9yf"),s=i("Tnpt"),o=i.n(s);e.a=function(t){var e=[],i=[],s=0,n=0,r=0;t.setup=function(){s=document.getElementById("visualizer").clientWidth,n=2.5*document.getElementById("visualizer").clientHeight,t.createCanvas(s,n),t.textAlign(t.CENTER),t.textFont("Space Mono"),t.textSize(8)},t.draw=function(){r<=1e3?(t.fill(255,.5),r+=1,t.addParticles()):(t.fill(255,255),r=0),t.rect(0,0,s,n);for(var a=e.length-1;a>-1;a--)e[a].move(e),e[a].vel.mag()<.1&&e.splice(a,1);if(e.length>0){i=o.a.triangulate(e.map(function(t){return[t.pos.x,t.pos.y]})),t.strokeWeight(.1);for(var a=0;a<i.length;a+=3){var c=e[i[a]],l=e[i[a+1]],p=e[i[a+2]];t.dist(c.pos.x,c.pos.y,l.pos.x,l.pos.y)>75||(t.dist(l.pos.x,l.pos.y,p.pos.x,p.pos.y)>75||t.dist(c.pos.x,c.pos.y,p.pos.x,p.pos.y)>75||(t.stroke(100+4*c.life),t.fill(240+4*c.life),t.triangle(c.pos.x,c.pos.y,l.pos.x,l.pos.y,p.pos.x,p.pos.y)))}}e.length>50&&(e=[])},t.mousePressed=function(){e.push(new a.a(t.mouseX,t.mouseY,5,t))},t.addParticles=function(){var i=t.random(50,s-5),o=t.random(50,n-50);e.push(new a.a(i,o,5,t))}}},YaEn:function(t,e,i){"use strict";var a=i("7+uW"),s=i("/ocq"),o=i("qSdX"),n=i("6xdD");a.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Hello",component:o.a},{path:"/project",name:"ProjectView",component:n.a}]})},aA3Q:function(t,e,i){"use strict";e.a={props:["project"],methods:{projectDetails:function(){this.$router.push({name:"ProjectView",params:{object:this.project}})}}}},bknp:function(t,e,i){"use strict";function a(t){i("Pwb3")}var s=i("aA3Q"),o=i("zH7q"),n=i("VU/8"),r=a,c=n(s.a,o.a,!1,r,"data-v-8da23024",null);e.a=c.exports},mvpy:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[t.showLoader?i("div",{attrs:{id:"preloader"}},[t._m(0)]):t._e(),t._v(" "),i("b-row",{staticStyle:{"margin-top":"50px"}},[i("b-col",{attrs:{cols:"12"}},[i("h1",{staticStyle:{"font-weight":"700"}},[t._v("Tom Power")]),t._v(" "),i("p",[t._v("Creative Developer")])])],1),t._v(" "),i("b-row",[i("b-col",{staticStyle:{"text-align":"justify"},attrs:{cols:"12",sm:"9"}},[i("h3",{staticClass:"uppercase"},[t._v("About Me ")]),t._v(" "),i("h5",[t._v("Creative & Technical")]),t._v(" "),i("div",{staticClass:"h-30"}),t._v(" "),i("p",[t._v("I don't believe in right/left brain dominance. I try and balance my mathematical and analytical mind with my creative and musical mind — tying together my Bachelor's degree in Theoretical Physics and Master's degree in Music & Media Technologies from Trinity College Dublin.")]),t._v(" "),i("p",[t._v(" My programming passion is front end development and Vue.js. For me its the closest programming comes to music. Its a technical and a creative challenge. Its about providing a great user experience. I love libraries like "),i("strong",[t._v(" p5js, Tonejs")]),t._v(" and "),i("strong",[t._v("threejs")]),t._v(". Tools which let us do so much with the blank website. ")]),t._v(" "),i("p",[t._v(" My current focus is on "),i("strong",[t._v("web")]),t._v(" development but I'm also proficient in "),i("strong",[t._v("iOS")]),t._v(" development. My scientific background lends itself to "),i("strong",[t._v("C++")]),t._v(" and "),i("strong",[t._v("Python")]),t._v(". My music background lends itself to "),i("strong",[t._v("PureData, Max/MSP and Csound")]),t._v(". Recently my focus has been on artistically using recent developments in Machine Learning, such as using LSTM's to generate poetry and using Posenet as a Microsoft Kinect replacement in interactive installations.")]),t._v(" "),i("p",[t._v(" I'm also a musician and composer. Please stop by "),i("a",{attrs:{target:"_blank",href:"http://tothepoweroftom.com"}},[t._v("tothepoweroftom.com")]),t._v(" for music! ")])]),t._v(" "),i("b-col",{attrs:{cols:"12",sm:"3"}},[i("ul",{staticClass:"social-ul"},[i("li",{staticClass:"box-social"},[i("a",{attrs:{target:"_blank",href:"https://github.com/tothepoweroftom"}},[i("i",{staticClass:"fab fa-github"})])]),t._v(" "),i("li",{staticClass:"box-social"},[i("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/tom-power-b20a57125/"}},[i("i",{staticClass:"fab fa-linkedin-in"})])]),t._v(" "),i("li",{staticClass:"box-social"},[i("a",{attrs:{target:"_blank",href:"https://twitter.com/wildsurmiseband"}},[i("i",{staticClass:"fab fa-twitter"})])]),t._v(" "),i("li",{staticClass:"box-social"},[i("a",{staticStyle:{"font-size":"15px"},attrs:{target:"_blank",href:"mailto:tothepoweroftom@gmail.com"}},[t._v("tothepoweroftom@gmail.com")])])]),t._v(" "),i("img",{staticClass:"profile-image",attrs:{src:"/static/img/tompower.gif"}})])],1),t._v(" "),i("b-row",{staticStyle:{"margin-top":"50px"}},[i("div",{staticClass:"portfolio",staticStyle:{"padding-left":"20px"}},[i("h2",{staticStyle:{"text-align":"left"}},[t._v(" Portfolio")]),t._v(" "),i("div",{},[i("ul",{},[i("li",[i("b-btn",{staticClass:"portfolio-btn",on:{click:function(e){t.sortCards(0)}}},[t._v("All")])],1),t._v(" "),i("li",[i("b-btn",{staticClass:"portfolio-btn",on:{click:function(e){t.sortCards(1)}}},[t._v("Web")])],1),t._v(" "),i("li",[i("b-btn",{staticClass:"portfolio-btn",on:{click:function(e){t.sortCards(2)}}},[t._v("iOS")])],1),t._v(" "),i("li",[i("b-btn",{staticClass:"portfolio-btn",on:{click:function(e){t.sortCards(3)}}},[t._v("Creative")])],1)])])])]),t._v(" "),i("b-row",{staticStyle:{"padding-left":"20px"}},[i("b-card-group",t._l(t.filtered,function(t,e){return i("portfolio-card",{key:e,attrs:{project:t}})}))],1)],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pre-container"},[i("div",{staticClass:"spinner"},[i("div",{staticClass:"double-bounce1"}),t._v(" "),i("div",{staticClass:"double-bounce2"})])])}],o={render:a,staticRenderFns:s};e.a=o},nm3v:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1),t._v(" "),i("visualizer")],1)},s=[],o={render:a,staticRenderFns:s};e.a=o},pMZz:function(t,e,i){"use strict";var a=i("bknp"),s=i("RXZr");e.a={components:{PortfolioCard:a.a},name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App",showLoader:!0,projects:s.a.projects,filtered:[]}},methods:{sortCards:function(t){var e=this;0===t?this.filtered=this.projects:(this.filtered=[],this.projects.forEach(function(i){console.log(i.type),i.type.forEach(function(a){if(a===t)return void e.filtered.push(i)})}))},createFilterStructure:function(t,e,i){return{id:t,args:e,func:i}},addFilterFunction:function(t,e,i){this.filter.push(this.createFilterStructure(t,e,i))}},created:function(){this.filtered=this.projects},mounted:function(){this.showLoader=!1}}},qSdX:function(t,e,i){"use strict";function a(t){i("xosO")}var s=i("pMZz"),o=i("mvpy"),n=i("VU/8"),r=a,c=n(s.a,o.a,!1,r,"data-v-347037cf",null);e.a=c.exports},qb6w:function(t,e){},w96F:function(t,e){},xJD8:function(t,e,i){"use strict";var a=i("12y+");e.a={name:"app",components:{Visualizer:a.a}}},xosO:function(t,e){},zH7q:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem",margin:"10px","border-radius":"0px","text-align":"left",border:"0px"},attrs:{title:t.project.name,"img-src":t.project.cardImage}},[i("div",{staticClass:"badges"},t._l(t.project.tags,function(e,a){return i("b-badge",{key:a,attrs:{variant:"light"}},[t._v(t._s(e))])})),t._v(" "),i("b-button",{attrs:{variant:"outline-secondary"},on:{click:t.projectDetails}},[t._v("View")])],1)],1)},s=[],o={render:a,staticRenderFns:s};e.a=o},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.634848f0cdf4df12e04b.js.map