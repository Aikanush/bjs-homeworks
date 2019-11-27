'use strict';

function setDailyRhythm(wakeUpTime, bedTime) {
	const checkTime = new Date().toLocaleTimeString();
	function setAlarm(time, callback){
		const goodMorning = () => console.log('Доброе утро!'),
	     checkTime = setAlarm('07:00', goodMorning);
	}
}

setInterval(setDailyRhythm, 1000);