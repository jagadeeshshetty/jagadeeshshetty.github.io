
async function i() {
    console.log("start i()");
    let domString = await base.getDOMAsString();
//    console.log(domString);
    let dom = new JSDOM(domString);
    console.log("dom.window.document.documentElement.querySelector('#jwp-container') " + dom.window.document.documentElement.querySelector('#jwp-container'));
//    console.log(dom.window.document.querySelector("jwp-container"));
/*     html2canvas(dom.window.document.documentElement.querySelector('#jwp-container')).then(function (canvas) {
        console.log(`canvas`, canvas);
    });
 */
    var element: HTMLDivElement = dom.window.document.documentElement.querySelector('#jwp-container');

/*     async function loadScript(url) {
        let response = await fetch(url);
        let script = await response.text();
        eval(script);
      }
      
      let scriptUrl = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js'
      loadScript(scriptUrl);
 */

     var el = document.createElement("script"),
      loaded = false;
      el.onload = el.onreadystatechange = function () {
        if ((el.readyState && el.readyState !== "complete" && el.readyState !== "loaded") || loaded) {
          return false;
        }
        el.onload = el.onreadystatechange = null;
        loaded = true;
        // done!
      };
      el.async = true;
      el.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-alpha2/html2canvas.min.js';
      var hhead = document.getElementsByTagName('head')[0];
      hhead.insertBefore(el, hhead.firstChild);

      html2canvas(document.querySelector("#jwp-container")).then((result) => console.log(result.toDataURL()));

    ////////////////////////////////////////////////////////////////////////////////////////
    // https://dev.to/protium/javascript-rendering-videos-with-html2canvas-3bk
    document.createElement("canvas");
    let canvas = document.getElementById('canvas') // declare a canvas element in your html
    let ctx = canvas.getContext('2d');
    let videos = document.querySelectorAll('video')
    let w, h
    for (let i = 0, len = videos.length; i < len; i++) {
        const v = videos[i]
        if (!v.src) continue // no video here
        try {
            w = v.videoWidth
            h = v.videoHeight
            canvas.width = w
            canvas.height = h
            ctx.fillRect(0, 0, w, h)
            ctx.drawImage(v, 0, 0, w, h)
            v.style.backgroundImage = `url(${canvas.toDataURL()})` // here is the magic
            v.style.backgroundSize = 'cover' 
            ctx.clearRect(0, 0, w, h); // clean the canvas
        } catch (e) {
            continue
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////
    var canvas = this.document.createElement("CANVAS");

                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;

                canvas.getContext('2d').drawImage(video, 0, 0);

                var dataUri = canvas.toDataURL('image/' + format, quality);
                var data = dataUri.split(',')[1];
                var mimeType = dataUri.split(';')[0].slice(5)

                var bytes = this.window.atob(data);
                var buf = new ArrayBuffer(bytes.length);
                var arr = new Uint8Array(buf);

                for (var i = 0; i < bytes.length; i++) {
                    arr[i] = bytes.charCodeAt(i);
                }

                var blob = new this.Blob([arr], { type: mimeType });
//                return { blob: blob, dataUri: dataUri, format: format };

    ////////////////////////////////////////////////////////////////////////////////////////

    var canvas = this.document.createElement("CANVAS");
    
		// Get handles on the video and canvas elements
		var video = document.querySelector('video');
		var canvas = document.querySelector('canvas');
		// Get a handle on the 2d context of the canvas element
		var context = canvas.getContext('2d');
		// Define some vars required later
		var w, h, ratio;
		
		// Add a listener to wait for the 'loadedmetadata' state so the video's dimensions can be read
		video.addEventListener('loadedmetadata', function() {
			// Calculate the ratio of the video's width to height
			ratio = video.videoWidth / video.videoHeight;
			// Define the required width as 100 pixels smaller than the actual video's width
			w = video.videoWidth - 100;
			// Calculate the height based on the video's width and the ratio
			h = parseInt(w / ratio, 10);
			// Set the canvas width and height to the values just calculated
			canvas.width = w;
			canvas.height = h;			
		}, false);
		
		// Takes a snapshot of the video
		function snap() {
			// Define the size of the rectangle that will be filled (basically the entire element)
			context.fillRect(0, 0, w, h);
			// Grab the image from the video
			context.drawImage(video, 0, 0, w, h);
		}
		 
	

    ////////////////////////////////////////////////////////////////////////////////////////

    try {
//        html2canvas(element);
    } catch (error) {
        console.log(error);
    }

    await client.pause(4000);
    console.log("stop i()");
}

async function processDOMForString() {
    await client
        .execute(function () {
            return window.document.documentElement.outerHTML;
        }, [], async function (result) {
            await base.setDOMAsString(result.value);
        })
}

async function setDOMAsString(value) {
    this.domAsString = value;
}

async function getDOMAsString() {
    await processDOMForString();
    return `<!DOCTYPE html>${this.domAsString}`;
}
