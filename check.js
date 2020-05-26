window.getAll = function(parent, getChildrensChildren){
          var node_p = document.getElementsByTagName("p").length;
          var node_div = document.getElementsByTagName("div").length;
          var node_span = document.getElementsByTagName("span").length;
          var node_a = document.getElementsByTagName("a").length;
          var node_img = document.getElementsByTagName("img").length;
          var node_script = document.getElementsByTagName("script").length;
          var node_h1 = document.getElementsByTagName("h1").length;
          var node_h2 = document.getElementsByTagName("h2").length;
          var node_h3 = document.getElementsByTagName("h3").length;
          var node_h4 = document.getElementsByTagName("h4").length;
          var node_h5 = document.getElementsByTagName("h5").length;
          var node_h6 = document.getElementsByTagName("h6").length;
          var node_h7 = document.getElementsByTagName("h7").length;
          var node_data = document.getElementsByTagName("data").length;
          var node_ol = document.getElementsByTagName("ol").length;
          var node_ul = document.getElementsByTagName("ul").length;
          var node_li = document.getElementsByTagName("li").length;
          var node_canvas = document.getElementsByTagName("canvas").length;
          var node_form = document.getElementsByTagName("form").length;
          var node_input = document.getElementsByTagName("input").length;
          var node_meta = document.getElementsByTagName("meta").length;
          var node_link = document.getElementsByTagName("link").length;
          var node_head = document.getElementsByTagName("head").length;
          var node_style = document.getElementsByTagName("style").length;
          var node_nav = document.getElementsByTagName("nav").length;
          var node_button = document.getElementsByTagName("button").length;
          var node_main = document.getElementsByTagName("main").length;
          var node_footer = document.getElementsByTagName("footer").length;
          var node_body = document.getElementsByTagName("body").length;
          var node_title = document.getElementsByTagName("title").length;
          var absolute = Math.abs(1+node_p+node_div+node_span+node_a+node_img+node_script+node_h1+node_h2+node_h3+node_h4+node_h5+node_h6+node_h7+node_data+node_ol+node_ul+node_li+node_canvas+node_form+node_input+node_meta+node_link+node_head+node_style+node_nav+node_button+node_main+node_footer+node_body+node_title);

          var relevantChildren = 0;
          var children = parent.childNodes.length;
          for(var i=0; i < children; i++){
              if(parent.childNodes[i].nodeType != 3){
                  if(getChildrensChildren)
                      relevantChildren += getAll(parent.childNodes[i],true);
                  relevantChildren++;
              }
          }
          var newww = Math.abs(relevantChildren-absolute/absolute*((relevantChildren/absolute)-absolute*absolute)); // just to hide the real count
          var newvw = Math.abs(newww-1807272.6072959534);
          var newxw = Math.abs(96360149.54864661-5062475938.659984-newvw);
          return newxw;
      }
    function checkWindow(){
        var test = getAll(document.getElementById('html'), true); // body tag element needs to an id of html (id='html')
        var taga = 'main';  // choose whatever body tag you wat 
        var aa = 765073755420.6929; // first check, those need to be calculated against browsers look downwords for (a)
        var bb = 924319814895.7274; // second check
        var cc = 642856318068.0066; // edge or ie the calculation is somewhat different from other browsers
        var dd = 633111988936.4869; // chrome the calculation is somewhat different from other browsers
             // console.log(test); (a) unmark this line to get the values.
          if (aa == test || bb == test || cc == test || dd == test) {var ddd = 'true'} else {var ddd = 'false'};
          if (ddd == 'false') {
            document.getElementsByTagName(taga)[0].setAttribute('style','position:absolute;width:100%;height:100%;background-color:black;z-index:10001 !important;');
            var node = document.createElement("p");
            var textnode = document.createTextNode("siden ble ikke lastet ordenlig, eller en script ble ikke lastet ordenlig vennligst prøv på å laste siden på nytt.;");
            node.setAttribute('style','position:relative;color:white;z-index:10002;');
            node.setAttribute('class','text-center'); // if you using bootstrap else "node.setAttribute('stlye', node.getAttribute("style")+'text-align: center;');"
            node.appendChild(textnode);
            document.getElementsByTagName(taga)[0].innerHTML = '';
            document.getElementsByTagName(taga)[0].appendChild(node);
          }
    }
    setTimeout(function(){ checkWindow(); }, 5000);setTimeout(function(){ checkWindow(); }, 20000);
