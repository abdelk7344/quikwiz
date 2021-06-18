(this.webpackJsonpQuikwiz=this.webpackJsonpQuikwiz||[]).push([[0],{22:function(e,t,s){},30:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(17),i=s.n(r),c=(s(22),s(4)),o=s(5),u=s(3),l=s(7),h=s(6),d=s.p+"static/media/music.302c3028.mp3",m=s(31),j=s(9),p=s(11),b=s(0),O=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={isPlaying:!1},e.playMusica=e.playMusica.bind(Object(u.a)(e)),e.pauseMusica=e.pauseMusica.bind(Object(u.a)(e)),e}return Object(o.a)(s,[{key:"playMusica",value:function(){document.getElementById("play").play(),this.setState({isPlaying:!0})}},{key:"pauseMusica",value:function(){document.getElementById("play").pause(),this.setState({isPlaying:!1})}},{key:"render",value:function(){return this.props.darkTheme?document.getElementById("root").style.background="linear-gradient(90deg, #011a27 50%, #063852 50%)":document.getElementById("root").style.background="linear-gradient(90deg, rgba(245,93,62,1) 50%, rgba(118,190,208,1) 50%)",Object(b.jsxs)("div",{id:"header",className:this.props.darkTheme?"container componentStyling darkheading":"container componentStyling heading",children:[Object(b.jsx)("h1",{children:"Quikwiz!"}),Object(b.jsx)(m.a,{className:"buttonSpace",variant:"secondary",onClick:this.state.isPlaying?this.pauseMusica:this.playMusica,children:this.state.isPlaying?Object(b.jsx)(j.a,{icon:p.c,size:"lg"}):Object(b.jsx)(j.a,{icon:p.d,size:"lg"})}),Object(b.jsx)(m.a,{className:"buttonSpace",variant:"secondary",onClick:this.props.changeTheme,children:this.props.darkTheme?Object(b.jsx)(j.a,{icon:p.b,size:"lg"}):Object(b.jsx)(j.a,{icon:p.a,size:"lg"})}),Object(b.jsx)("audio",{id:"play",src:d,controls:!0,loop:!0,hidden:!0})]})}}]),s}(a.a.Component),y=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"topleft",children:[Object(b.jsxs)("h4",{children:["Correct: ",this.props.correct]}),Object(b.jsxs)("h4",{children:["Wrong: ",this.props.wrong]}),Object(b.jsxs)("h4",{children:["Mula: ",this.props.mula]}),this.props.remquestions>=0&&Object(b.jsxs)("h4",{children:["Remaining: ",this.props.remquestions]})]})}}]),s}(a.a.Component),x=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.answer;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h4",{className:"deserveform",children:["The correct answer is ",Object(b.jsx)("b",{children:e}),", Do you believe that your answer would be marked correct?"]}),Object(b.jsx)(m.a,{className:"buttonSpace",variant:"primary",onClick:this.props.yes,children:"Yes"}),Object(b.jsx)(m.a,{className:"buttonSpace",variant:"primary",onClick:this.props.no,children:"No"})]})}}]),s}(a.a.Component),v=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={currIndex:0,correct:0,wrong:0,mula:0,remquestions:0,isCorrect:!0,seconds:0,isPaused:!1,interval:null},e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e.handleYes=e.handleYes.bind(Object(u.a)(e)),e.handleNo=e.handleNo.bind(Object(u.a)(e)),e.fullReset=e.fullReset.bind(Object(u.a)(e)),e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=setInterval((function(){e.setState((function(s){return e.state.isPaused?{interval:t}:{seconds:s.seconds+1,interval:t}}))}),1e3);this.setState({remquestions:this.props.count-1})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var s=this.props.data[this.state.currIndex].answer.toUpperCase();document.getElementById("answer").value.toUpperCase()===s?(this.setState((function(e){return{currIndex:0===e.remquestions?e.currIndex:e.currIndex+=1,correct:e.correct+=1,isCorrect:!0,mula:e.mula+=t.props.data[t.state.currIndex].value,remquestions:e.remquestions-=1}})),this.fullReset(),document.getElementById("answer").value=""):(this.stop(),this.setState({isCorrect:!1}))}},{key:"handleYes",value:function(e){var t=this;e.preventDefault(),this.fullReset(),null!==document.getElementById("answer")&&(document.getElementById("answer").value=""),this.setState((function(e){return{currIndex:e.remquestions<=0?e.currIndex:e.currIndex+=1,correct:e.correct+=1,isCorrect:!0,mula:e.mula+=t.props.data[t.state.currIndex].value,remquestions:e.remquestions-=1}}))}},{key:"handleNo",value:function(){var e=this;this.fullReset(),document.getElementById("answer").value="",this.setState((function(t){return{currIndex:t.remquestions<=0?t.currIndex:t.currIndex+=1,wrong:t.wrong+=1,isCorrect:!0,mula:t.mula-=e.props.data[e.state.currIndex].value,remquestions:t.remquestions-=1}}))}},{key:"fullReset",value:function(){this.setState({seconds:0,isPaused:!1})}},{key:"stop",value:function(){this.setState({isPaused:!0})}},{key:"clear",value:function(){clearInterval(this.state.interval)}},{key:"render",value:function(){return 20===this.state.seconds&&this.handleNo(),-1===this.state.remquestions&&this.clear(),-1===this.state.remquestions?Object(b.jsxs)("div",{className:this.props.darkTheme?"container componentStyling darkform":"container componentStyling form",children:[Object(b.jsx)("h1",{children:"Game Over"}),Object(b.jsxs)("h4",{children:["Correct: ",this.state.correct]}),Object(b.jsxs)("h4",{children:["Wrong: ",this.state.wrong]}),Object(b.jsxs)("h4",{children:["Mula: ",this.state.mula]}),Object(b.jsx)(m.a,{onClick:function(){window.location.reload()},variant:"secondary",children:"Play Again"})]}):Object(b.jsxs)("div",{className:this.props.darkTheme?"container componentStyling darkform":"container componentStyling form",children:[Object(b.jsxs)("div",{className:"topright",children:["Timer: ",20-this.state.seconds]}),"Lucky Wiz"===this.props.data[this.state.currIndex].category?Object(b.jsxs)("form",{onSubmit:this.handleYes,children:[Object(b.jsxs)("h4",{className:"jcard",children:[this.props.data[this.state.currIndex].category.toUpperCase(),Object(b.jsx)("br",{}),"$",this.props.data[this.state.currIndex].value]}),Object(b.jsx)("h3",{children:this.props.data[this.state.currIndex].question}),Object(b.jsx)(m.a,{type:"submit",variant:"light",children:"Next"})]}):Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsxs)("h4",{className:"jcard",children:[this.props.data[this.state.currIndex].category.toUpperCase(),Object(b.jsx)("br",{}),"$",this.props.data[this.state.currIndex].value]}),Object(b.jsx)("h3",{children:this.props.data[this.state.currIndex].question}),Object(b.jsx)("input",{type:"text",name:"answer",id:"answer",className:"form-control"}),Object(b.jsx)("br",{}),Object(b.jsx)(m.a,{type:"submit",variant:"light",children:"Submit"})]}),!this.state.isCorrect&&Object(b.jsx)(x,{answer:this.props.data[this.state.currIndex].answer,yes:this.handleYes,no:this.handleNo}),Object(b.jsx)(y,{correct:this.state.correct,wrong:this.state.wrong,mula:this.state.mula,remquestions:this.state.remquestions})]})}}]),s}(a.a.Component),f=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={questionCount:"",parent:!0,child:!1,data:[]},e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(o.a)(s,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://jservice.io/api/random?count="+document.getElementById("1").value).then((function(e){return e.json()})).then((function(e){var s=e.map((function(e){var t,s,n=null===e.value?500:e.value,a=e.answer.replaceAll("<i>","").replaceAll("</i>","").replaceAll("<b>","").replaceAll("</b>","").replaceAll("\\","");return""===e.question?(s="Lucky Wiz",t="You just earned a free $500"):(s=e.category.title,t=e.question),{question:t,answer:a,value:n,category:s}}));t.setState({questionCount:document.getElementById("1").value,parent:!1,child:!0,data:s})}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{id:"form",children:[this.state.parent&&Object(b.jsxs)("div",{className:this.props.darkTheme?"container componentStyling darkform":"container componentStyling form",children:[Object(b.jsx)("h4",{children:"Instructions"}),Object(b.jsxs)("p",{children:["Quikwiz is a game that uses questions from the hit show Jeopardy!",Object(b.jsx)("br",{})," Just choose how many questions you want to test yourself on. ",Object(b.jsx)("br",{}),"Then, enter your answers below and see how many you can get correct!"]}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:"formSpace",children:[Object(b.jsx)("p",{children:" How many questions would you like?"}),Object(b.jsx)("input",{style:{width:"25%",margin:"auto"},id:"1",min:"1",max:"100",type:"number",placeholder:"e.g. 20",name:"questionCount",className:"form-control"}),Object(b.jsx)("br",{}),Object(b.jsx)(m.a,{type:"submit",variant:"secondary",children:"Submit"})]})]}),this.state.child&&Object(b.jsx)(v,{darkTheme:this.props.darkTheme,count:this.state.questionCount,show:this.state.child,data:this.state.data})]})}}]),s}(a.a.Component),g=(s(29),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={darkTheme:!1},e.changeTheme=e.changeTheme.bind(Object(u.a)(e)),e}return Object(o.a)(s,[{key:"changeTheme",value:function(){this.setState((function(e){return{darkTheme:!e.darkTheme}}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"appClass",children:[Object(b.jsx)(O,{changeTheme:this.changeTheme,darkTheme:this.state.darkTheme}),Object(b.jsx)(f,{darkTheme:this.state.darkTheme})]})}}]),s}(a.a.Component));i.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.cd04f62b.chunk.js.map