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
           
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

#posts {
    background: linear-gradient(135deg, #f0f0f0, #ffffff);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1s ease-in-out;
    font-family: 'Helvetica Neue', sans-serif;
}

#posts h2 {
    text-align: center;
    font-size: 2em;
    color: #333;
    margin-bottom: 20px;
    animation: slideInFromLeft 0.5s ease-out;
}

#posts a {
    display: block;
    padding: 10px 0;
    color: #33485e;
    text-decoration: none;
    font-size: 1.1em;
    border-bottom: 2px solid rgba(51, 72, 94, 0.5);
    transition: color 0.3s, border-bottom-color 0.3s;
    animation: fadeIn 1s ease-in-out;
}

#posts a:hover {
    color: #1e90ff;
    border-bottom-color: #1e90ff;
}

#posts center a img {
    max-width: 90vw;
    margin: 20px 0;
    border-radius: 5px;
    transition: transform 0.3s;
}

#posts center a img:hover {
    transform: scale(1.05);
}

#posts img {
    display: block;
    margin: 20px auto;
    max-width: 100%;
    border-radius: 10px;
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}
#home {
    background: linear-gradient(135deg, #e0f7fa, #ffffff);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1s ease-in-out;
    font-family: 'Helvetica Neue', sans-serif;
}

#home h2 {
    text-align: center;
    font-size: 2em;
    color: #00796b;
    margin-bottom: 20px;
    animation: slideInFromLeft 0.5s ease-out;
}

#home p {
    text-align: center;
    font-size: 1.2em;
    color: #555;
    margin-bottom: 20px;
    animation: fadeIn 1s ease-in-out;
}

#home img {
    display: block;
    margin: 20px auto;
    max-width: 100%;
    border-radius: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
    animation: fadeIn 1s ease-in-out;
}

#home img:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
body{  font-family: "Ubuntu", sans-serif;
background: rgb(236,236,236);
background: -moz-linear-gradient(82deg, rgba(236,236,236,1) 7%, rgba(213,236,255,1) 100%);
background: -webkit-linear-gradient(82deg, rgba(236,236,236,1) 7%, rgba(213,236,255,1) 100%);
background: linear-gradient(82deg, rgba(236,236,236,1) 7%, rgba(213,236,255,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ececec",endColorstr="#d5ecff",GradientType=1);
animation: gradient 15s ease infinite;
background-size: 400% 400%;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
    header h1{
      font-family: "Ubuntu", sans-serif;
    }

    header h1{
      font-family: "Archivo Black", sans-serif;

    }
header{
background: rgb(105,127,149);
background: -moz-linear-gradient(180deg, rgba(105,127,149,1) 7%, rgba(44,62,80,1) 100%);
background: -webkit-linear-gradient(180deg, rgba(105,127,149,1) 7%, rgba(44,62,80,1) 100%);
background: linear-gradient(180deg, rgba(105,127,149,1) 7%, rgba(44,62,80,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#697f95",endColorstr="#2c3e50",GradientType=1); }

nav ul{
  background: rgb(105,149,118);
background: -moz-linear-gradient(180deg, rgba(105,149,118,1) 7%, rgba(44,80,75,1) 100%);
background: -webkit-linear-gradient(180deg, rgba(105,149,118,1) 7%, rgba(44,80,75,1) 100%);
background: linear-gradient(180deg, rgba(105,149,118,1) 7%, rgba(44,80,75,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#699576",endColorstr="#2c504b",GradientType=1);
  
  }

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
        anchor.style.borderBottom = '2px solid #33485E';   
    }
  });
});

