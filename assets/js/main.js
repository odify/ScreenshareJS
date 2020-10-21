/*
 *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */



'use strict';

if (adapter.browserDetails.browser == 'firefox') {
  adapter.browserShim.shimGetDisplayMedia(window, 'screen');
}


function handleSuccess(stream) {
  startButton.disabled = true;
  const video = document.querySelector('video');
  video.srcObject = stream;


  stream.getVideoTracks()[0].addEventListener('ended', () => {
    errorMsg('The user has ended sharing the screen');
    startButton.disabled = false;
  });
}


function handleError(error) {
  errorMsg(`getDisplayMedia error: ${error.name}`, error);
}


function errorMsg(msg, error) {
  const errorElement = document.querySelector('#errorMsg');
  errorElement.innerHTML += `<p>${msg}</p>`;
  if (typeof error !== 'undefined') {
    console.error(error);
  }
}

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
  navigator.mediaDevices.getDisplayMedia({video: true})
      .then(handleSuccess, handleError);
});

if ((navigator.mediaDevices && 'getDisplayMedia' in navigator.mediaDevices)) {
  startButton.disabled = false;
} else {

  errorMsg('FAILED');

}


//TIME

Date();

                function printTime() {
                    var d = new Date();
                    var hours = d.getHours();
                    var mins = d.getMinutes();
                    var secs = d.getSeconds();
                    var day = d.getDay();
                    var date = d.getDate();
                    var month = d.getMonth();
                    var year = d.getFullYear();

                    switch (day) {

                        case 0:
                            day = "Sunday";
                            break;
                        case 1:
                            day = "Monday";
                            break;
                        case 2:
                            day = "Tuesday";
                            break;
                        case 3:
                            day = "Wednesday";
                            break;
                        case 4:
                            day = "Thursday";
                            break;
                        case 5:
                            day = "Friday";
                            break;
                        case 6:
                            day = "Saturday";
                            break;
                    }


                    if (hours < 10) {
                        hours = "0" + hours;
                    }
                    if (mins < 10) {

                        mins = "0" + mins;
                    }
                    if (secs < 10) {

                        secs = "0" + secs;
                    }

                    month = month + 1; document.getElementById("test").innerHTML = hours + ":" + mins + ":" + secs;
                    document.getElementById("ttt").innerHTML = day + ", " + date + "." + month + "." + year;
                }
                setInterval(printTime, 1000);

