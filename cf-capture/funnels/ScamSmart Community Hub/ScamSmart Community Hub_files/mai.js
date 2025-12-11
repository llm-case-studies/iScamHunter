// /embed/widget.js
/**
 * Widget Embed iframe code
 * (also external domain)
 *
 */

function defer(method) {
  if (window.jQuery) {
      method();
  } else {
      setTimeout(function() { defer(method) }, 50);
  }
}

if(typeof jQuery == 'undefined'){
  var oScriptElem = document.createElement("script");
  oScriptElem.type = "text/javascript";
  oScriptElem.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js";
  document.head.insertBefore(oScriptElem, document.head.getElementsByTagName("script")[0])
}

function maiFocus(e){
  lastEditableFocus = $(e);
  // Remove any existing wrappers and maifocus elements
  $('.maifocus').remove();
  $('.mai-wrapper').remove();
  
  // Create a new container div as a sibling after the input
  $(e).after('<div class="mai-wrapper" style="position: absolute; display: inline-block; pointer-events: none; z-index: 2000;"></div>');
  
  // Position the wrapper relative to the input element
  const inputPos = $(e).offset();
  const inputWidth = $(e).outerWidth();
  $('.mai-wrapper').offset({
    top: inputPos.top - 23, // Adjust for button height
    left: inputPos.left + inputWidth - 40 // Adjusted to move button more to the left
  });
  
  // Add the button inside the wrapper
  $('.mai-wrapper').append(`<div id="" style="cursor: pointer; height: 20px; position: relative; z-index: 2000; pointer-events: auto;" class="maifocus"><img src="https://statics.myclickfunnels.com/workspace/Yjxavr/image/9335213/file/d77905dc2713f016c9375ff2624dcc0e.svg" style="height:20px;"></div>`);
  
  $('.maifocus').click(function(event){
    console.log($(lastEditableFocus));
    event.preventDefault();
    let command = {command: 'rewriteInput', data: $(lastEditableFocus).val(), fieldname: $(lastEditableFocus).attr('name') };
    // Attempt to progressively enhance w/ context
    command['context'] = ""

    if($('[name*="name"]').val() !== undefined ){
      command['context'] = command['context'] + `Name: ${$('[name*="name"]').val()} \n`;
    }

    if($('[name*="title"]').val() !== undefined ){
      command['context'] = command['context'] + `Title: ${$('[name*="title"]').val()} \n`;
    }

    if($('[name="maiContext"]').val() !== undefined ){
      command['context'] = command['context'] + `Context: ${$('[nam*="maiContext"]').val()}`;
    }


    // Change URL if not on right destination
    let link = window.mai.server+'/account/chatbots/'+window.mai.chatbot_id+'/widget?user_hash='+window.mai.user_hash+'&team_id='+window.mai.team_id+'&show_widget=true';
    // if ($('#maiiframe').attr('src') != link){
      link = link + "&" + serialize(command);
      // $('#maiiframe').attr('src', link);
      console.debug('[Mai][mai.js] navigating to:', link)
      document.getElementById('maiiframe').contentWindow.postMessage({navigate: link}, "*"); // This will navigate using Turbo and avoid 'flash/openclosing' of iframe
    // }else{
    //   // use postMessage if already in chat window
    //   document.getElementById('maiiframe').contentWindow.postMessage(command, "*");
    // }



    $("#maiparent").css('height', '700px');
    $("#maiparent").css('width', '400px');
  });
}

