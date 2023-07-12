import { useEffect, useState } from 'react';

export default function LimitTimer(props) {

  let limitMsg =""
  let timeupMsg =""

  if (props.limit != null) {
    let yyyy = props.limit.slice(0,4)
    let mo= props.limit.slice(5,7)-1
    let dd= props.limit.slice(8,10)
    let hh= props.limit.slice(11,13)
    let mi= props.limit.slice(14,16)
    let limitDate = new Date(yyyy,mo,dd,hh,mi)

    limitMsg = yyyy + "年" + (mo+1) + "月" + dd + "日 " + hh + "時" + mi +"分まで"

    let diff = limitDate.getTime()-props.now

    if(diff>0){
      timeupMsg = "残り:" + limmsg(diff)
    }else{
      timeupMsg = "期限超過"
    }
  }

  function limmsg(diff2Dates) {
    var dDays = diff2Dates / (1000 * 60 * 60 * 24); // 日数
    diff2Dates = diff2Dates % (1000 * 60 * 60 * 24);
    var dHour = diff2Dates / (1000 * 60 * 60); // 時間
    diff2Dates = diff2Dates % (1000 * 60 * 60);
    var dMin = diff2Dates / (1000 * 60); // 分
    diff2Dates = diff2Dates % (1000 * 60);
    var dSec = diff2Dates / 1000; // 秒

    return (
      Math.floor(dDays) +
      '日' +
      Math.floor(dHour) +
      '時間' +
      Math.floor(dMin) +
      '分' +
      Math.floor(dSec) +
      '秒'
    );
  }

  return (
    <div>
      <p className="task-timer">期限:{limitMsg}</p>
      <p className="task-timer">{timeupMsg}</p>
    </div>
  );
}
