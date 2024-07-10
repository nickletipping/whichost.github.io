document.addEventListener("DOMContentLoaded", function() {
    const topAd = document.querySelector('a[href="https://www.a2hosting.com/?aid=adflyrich&bid=a3194333"]');

    const arrayOfAdTags = [
      `<a href="https://www.a2hosting.com/?aid=adflyrich&bid=a3194333" target="_top"><img src="//affiliates.a2hosting.com/accounts/default1/9u7wabf7le4/a3194333.jpg" alt="" title="" style="max-width:90vw" width="728" height="90"></a>`,
      `<a href="https://www.a2hosting.com/wordpress-hosting/managed/?aid=adflyrich&bid=0ffde563" target="_top"><img src="//affiliates.a2hosting.com/accounts/default1/9u7wabf7le4/0ffde563.jpg" alt="managed wordpress hosting" title="managed wordpress hosting" width="728" height="90" /></a><img style="border:0;max-width:90vw;" src="https://affiliates.a2hosting.com/scripts/9u7waif7le4?aid=adflyrich&bid=0ffde563" width="1" height="1" alt="" />`,
      `<a href="https://www.a2hosting.com/joomla-hosting/?aid=adflyrich&bid=1debff52" target="_top"><img src="//affiliates.a2hosting.com/accounts/default1/9u7wabf7le4/1debff52.png" alt="joomla hosting" title="joomla hosting" width="728" height="90" /></a><img style="border:0;max-width:90vw;" src="https://affiliates.a2hosting.com/scripts/9u7waif7le4?aid=adflyrich&bid=1debff52" width="1" height="1" alt="" />`,
      `<a href="https://www.a2hosting.com/opencart-hosting/?aid=adflyrich&bid=9262d080" target="_top"><img src="//affiliates.a2hosting.com/accounts/default1/9u7wabf7le4/9262d080.gif" alt="" title="" width="728" height="90" /></a><img style="border:0;max-width:90vw;" src="https://affiliates.a2hosting.com/scripts/9u7waif7le4?aid=adflyrich&bid=9262d080" width="1" height="1" alt="" />`
    ];

    const randomness = () => Math.floor(Math.random() * arrayOfAdTags.length);

    if (topAd) {
      topAd.parentNode.innerHTML = arrayOfAdTags[randomness()];
    }


    //////
     const styles = `
            #right-ad, #left-ad {
                position: fixed;
                top: 50%;
                transform: translateY(-50%);
                width: 160px;
                height: 600px;
            }
            #right-ad {
                right: 0;
            }
            #left-ad {
                left: 0;
            }
            @media (max-width: 1200px) {
                #right-ad, #left-ad {
                    display: none;
                }
            }
        `;
     // Append the styles to the head
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
    
const adsHtml = `
    <a id="right-ad" href="https://www.a2hosting.com/?aid=adflyrich&amp;bid=a504f205" target="_top">
        <img src="//affiliates.a2hosting.com/accounts/default1/9u7wabf7le4/a504f205.jpg" alt="" title="" width="160" height="600" />
    </a>
    <img style="border:0" src="https://affiliates.a2hosting.com/scripts/9u7waif7le4?aid=adflyrich&amp;bid=a504f205" width="1" height="1" alt="" />
    
    <a id="left-ad" href="https://www.a2hosting.com/wordpress-hosting/managed/?aid=adflyrich&amp;bid=23290c1b" target="_top">
        <img src="//affiliates.a2hosting.com/accounts/default1/9u7wabf7le4/23290c1b.jpg" alt="managed wordpress hosting" title="managed wordpress hosting" width="160" height="600" />
    </a>
    <img style="border:0" src="https://affiliates.a2hosting.com/scripts/9u7waif7le4?aid=adflyrich&amp;bid=23290c1b" width="1" height="1" alt="" />
`;

document.body.innerHTML += adsHtml;


  });


///
document.addEventListener('DOMContentLoaded', () => {
  const anchors = Array.from(document.querySelectorAll('a'));
  
  anchors.forEach(anchor => {
    const href = anchor.getAttribute('href');
    if (href && href.match(/\/blog\/.*/)) {
        anchor.style.borderBottom = '2px solid black';   
    }
  });
});

