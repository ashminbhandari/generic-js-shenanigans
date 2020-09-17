function showFullNameTooltip(elm) {
    fontSizeBigger(elm);
    ttip = document.getElementById("name-input-tooltip");
    ttip.style.visibility = 'visible';
}

function hideFullNameTooltip(elm) {
    fontSizeSmaller(elm);
    ttip = document.getElementById("name-input-tooltip");
    ttip.style.visibility = 'hidden';
}

function fontSizeBigger(elm) {
    elm.style.fontSize = "large";
}

function fontSizeSmaller(elm) {
    elm.style.fontSize = "small";
}

function avatarUpload() {
    document.getElementById("avatar-upload").onchange = function () {
        let reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById("avatar").src = e.target.result;
        }

        reader.readAsDataURL(this.files[0]);
    }
}

function audioUpload() {
    document.getElementById("audio-upload").onchange = function () {
        let reader = new FileReader();
        let voiceSample = document.getElementById("voice-sample");
        reader.onload = function (e) {
            voiceSample.src = e.target.result;
            voiceSample.controls = true;
            voiceSample.play();
        }
        reader.readAsDataURL(this.files[0]);
    }
}

function videoUpload() {
    document.getElementById("video-upload").onchange = function () {
        let reader = new FileReader();
        let videoSample = document.getElementById("video-sample");
        reader.onload = function (e) {
            videoSample.src = e.target.result;
            videoSample.controls = true;
        }
        reader.readAsDataURL(this.files[0]);
    }
}

avatarUpload();
audioUpload();
videoUpload();