

$("document").ready(function(){ 
      
      checkboxClick();	  
      createTemp();
      createMenu();
      menuClick(); 
      initStyle();
      individualsClick();
            
      
     
}) 
function initStyle(){
$(".filter-collection-tabs").css ("height", "0px");
let specialPods = document.querySelectorAll(".plans-card");
specialPods[1].style.backgroundColor ="rgb(188 209 235 / 39%)";
specialPods[1].style.border ="1px soldi #959cb1";
$(".spectrum-Banner--value").css("background-color", "#472cb2");
$(".spectrum-Banner-header > p span").removeAttr("style").attr("style","color:white");
$(".spectrum-Banner-header > span").css("color", "#fff");
//$(".spectrum-Tabs-item #react-spectrum-1").addClass("mobile_menu")
}  

function individualsClick(){
$('#react-spectrum-1').on('click', function(){

       var currentNavHeight = $('.filter-collection-tabs').height();          
       if (currentNavHeight < 5){                    
                   $(".filter-collection-tabs").css ("height", "400px");  
                   $(".filter-collection-tabs").slideUp(600); 
                  
       }
      else
        {

             $(".filter-collection-tabs").css ("height", "0px");
              $(".filter-collection-tabs").slideDown(600);
                              
        }
  });  
}
function checkboxClick(){
$('#checkbox-171864719').on('click',function (evt) {   
     if (evt.target.checked == true){ 
     
        $("div[aria-labelledby^=Photography] .currency-major").replaceWith(priceFn); 
     }
     else {
         $("div[aria-labelledby^=Photography] .currency-major").replaceWith(priceFn);
     }
  });   

 $('#checkbox-270718776').on('click',function (evt) {
     if (evt.target.checked == true){ 
        $("div[aria-labelledby^=All] .currency-major").replaceWith(priceFn); 
     }
     else {
        $("div[aria-labelledby^=All] .currency-major").replaceWith(priceFn);
     }
  });

  $('#checkbox--601395100').on('click',function (evt) {
     if (evt.target.checked == true){ 
     $("div[aria-labelledby^=Photoshop] .currency-major").replaceWith(priceFn); 
     }
     else{
         $("div[aria-labelledby^=Photoshop] .currency-major").replaceWith(priceFn);
     }
  });
}  
function priceFn(){  
   //alert($(this).text())
    var defaultPrice = $(this).text();
    switch (defaultPrice){
        case "US$9.99":
              return "<span class='currency-major'>US$39.98</span>";
        case "US$39.98":
             return "<span class='currency-major'>US$9.99</span>";
             
        case "US$52.99": 
             return "<span class='currency-major'>US$82.98</span>";
        case "US$82.98":     
             return "<span class='currency-major'>US$52.99</span>";
        case "US$20.99": 
              return "<span class='currency-major'>US$50.98</span>"; 
        case "US$50.98": 
               return "<span class='currency-major'>US$20.99</span>";          
    }
 
}
function createMenu(){
var structure = [
            "<div class='spectrum-Tabs-item svg-icon social-18x18' id='filterlist-react-spectrum-14' role='tab'>",
                "<span class='spectrum-Tabs-itemLabel'>Recommended for you</span>",
            '</div>'
        ];
      $(structure.join('')).appendTo($('.spectrum-Tabs:last'));
}  
function createTemp(){
 var itemDesc = [
 "<div class='plans-card standard-card display-none temp'  id='888234167' role='group' aria-labelledby='Creative Bundle' tabindex='-1' data-vat-included='none' style='order: 17;'>",
    "<div class='card-content'>Temp", 
    "</div></div>"
    ];
    $(itemDesc.join('')).insertAfter(".plans-card:last")
}   
function menuClick(){

  $('#filterlist-react-spectrum-5 span').on('click', { name: "All apps" }, addProductView); 
  $('#filterlist-react-spectrum-6 span').on('click', { name: "Photo" }, addProductView);
  $('#filterlist-react-spectrum-7 span').on('click',{ name: "Graphic Design" }, addProductView)
  $('#filterlist-react-spectrum-8 span').on('click',{ name: "Video" }, addProductView)
  $('#filterlist-react-spectrum-9 span').on('click',{ name: "Illustration" }, addProductView)
  $('#filterlist-react-spectrum-10 span').on('click',{ name: "UI and UX" }, addProductView)
  $('#filterlist-react-spectrum-11 span').on('click',{ name: "Acrobat and PDF" }, addProductView)
  $('#filterlist-react-spectrum-12 span').on('click',{ name: "3D and AR" }, addProductView);//3
  $('#filterlist-react-spectrum-13 span').on('click',{ name: "Social Media" }, addProductView);//3
  $('#filterlist-react-spectrum-14 span').on('click',{ name: "Recommended for you" }, addProductView);//3
} 



