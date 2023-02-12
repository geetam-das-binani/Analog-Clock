
setInterval(() => {
    let d = new Date();

    let htime = d.getHours();
    let hminutes = d.getMinutes();
    let hseconds = d.getSeconds();

    let hrotation = 30 * htime + hminutes / 2
    let mrotation = 6 * hminutes
    let srotation = 6 * hseconds

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`

    let alarmh = alarm.value.split(':')[0]
    let alarmm = alarm.value.split(':')[1]

    if (alarmh == htime && alarmm == hminutes) {
        console.log("Alarm is ringing")
    }




}, 1000)

