import { useEffect, useState } from 'react';

export default function LimitTimer(props) {
  const [contMsg, setCountMsg] = useState('');
  if (props.limit != null) {

    useEffect(() => {
      console.log('start');
      const da = new Date(props.limit);
      const limitdt = da.getTime();
      const nowdt = new Date().getTime();
  
      let diff2Dates = limitdt - nowdt;
      setCountMsg(limmsg(diff2Dates));
      setInterval(() => {
        const interTime = new Date().getTime();
        let diff2Dates = limitdt - interTime;
        setCountMsg(limmsg(diff2Dates));
        console.log(contMsg);
      }, 1000);
    }, []);
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
      <p>残りs:{contMsg}</p>
    </div>
  );
}