function initMai(){
  let lastEditableFocus = null;

  // TODO: Plug in cf2 editor api for this
  window.removeEventListener('message', receiveMessage, false);
  window.addEventListener('message', receiveMessage, false);
  function receiveMessage(event) {
    if (event.origin === window.mai.server) {
      const data = event.data;
      
      // Verify this is a mai message
      if (data.origin === 'mai') {
        console.log("Received mai command:", data.command, data);
        
        switch(data.command) {
          case 'change_text':
            if(lastEditableFocus != null && data.data != null) {
              if (lastEditableFocus.is("span") || lastEditableFocus.is("div")) {
                $(lastEditableFocus).text(data.data);
              } else {
                $(lastEditableFocus).val(data.data);
              }
            }
            break;
            
          case 'open_copilot':
            if (data.data && data.data.trim()) {
              window.CommandBar.openCopilot({query: data.data});
            } else {
              window.CommandBar.openCopilot();
            }
            break;
            
          case 'open_spotlight':
            if (data.data && data.data.trim()) {
              window.CommandBar.openSpotlight(data.data);
            } else {
              window.CommandBar.openSpotlight();
            }
            break;
            
          case 'navigate':
            if (data.data && data.data.trim()) {
              window.location.href = data.data;
            }
            break;
        }
      }

      if(data['open'] != null){
        let height = localStorage.getItem('chatWidgetHeight') || "700px";
        let width = localStorage.getItem('chatWidgetWidth') || "400px";
        
        if(data['width'] != null){
          width = data['width'];
        }

        if(data['height'] != null){
          height = data['height'];
        }

        if(data['open'] == true){
          $("#maiparent").css('height', height);
          $("#maiparent").css('width', width);
          
          // Handle expanded state positioning
          if(data['expanded']) {
            console.log("*** Mai.js handling expand message ***");
            console.log("Current maiparent styles:", {
              height: $("#maiparent").css('height'),
              width: $("#maiparent").css('width'),
              position: $("#maiparent").css('position')
            });
            
            // Calculate adjusted height based on top/bottom positioning
            let adjustedHeight = '100vh';
            if (window.mai.top) {
              adjustedHeight = `calc(100vh - ${window.mai.top})`;
              if (window.mai.bottom) {
                adjustedHeight = `calc(100vh - ${window.mai.top} - ${window.mai.bottom})`;
              }
            } else if (window.mai.bottom) {
              adjustedHeight = `calc(100vh - ${window.mai.bottom})`;
            }
            
            let cssProps = {
              'height': adjustedHeight,
              'width': '30%',
              'min-width': data['minWidth'] || '400px',
              'max-width': 'none', 
              'position': 'fixed'
            };

            if (window.mai.right) cssProps.right = window.mai.right;
            if (window.mai.top) cssProps.top = window.mai.top;
            if (window.mai.bottom) cssProps.bottom = window.mai.bottom;
            if (window.mai.left) cssProps.left = window.mai.left;

            $("#maiparent").css(cssProps);
            
            console.log("Updated maiparent styles:", {
              height: $("#maiparent").css('height'),
              width: $("#maiparent").css('width'),
              position: $("#maiparent").css('position'),
              minWidth: $("#maiparent").css('min-width')
            });
          } else {
            let cssProps = {
              'max-width': '100%',
              'min-width': 'auto',
              'position': 'fixed'
            };

            if (window.mai.right) cssProps.right = window.mai.right;
            if (window.mai.top) cssProps.top = window.mai.top;
            if (window.mai.bottom) cssProps.bottom = window.mai.bottom;
            if (window.mai.left) cssProps.left = window.mai.left;

            $("#maiparent").css(cssProps);
          }
        } else {
          if(typeof window.mai.show_launcher !== "undefined" && window.mai.show_launcher == false){
            $("#maiparent").css('height','1px');
            $("#maiparent").css('width','1px');
          } else {
            $("#maiparent").css('height','80px');
            $("#maiparent").css('width','80px');
          }
        }
      }
    }
  }
  // wait for DOM
  $(() => {
    // for pushing content into the right place
    // $('[data-page-element="ContentEditableNode"]').on('focus',function(){
    //   // console.log("focused on new editable in cf2");
    //   lastEditableFocus = this;
    // });
    // For Admin Textareas
    $('[name*="description"],[name*="content"],[name*="title"],[name*="summary"],[name*="subject"],[name*="preheadline"]').focus(function(){
      lastEditableFocus = $(this);
      maiFocus(this);
    });
  
    // beefree
    $('.tinyMce-placeholder,.txtTinyMce-wrapper[data-mce-style]').focus(function(){
      lastEditableFocus = $(this);
      maiFocus(this);
    });

  })
  

  // $('textarea,input').blur(function(){
  //   // console.log('blur');
  //   setTimeout(function(){
  //     if(!$("#maifocus").parent().hasClass("focused")) {
  //     };
  //   }, 200);
  // });
};

