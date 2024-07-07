const topAd=document.querySelector('a[href="https://www.a2hosting.com/?aid=adflyrich&amp;bid=a3194333"]');


const arrayOfAdTags=[

  `<a href="https://www.a2hosting.com/?aid=adflyrich&amp;bid=a3194333" target="_top"><img src="//affiliates.a2hosting.com/accounts/default1/9u7wabf7le4/a3194333.jpg" alt="" title="" style="max-width:90vw" width="728" height="90"></a>`,
  




  ];


const randomness=()=>{return Math.floor(Math.random()*arrayOfAdTags.length)};


if(topAd){

topAd.parentNode.innerHTML=arrayOfAdTags[randomness];



}
