$(document).ready(function() {
	
	$("header").css({
		height: $("header").css("height"),
		lineHeight: $("header").css("height")
	});

	$("#main").append('<div class="snack" id="internetSnack">No Internet connection. Please ensure mobile data or wifi is active.</div>');
	
	if(navigator.onLine == false) {
	
		$("#internetSnack").css("bottom", "10px");
		
	}
	
	$("#internetSnack").css("transition", "0.3s bottom");
		
	setInterval(function() {
	
		if(navigator.onLine == false) {
	
			$("#internetSnack").css("bottom", "10px");
		
		}
		
		else {
		
			$("#internetSnack").css("bottom", "-120px");
		
		}
	
	}, 1000);
				
	$("input").attr("autocomplete", "off");

	$("#bottomNav").html(`
	
				<a onclick="window.location.href = 'home.html';"` + (page["activeNav"] == "home" ? " active" : "") + `>
			
					<div class="item">
				
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093l-3-3v-2.093h3v5.093zm4 5.907h-3v10h-18v-10h-3l12-12 12 12zm-10 2h-4v6h4v-6z"/></svg>
						
						<br>
				
						<label id="hint">Home</label>
				
					</div>
					
				</a>
			
				<a onclick="window.location.href = 'shippers.html';"` + (page["activeNav"] == "shippers" ? " active" : "") + `>
			
					<div class="item">
				
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-2.789 3.857l.94.934c-.875.885-1.773 1.933-2.125 3.375l-1.286-.314c.434-1.774 1.491-3.004 2.471-3.995zm-1.565 7.642c-.715 0-1.353-.279-1.887-.83-1.458.515-2.844-.044-3.576-1.084-.575-.817-.703-1.853-.353-2.845-.552-.534-.83-1.166-.83-1.884 0-1.562 1.16-2.803 3.24-2.586l.195 1.117c-.664.062-1.277.097-1.674.494-.668.668-.467 2.063.787 2.433-.832.836-.751 2.037-.127 2.696.654.69 1.903.799 2.765-.059.385 1.305 1.798 1.422 2.433.787.392-.392.431-.995.492-1.649l1.125.229c.2 1.979-1.009 3.181-2.59 3.181zm-3.318-7.032l.314 1.287c1.755-.43 2.953-1.45 3.989-2.471l-.938-.931c-.876.866-1.927 1.764-3.365 2.115z"/></svg>
						
						<br>
						
						<label id="hint">Explore Shippers</label>
				
					</div>
					
				</a>
			
				<a onclick="window.location.href = 'chats.html';"` + (page["activeNav"] == "chats" ? " active" : "") + `>
			
					<div class="item">
				
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 9.352c0-4.852-4.75-8.352-10-8.352-5.281 0-10 3.527-10 8.352 0 1.71.615 3.39 1.705 4.695.047 1.527-.85 3.719-1.66 5.312 2.168-.391 5.252-1.258 6.648-2.115 7.698 1.877 13.307-2.842 13.307-7.892zm-14.5 1.381c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25zm4.5 0c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25zm4.5 0c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25zm7.036 1.441c-.161.488-.361.961-.601 1.416 1.677 1.262 2.257 3.226.464 5.365-.021.745-.049 1.049.138 1.865-.892-.307-.979-.392-1.665-.813-2.127.519-4.265.696-6.089-.855-.562.159-1.145.278-1.74.364 1.513 1.877 4.298 2.897 7.577 2.1.914.561 2.933 1.127 4.352 1.385-.53-1.045-1.117-2.479-1.088-3.479 1.755-2.098 1.543-5.436-1.348-7.348z"/></svg>
				
						<br>
						
						<label id="hint">Chats</label>
				
					</div>
					
				</a>
			
				<a onclick="window.location.href = 'shipments.html';"` + (page["activeNav"] == "shipments" ? " active" : "") + `>
			
					<div class="item">
				
						<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M16.533 14.322l-.061.678h4.304c.146-.643.224-1.313.224-2l-.004-.243.987-1.56.649-1.024c.24.902.368 1.85.368 2.827 0 6.071-4.929 11-11 11-2.642 0-5.067-.933-6.964-2.487.617-.314 1.152-.765 1.564-1.314.891.669 1.91 1.178 3.013 1.481l-.084-.16c-.544-1.045-.994-2.138-1.336-3.265l-.061-.208 1.847-.819c.081.299.171.596.27.891.353 1.058.815 2.079 1.365 3.049.124.219.253.434.386.647.246-.399.48-.804.696-1.219.487-.935.89-1.912 1.196-2.921.068-.223.131-.448.189-.675h-3.587l6.039-2.678zm3.53 2.678h-3.926c-.133.592-.297 1.177-.489 1.753-.338 1.009-.762 1.988-1.262 2.927 2.489-.684 4.548-2.411 5.677-4.68zm-.814-7.711c-1.521-2.411-2.583-4.232-2.583-5.805 0-1.924 1.743-3.484 3.667-3.484 1.925 0 3.667 1.56 3.667 3.484s-1.59 4.221-3.667 7.516l-.002-.003-14.332 6.355.001.074c0 1.656-1.345 3-3 3-1.656 0-3-1.344-3-3s1.344-3 3-3c.914 0 1.733.41 2.283 1.055l13.966-6.192zm-16.026 1.711c-.142.623-.218 1.271-.223 1.936v.064c-.715 0-1.391.167-1.991.464l-.009-.464c0-6.071 4.929-11 11-11 1.139 0 2.238.174 3.272.496-.042.195-.072.394-.089.593-.044.517.001 1.029.105 1.532-.304-.12-.616-.223-.935-.31l.183.359c.578 1.157 1.048 2.37 1.39 3.618l.186.75-4.396 1.962h-2.155c-.044.332-.078.666-.101 1l-2.037.903c.007-.636.048-1.271.122-1.903h-4.322zm6.423-6.689c-2.503.678-4.576 2.41-5.71 4.689h3.958c.094-.408.202-.812.324-1.213.364-1.201.847-2.364 1.428-3.476zm2.353-.104c-.265.443-.516.894-.746 1.356-.52 1.041-.943 2.13-1.25 3.253l-.05.184h4.093c-.069-.262-.144-.523-.225-.781-.351-1.121-.817-2.205-1.377-3.237-.142-.262-.291-.52-.445-.775zm8.334.835c-.759 0-1.375-.616-1.375-1.375 0-.76.616-1.375 1.375-1.375s1.375.615 1.375 1.375c0 .759-.616 1.375-1.375 1.375z"/></svg>
						
						<br>
						
						<label id="hint">Your Shipments</label>
				
					</div>
					
				</a>
			
				<a onclick="window.location.href = 'my-profile.html';"` + (page["activeNav"] == "me" ? " active" : "") + `>
			
					<div class="item">
				
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
				
						<br>
						
						<label id="hint">Me</label>
				
					</div>
					
				</a>
			
	`);

	$("#menuIcon").click(function() {
		
		$("#sideNav").css("width", "100%");
		
		$("#sideNav #container").css("width", "17cm");
		
		$("#sideNav").css("backgroundColor", "rgba(0, 0, 0, 0.5)");
		
	});

	$("#backIcon").click(function() {
		
		history.back();
		
	});

	$("#sideNav").click(function() {
		
		setTimeout(function() {
		
			$("#sideNav").css("width", "0%");
			
		}, 100);
		
		$("#sideNav #container").css("width", "0");
		
		$("#sideNav").css("backgroundColor", "rgba(0, 0, 0, 0)");
		
	});
	
	$("#sideNav .sideLinks").parents("a").click(function() {
		
		fullLoader();
		
	});
	
	$("#sideNav #sdLnkExit").click(function() {
		
		if(typeof Android !== "undefined" && Android !== null) {
	
			Android.exit();
	
		}
		
		else {
		
			window.close();
		
		}
		
	});
	
	$("#iconHolder #menu").click(function() {
		
		$("#menuHolder").show(100);
		
		$("#menuBackground").show();
		
	});

	$("#menuBackground").click(function() {
		
		$("#menuHolder").hide(100);
		
		$("#menuBackground").hide();
		
	});

	$("#menuHolder #exit").click(function() {
		
		if(typeof Android !== "undefined" && Android !== null) {
	
			Android.exit();
	
		}
	
		else {

			window.close();
		
		}
		
	});

	$("#menuHolder #logOut").click(function() {
		
		$("#menuHolder").hide(100);
		
		setCookie("account", "", -1);
		
		var historyLength = history.length;
	
		history.go(-historyLength);

		window.location.href = "login.html";
		
	});

});

var app = {
//	apiUrl: "http://ovolisky.atwebpages.com/tlc/api/",
	apiUrl: "http://localhost:8080/tlc/api/",
	currentPage: 0,
	pageNumber: 83
}

function toast(text) {

	if(typeof Android !== "undefined" && Android !== null) {
	
		Android.toast(text);
	
	}
	
	else {

		alert(text);
		
	}

}

	var get = {}
	
	var urlString = window.location.href;
	
	if(urlString.indexOf("?") == -1) {
		
		get["next"] = "file:///android_asset/home.html";
	
	}
	
	else {
	
		var paramString = urlString.split('?')[1];
	
		var params_arr = paramString.split('&');
	
		for (var i = 0; i < params_arr.length; i++) {
	
			var pair = params_arr[i].split('=');
		
			get[pair[0]] = pair[1];
		
		}
	
	}
	
//alert( getCookie("account") );
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}