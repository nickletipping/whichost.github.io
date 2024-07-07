document.addEventListener('DOMContentLoaded', function() {
    const hostingProviders = [
        "bluehost", 
        "godaddy", 
        "hostgator", 
        "siteground", 
        "dreamhost", 
        "a2 hosting", 
        "hostinger", 
        "inmotion hosting", 
        "greengeeks", 
        "wp engine", 
        "kinsta", 
        "interserver", 
        "scala hosting", 
        "ipage", 
        "liquid web", 
        "fastcomet", 
        "tmdhosting", 
        "namecheap", 
        "cloudways", 
        "accuweb hosting", 
        "bigrock", 
        "bluehost india", 
        "cloudsigma", 
        "digitalocean", 
        "exoscale", 
        "flywheel", 
        "justhost", 
        "linode", 
        "luxhosting", 
        "mediatemple", 
        "milesweb", 
        "ovhcloud", 
        "pagely", 
        "rackspace", 
        "resellerclub", 
        "rosehosting", 
        "skystra", 
        "smarterasp.net", 
        "tsohost", 
        "vultr", 
        "web.com", 
        "wpx hosting", 
        "x10hosting", 
        "znetlive"
    ];
        
    // Function to check if text contains a hosting provider name
    function containsHostingProvider(text) {
        return hostingProviders.some(provider => text.includes(provider));
    }

    // Function to process an element
    function processElement(el) {
        const text = el.textContent.trim().toLowerCase();
        
        if (containsHostingProvider(text) && text.length < 50) {
            const h2 = document.createElement('h2');
            h2.textContent = el.textContent;
            el.parentNode.replaceChild(h2, el);
        } else if (el.tagName === 'P' && el.childNodes.length === 1 && el.firstChild.nodeType === Node.TEXT_NODE) {
            // Check for single-line paragraphs that might be headings
            if (text.length < 100 && !text.endsWith('.')) {
                const h3 = document.createElement('h3');
                h3.textContent = el.textContent;
                el.parentNode.replaceChild(h3, el);
            }
        }
    }

    // Function to recursively process child nodes
    function processChildNodes(parent) {
        Array.from(parent.childNodes).forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                if (node.tagName === 'P' || node.tagName === 'LI') {
                    processElement(node);
                } else {
                    processChildNodes(node);
                }
            }
        });
    }

    // Get the main content area (adjust selector as needed)
    const content = document.querySelector('main, #content, .content, article');

    if (content) {
        processChildNodes(content);
    }
});