
import React from 'react';
import {TweenMax, TimelineMax} from "gsap/TweenMax";
import {Elastic} from "gsap/all";
import $ from "jquery";

class Computer extends React.Component{
  componentDidMount(){
    var tl = new TimelineMax();
    var bgd = $('#background rect');
    var table = $('#table_legs, #table');
    tl.from(bgd, 0.2, {opacity:0, scale:0, transformOrigin: 'center center'})
        .staggerFrom(table, 0.2, {y:"-=200", opacity: 0, ease: Elastic.easeOut}, .3);
  }


  render(){
    return(
      <div>
      <g id="computer">
        <polygon style={{fill:"#888889", stroke:"#050606", strokeMiterlimit:10}} points="548.7,548.3 544.4,575.1 643.1,575.1 637.8,548.3  "/>
        <polyline style={{fill:"#767677"}} points="548.4,555.7 547.6,561.7 639.5,561.7 638.4,554.7 548.9,554.7   "/>
        <path style={{fill:"#E5E9ED",stroke:"#050606",strokeMiterlimit:10}} d="M768.1,556.4H419.5c-6.8,0-12.3-5.3-12.3-11.8V285.1
          c0-6.5,5.5-11.8,12.3-11.8h348.5c6.8,0,12.3,5.3,12.3,11.8v259.4C780.4,551.1,774.9,556.4,768.1,556.4z"/>
        <path style={{fill:"#202021", stroke:"#050606", strokeMiterlimit:10}} d="M770.8,510.3H413c-3.2,0-5.8-2.6-5.8-5.8V284.2
          c0-6.1,4.9-11,11-11h350.6c6.4,0,11.7,5.2,11.7,11.7v215.8C780.4,506,776.1,510.3,770.8,510.3z"/>
        <rect x="423.3" y="286.1" style={{fill:"#434445", stroke:"#070808", strokeMiterlimit:10}} width="341" height="211.3"/>
        <path style={{fill:"#C7C6C6", stroke:"#070808", strokeWidth:2, strokeMiterlimit:10;"}} d="M518.9,596.3l1,5.6c0.2,1.3,1.3,2.2,2.6,2.2
          h138.2c2.9,0,5.4-2.1,5.9-4.9l0-0.1c0.2-1-0.6-1.8-1.5-1.8L518.9,596.3z"/>
        <path style={{fill:"#A3A3A2", stroke:"#070808", strokeMiterlimit:10}} d="M544.1,575.1l-25.4,20.3c-1.3,1.1-0.6,3.3,1.2,3.3l145.5-0.4
          c1.1,0,1.6-1.3,0.8-2l-23.8-21.2H544.1z"/>
        <path style={{fill:"#A3A3A2"}} d="M545.5,574l-0.6,1.3c-1,1-1.4,1.3-2,1.9l-4.7,3.7l109.2,0.4l-3-3.1c-0.4-0.4-0.9-0.8-1.2-1.2
          c-0.7-0.8-0.7-0.6-1.1-1.7l0-1.3H545.5z"/>
        <path style={{fill:"#A3A3A2"}} d="M521.8,601.8c0.3,0.6,1.2,1.8,2,1.8h135.7c0.5,0,1.1-0.1,1.6-0.2c0.5-0.2,1.2-1.2,1.8-1.6H521.8z"/>
        <circle style={{fill:"#5FBB46"}} cx="593.8" cy="280.6" r="1.3"/>
        <path style={{fill:"#2D2D2D"}} d="M589.7,275.5L423.6,278c0,0-9.7,0.9-10.9,10.3c-1.2,9.4-1.9,118.4-3.4,138.9s0-138.9,0-138.9
          s-1.9-13.4,14.2-13.1L589.7,275.5z"/>
        <path style={{fill:"#2D2D2D"}} d="M597.2,275.5l166.1,2.5c0,0,9.7,0.9,10.9,10.3c1.2,9.4,1.9,118.4,3.4,138.9
          c1.5,20.5,0-138.9,0-138.9s1.9-13.4-14.2-13.1L597.2,275.5z"/>
        <path style={{fill:"#CED1D3"}} d="M763.9,555.4H422.6c-10.5,1-14.1-5.4-14.2-8.6l0,0c1.4,0.4,2.9,0.6,4.4,0.6l358.8,1.6
          c2.5,0,4.9-0.4,7.2-1.3l0,0C777.7,551.1,775.2,556.4,763.9,555.4z"/>
        <path style={{fillRule:"evenodd", clipRule:"evenodd", fill:"#434445"}} d="M593.3,525.8c0.6,0,1.4,0.1,2.2,0.4c0.9,0.3,1.5,0.4,1.7,0.4
          c0.4,0,1-0.1,1.8-0.4c0.8-0.3,1.6-0.4,2.2-0.4c1,0,1.9,0.3,2.7,0.8c0.4,0.3,0.9,0.7,1.3,1.3c-0.7,0.6-1.1,1.1-1.4,1.5
          c-0.5,0.8-0.8,1.7-0.8,2.6c0,1,0.3,2,0.9,2.8c0.6,0.8,1.2,1.4,2,1.6c-0.3,1-0.8,2.1-1.5,3.2c-1.1,1.6-2.2,2.5-3.2,2.5
          c-0.4,0-1-0.1-1.8-0.4c-0.7-0.3-1.4-0.4-1.9-0.4c-0.5,0-1.1,0.1-1.8,0.4c-0.7,0.3-1.2,0.4-1.7,0.4c-1.3,0-2.5-1.1-3.8-3.3
          c-1.2-2.2-1.9-4.3-1.9-6.3c0-1.9,0.5-3.5,1.4-4.7C590.6,526.4,591.8,525.8,593.3,525.8L593.3,525.8z"/>
        <path style={{fillRule:"evenodd", clipRule:"evenodd", fill:"#434445"}} d="M601,521c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2,0,0.2
          c0,0.5-0.1,1.1-0.4,1.7c-0.2,0.6-0.6,1.2-1.2,1.7c-0.5,0.5-0.9,0.8-1.4,0.9c-0.3,0.1-0.7,0.2-1.3,0.2c0-1.2,0.3-2.3,1-3.2
          C598.5,521.9,599.6,521.3,601,521L601,521z"/>
      </g>
      </div>
    );
  }
}

export default Computer;