defer(initMai);
defer(initMaiParent)

window.addEventListener('turbo:render', function () {
  initMai();
});

function initMaiParent(){
  window.mai = window.mai || {};
  // wait for DOM
  $(() => {
    if(document.getElementById('maiparent') == null){
      var iframe2 = document.createElement('div');
      iframe2.id = "maiparent";
      var styles = {
          "border": "0px",
          "background-color": "transparent",
          "pointer-events": "none",
          "z-index": "2000",
          "position": "fixed",
          "bottom": (window.mai.bottom || '0px'),
          "width": window.mai.iframeWidth,
          "height": window.mai.iframeHeight,
          "overflow": "hidden",
          "opacity": "1",
          "max-width": "100%",
          "right": (window.mai.right || '0px'),
          "top": (window.mai.top || ''),
          "left":  (window.mai.left || ''),
          "max-height": "100%",
          "transition": "all 0.3s ease-in-out"
      };
      Object.assign(iframe2.style, styles);
      document.querySelector('body').appendChild(iframe2);

    }else{
      var iframe2 = document.getElementById('maiparent');
    }
    var iframe1 = document.createElement('iframe');
    // chat source (external url)
    iframe1.src = window.mai.server+'/account/chatbots/'+window.mai.chatbot_id+'/widget?user_hash='+window.mai.user_hash+'&team_id='+window.mai.team_id+'&side_panel='+(
      (typeof window.mai.side_panel !== "undefined") ? window.mai.side_panel : false)+'&show_launcher='+(
      (typeof window.mai.show_launcher !== "undefined") ? window.mai.show_launcher : true)+'&width='+((typeof window.mai.width !== "undefined") ? window.mai.width : '')+((typeof window.mai.show_widget !== "undefined") ? '&show_widget='+window.mai.show_widget : '');
    iframe1.id = "maiiframe";
    iframe1.allow = "autoplay; camera; microphone; clipboard-read; clipboard-write; self; *";
    iframe1.setAttribute("allowtransparency", "true");
    // iframe1.setAttribute("sandbox", "allow-same-origin");
    iframe1.frameBorder = "0";
    iframe1.style.backgroundColor = "transparent";
    var styles = {
        "pointer-events": "all",
        "background": "transparent",
        "border": "0px",
        "float": "none",
        "position": "absolute",
        "inset": "0px",
        "width": "100%",
        "height": "100%",
        "margin": "0px",
        "padding": "0px",
        "min-height": "0px"
    };
    Object.assign(iframe1.style, styles);
    iframe2.appendChild(iframe1);
    // document.querySelector('body').appendChild(iframe2);

    // document.domain = getRootDomain(window.mai.server);
  })
};


serialize = function (obj) {
  let str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

function getRootDomain(s){
  var sResult = ''
  try {
    sResult = s.match(/^(?:.*\:\/?\/)?(?<domain>[\w\-\.]*)/i).groups.domain
      .match(/(?<root>[\w\-]*(\.\w{3,}|\.\w{2}|\.\w{2}\.\w{2}))$/).groups.root;
  } catch(ignore) {}
  return sResult;
}

window.addEventListener('storage', function(e) {
  if (e.key === 'chatWidgetWidth' || e.key === 'chatWidgetHeight') {
    if ($("#maiparent").css('width') !== '1px') { // Only if widget is open
      $("#maiparent").css(e.key.replace('chatWidget', '').toLowerCase(), e.newValue);
    }
  }
});
