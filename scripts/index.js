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
	
				<a onclick="window.location.href = '';"` + (page["activeNav"] == "home" ? " active" : "") + `>
			
					<div class="item">
				
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.619 21.671c-5.038 1.227-8.711-1.861-8.711-5.167 0-3.175 3.11-5.467 6.546-5.467 3.457 0 6.546 2.309 6.546 5.467 0 1.12-.403 2.22-1.117 3.073-.029 1 .558 2.435 1.088 3.479-1.419-.257-3.438-.824-4.352-1.385zm-10.711-5.167c0-4.117 3.834-7.467 8.546-7.467.886 0 1.74.119 2.544.338-.021-4.834-4.761-8.319-9.998-8.319-5.281 0-10 3.527-10 8.352 0 1.71.615 3.391 1.705 4.695.047 1.527-.851 3.718-1.661 5.313 2.168-.391 5.252-1.258 6.649-2.115.803.196 1.576.304 2.328.363-.067-.379-.113-.765-.113-1.16z"/></svg>
						<br>
				
						<label id="hint">Home</label>
				
					</div>
					
				</a>
			
				<a onclick="window.location.href = 'checkout2.html';"` + (page["activeNav"] == "shippers" ? " active" : "") + `>
			
					<div class="item">
				
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.5 6c.276 0 .5.224.5.5v11c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-11c0-.276.224-.5.5-.5h19zm2.5 0c0-1.104-.896-2-2-2h-20c-1.105 0-2 .896-2 2v12c0 1.104.895 2 2 2h20c1.104 0 2-.896 2-2v-12zm-6.836 5.188c0 1.761-1.427 3.188-3.188 3.188s-3.188-1.427-3.188-3.188 1.428-3.188 3.189-3.188 3.187 1.427 3.187 3.188zm-6.73 0c0-1.087.493-2.061 1.266-2.711-.487-.302-1.061-.477-1.677-.477-1.761 0-3.188 1.427-3.188 3.188s1.427 3.188 3.188 3.188c.615 0 1.19-.175 1.677-.477-.773-.65-1.266-1.624-1.266-2.711zm-1.722 4.791v-.531c0-.2-.127-.335-.333-.336-.108-.002-.22.032-.297.151-.058-.094-.151-.151-.28-.151-.09 0-.179.027-.248.126v-.104h-.184v.846h.186v-.469c0-.147.081-.225.207-.225.122 0 .184.08.184.223v.471h.186v-.469c0-.147.085-.225.207-.225.126 0 .186.08.186.223v.471h.186zm2.752-.847h-.301v-.257h-.186v.257h-.172v.168h.172v.386c0 .197.076.313.294.313.08 0 .172-.025.23-.066l-.053-.158-.163.048c-.092 0-.122-.057-.122-.142v-.382h.301v-.167zm1.57-.021c-.106 0-.175.05-.223.124v-.103h-.182v.846h.184v-.475c0-.14.06-.218.181-.218l.115.021.057-.174-.132-.021zm-2.374.089c-.089-.058-.211-.089-.345-.089-.214 0-.352.103-.352.271 0 .138.103.223.292.25l.087.012c.101.014.149.041.149.089 0 .066-.067.103-.193.103-.127 0-.22-.041-.282-.089l-.088.143c.101.074.228.11.367.11.244 0 .386-.115.386-.276 0-.149-.112-.227-.296-.253l-.087-.012c-.08-.011-.143-.027-.143-.083 0-.062.06-.099.161-.099.108 0 .212.041.264.073l.08-.15zm4.933-.089c-.106 0-.175.05-.223.124v-.103h-.182v.846h.184v-.475c0-.14.06-.218.181-.218l.115.021.057-.174-.132-.021zm-2.373.445c0 .257.179.444.452.444.127 0 .212-.028.305-.101l-.089-.149c-.069.05-.142.076-.221.076-.147-.002-.255-.108-.255-.271 0-.163.108-.269.255-.271.08 0 .152.027.221.076l.089-.149c-.092-.073-.177-.101-.305-.101-.273.001-.452.189-.452.446zm1.725 0v-.423h-.184v.103c-.058-.076-.147-.124-.267-.124-.237 0-.423.186-.423.444 0 .259.186.444.423.444.12 0 .209-.048.267-.124v.103h.184v-.423zm-.685 0c0-.149.097-.271.257-.271.152 0 .255.117.255.271 0 .154-.103.271-.255.271-.16-.001-.257-.123-.257-.271zm-2.222-.445c-.248 0-.421.181-.421.444 0 .269.181.444.434.444.127 0 .244-.032.347-.119l-.09-.136c-.071.057-.161.089-.246.089-.119 0-.227-.055-.253-.207h.629l.004-.071c-.004-.263-.167-.444-.404-.444zm-.004.165c.119 0 .195.074.214.205h-.439c.02-.122.094-.205.225-.205zm4.62.28v-.763h-.184v.443c-.058-.076-.147-.124-.267-.124-.237 0-.423.186-.423.444 0 .259.186.444.423.444.12 0 .209-.048.267-.124v.103h.184v-.423zm-.685 0c0-.149.097-.271.257-.271.152 0 .255.117.255.271 0 .154-.103.271-.255.271-.16-.001-.257-.123-.257-.271zm-6.219 0v-.423h-.185v.103c-.058-.076-.147-.124-.267-.124-.237 0-.423.186-.423.444s.186.444.423.444c.12 0 .209-.048.267-.124v.103h.185v-.423zm-.686 0c0-.149.097-.271.257-.271.152 0 .255.117.255.271 0 .154-.103.271-.255.271-.159-.001-.257-.123-.257-.271z"/></svg>
						
						<br>
						
						<label id="hint">Explore Shippers</label>
				
					</div>
					
				</a>
			
				<a onclick="window.location.href = 'home.html';"` + (page["activeNav"] == "chats" ? " active" : "") + `>
			
					<div class="item" id="homeIcon">
				
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093l-3-3v-2.093h3v5.093zm4 5.907h-3v10h-18v-10h-3l12-12 12 12zm-10 2h-4v6h4v-6z"/></svg>
				
						<br>
						
						<label id="hint">Chats</label>
				
					</div>
					
				</a>
			
				<a>
			
					<div class="item" id="homePlaceholderIcon">
				
						<br>
						
						<label id="hint"></label>
				
					</div>
					
				</a>
			
				<a onclick="window.location.href = 'private-profile.html';"` + (page["activeNav"] == "shipments" ? " active" : "") + `>
			
					<div class="item">
				
						<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M18.5 12c-3.036 0-5.5 2.463-5.5 5.5s2.464 5.5 5.5 5.5c3.035 0 5.5-2.463 5.5-5.5s-2.465-5.5-5.5-5.5zm-6.634 9h-11.866v-20h22v9.866c-.62-.328-1.292-.572-2-.716v-7.15h-7v6h-4v-6h-7v16h9.15c.144.708.388 1.38.716 2zm6.019-2.94l-1.259-1.182-.962.989 2.24 2.133 3.765-3.834-.979-.97-2.805 2.864zm-8.885-1.06h-5v-2h5v2z"/></svg>
						
						<br>
						
						<label id="hint">Your Shipments</label>
				
					</div>
					
				</a>
			
				<a onclick="window.location.href = 'search.html';"` + (page["activeNav"] == "me" ? " active" : "") + `>
			
					<div class="item">
				
						<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M7.919 17.377l-4.869-13.377h-2.05c-.266 0-.52-.105-.707-.293-.188-.187-.293-.442-.293-.707 0-.552.447-1 1-1h3.45l5.469 15.025c.841.101 1.59.5 2.139 1.088l11.258-4.097.684 1.879-11.049 4.021c.032.19.049.385.049.584 0 1.932-1.569 3.5-3.5 3.5-1.932 0-3.5-1.568-3.5-3.5 0-1.363.781-2.545 1.919-3.123zm1.581 1.811c.724 0 1.312.588 1.312 1.312 0 .724-.588 1.313-1.312 1.313-.725 0-1.313-.589-1.313-1.313s.588-1.312 1.313-1.312zm5.799-12.29l4.767-1.735 2.736 7.517-11.406 4.152-2.736-7.518 4.759-1.732 1.325 3.639 1.879-.684-1.324-3.639zm.537-1.26l-7.518 2.736-2.052-5.638 7.518-2.736 2.052 5.638z"/></svg>
				
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