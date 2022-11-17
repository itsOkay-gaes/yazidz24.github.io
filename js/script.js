var countDownDate = new Date();
      countDownDate.setDate(countDownDate.getDate() + 30);
      var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('time-counter').innerHTML =
          days + ' hari ' + hours + ' jam ' + minutes + ' menit ' + seconds + ' detik ';
        if (distance < 0) {
          clearInterval(x);
          document.getElementById('time-counter').innerHTML = 'EXPIRED';
        }
      }, 1000);