function addProductView(event){
     //styleModify();
    $(".svg-icon").each(function(i, element) { 	                       
              //   var catList = "filterlist-react-spectrum-"+i;		
              $(element).removeClass("is-selected")	;		   			  
      }); 

   $(event.data.id).addClass("is-selected");
    var item = event.data.name;
   
        switch (item){
        case "All apps":			  
              //allPods();
              updatePods([]); 
              break;
        case "Photo":			    
                updatePods([0,1,3,9]);               					
                break;
        case "Graphic Design":
                updatePods([1,3,6,7,10,11,14,16]);
                
                break;	
        case "Video":	
               updatePods([1,4,5,8,11,15]);
               
               break;		  
        case "Illustration":				 
               updatePods([1,3,6]);
              
               break;	
        case "UI and UX":	
               updatePods([1,3,7,10,11,12,13,16]);
               
               break;		   
        case "Acrobat and PDF": 		     				    
               updatePods([1,2]);
               
              break;
        case "3D and AR":	
               updatePods([1,3,14]);
               
               break;	  
        case "Social Media":	
               updatePods([1,5,11]);
               
               break;	  
        case "Recommended for you":	
               checkPrice();	       
               updatePods([1,3,17]);				   
               createPod();	
               checkboxClick();		  
               $(".filter-collection_section-title p").replaceWith(item);
               break;				  
         default: 
                 return this.outerHTML;
        } 			  
   
}
function checkPrice(){
let allPrice = $("div[aria-labelledby^=All] .currency-major").text();
let photoshopPrice = $( "div[aria-labelledby^=Photoshop] .currency-major" ).text();
let graphyPrice = $("div[aria-labelledby^=Photography] .currency-major").text();
   
if ( allPrice == "US$82.98")  $("#checkbox-270718776").attr("checked",true);
else  $("#checkbox-270718776").attr("checked",false);

if(photoshopPrice == "US$50.98") $("#checkbox--601395100").attr("checked",true);
else  $("#checkbox--601395100").attr("checked",false);

if(graphyPrice == "39.98")  $("#checkbox-171864719").attr("checked",true);
else  $("#checkbox-171864719").attr("checked",false);
}

function updatePods(arr){
let len = arr.length;
const prodPods = document.querySelectorAll(".plans-card");	
    for (var i = 0; i < prodPods.length; i++) {
         prodPods[i].classList.add("display-none");	
          prodPods[i].style.order= -1;
          if(len == 0){
              prodPods[i].classList.remove("display-none");
              prodPods[i].style.order= i;
              if(i==1)
                  prodPods[i].style.backgroundColor ="rgb(188 209 235 / 39%)";	
                                
          }
          if( len == 3){
                if ( i == arr[0] || i == arr[1] || i == arr[2]){
                    prodPods[i].classList.remove("display-none");
                    prodPods[i].style.order= i;
                }
          }else if( len == 2 )	 {
              if ( i == arr[0] || i == arr[1]){
                prodPods[i].classList.remove("display-none");
                prodPods[i].style.order= i;
               }				  
          }else if( len == 4 ){
              if ( i == arr[0] || i == arr[1] || i == arr[2] || i == arr[3]){
                     prodPods[i].style.order= i;
                     prodPods[i].classList.remove("display-none");
                }				  
          }else if( len == 6 ){
              if ( i == arr[0] || i == arr[1] || i == arr[2] || i == arr[3]|| i == arr[4]|| i == arr[5]){
                     prodPods[i].style.order= i;
                     prodPods[i].classList.remove("display-none");
                }				  
          }else if( len == 8 ){
              if ( i == arr[0] || i == arr[1] || i == arr[2] || i == arr[3] || i == arr[4] || i == arr[5] || i == arr[6] || i == arr[7]){
                     prodPods[i].style.order= i;
                     prodPods[i].classList.remove("display-none");
                }				  
          }
    } 
     //console.log('Product: ', prodPods[i]);
        
}
//============================================
function createPod(){

 $(".plans-card-collection div").replaceWith(itemPodFn);
 $(".plans-card-collection > div[id=1616234167]").css(
 {"width": "570px", 
 "margin-left": "285px", 
 "background":"rgb(188 209 235 / 39%)",
 "border ":"1px soldi #959cb1"});		 
 $("#1616234167 a.spectrum-Button--cta").css({"margin-left": "480 px"});
                                   
}		  
//=======================================================		  		  
function itemPodFn(){
var itemDesc = [
"<div class='plans-card standard-card'  id='1616234167' role='group' aria-labelledby='Creative Bundle' tabindex='-1' data-vat-included='none' style='order: 17;'>",
    "<div class='card-content'>",
       "<content-section>",
           "<div class='container'>",
               "<div class='root responsivegrid'>",
                           "<div class='image parbase'>",
                               "<div class='dexter-Image  dexter-Image-left'>",
                               "<img id='id-b7cd697cab689f1b47fdbddeeb5d8de5' data-src='/content/dam/shared/images/product-icons/svg/illustrator.svg' src='/content/dam/shared/images/product-icons/svg/illustrator.svg' class='dexter-LazyImage'>&nbsp;&nbsp",
                               "<img id='id-0cb20907e6da27f8f333ec17515670cf' data-src='/content/dam/shared/images/product-icons/svg/premiere.svg' src='/content/dam/shared/images/product-icons/svg/premiere.svg' alt='' class='dexter-LazyImage'>",
                           "</div></div>",
                           "<div class='horizontalRule'><hr style='border-bottom: 1px solid rgba(255,255,255,0);'></div>",
                           "<div class='title'><div class='cmp-title'>",
                           "<h3 class='cmp-title__text'>Creative Bundle &nbsp;&nbsp;(Illustrator + Premiere)</h3>",
                           "</div></div>",
                           "<div class='flex'><div class='dexter-FlexContainer dexter-Background dexter-LazyImage'>",
                           "<div class='cmp-text'><div class='dexter-price'>",
                           "<div class='price-section' style='font-size:24px; margin-top:10px;'>",
                           "<span class='currency-major'>US$61.98</span>",
                           "<div class='post-currency-major'><span class='term'> <p class='termText'>/mo</p></span></div>",
                           "</div></div></div></div></div>",
                            
                           "<div class='text NoMarginTop NoMarginBottom'><div class='cmp-text'>",
                               "<p>Create precise designs, Illustrations, and vector graphics on desktop and iPad.,",
                               "<br>Professional video and film editing.<br>",
                               "<a href=https://www.adobe.com/plans-fragments/modals/individual/illustrator/master.html' target='_blank' data-disable-query='false' data-enable-jumptoken='false' class='modal-Link' disablelinktracking='false' daa-ll='<p>See plan &amp;amp; pricing details</p> - 1' daa-im='true'>See plan &amp; pricing details</a></p>",
                           "</div></div>",
                        
               "</div>",		
           "</div>",
       "</content-section>",
    "</div>",
    "<div class='card-checkbox'>",
                "<label class='spectrum-Checkbox'>",
                "<input type='checkbox' id='checkbox-1698793017' class='spectrum-Checkbox-input' aria-checked='false' value='on'>",
                    "<span class='spectrum-Checkbox-box'>",
                    "<svg class='spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark' focusable='false' aria-hidden='true'>",
                    "<use xlink:href='#spectrum-css-icon-CheckmarkSmall'><symbol id='spectrum-css-icon-CheckmarkSmall'>",
                    "<path d='M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1 1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712 6A.999.999 0 0 1 3.788 9z' class='spectrum-UIIcon--medium'>",
                    "</path><path d='M4.5 11a.999.999 0 0 1-.788-.385l-3-4a1 1 0 1 1 1.576-1.23L4.5 8.376l5.212-6.99a1 1 0 1 1 1.576 1.23l-6 8A.999.999 0 0 1 4.5 11z' class='spectrum-UIIcon--large'>",
                    "</path></symbol></use></svg>",
                    "</span>",
                "<span class='spectrum-Checkbox-label'>Add Adobe Stock.<br>Get one month free.* </span>",
                "</label>",
 "</div>", 
                
"<div class='dexter-Cta dexter-Cta--align-left'>",
                "<a href='https://commerce.adobe.com/checkout?cli=creative&amp;co=US&amp;code=&amp;ctx=fp&amp;items[0][cs]=0&amp;items[0][id]=30404A88D89A328584307175B8B27616&amp;lang=en' class='spectrum-Button spectrum-Button--cta' target='_self' aria-label='Creative Bundle - Buy now'>Buy now</a>",
"</div>",
                                
"</div>"
          ];
   
 if($(this).text().indexOf("Temp") != -1){
     //return  "<div class='plans-card standard-card'><p>Creative Bundle</p></div>"
     return $(itemDesc.join(''));
 }else{
     return this.outerHTML
 }
}	
