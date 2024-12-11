const express = require("express");
const app = express();
const PORT = 3000; // 사용할 포트 번호

// SSR: 서버에서 HTML 렌더링
app.get("/", (req, res) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tracking Test Page</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
      }
      header {
        background: #333;
        color: #fff;
        padding: 1rem 0;
        text-align: center;
      }
      main {
        padding: 2rem;
        max-width: 800px;
        margin: auto;
      }
      section {
        margin-bottom: 2rem;
      }
      footer {
        background: #333;
        color: #fff;
        text-align: center;
        padding: 1rem 0;
        position: fixed;
        width: 100%;
        bottom: 0;
      }
      button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      button:hover {
        background-color: #0056b3;
      }
      #intro {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
      }
      #features {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Tracking Test Page</h1>
    </header>
    <main>
      <section id="intro">
        <h2>Welcome to the Test Page</h2>
        <p>This is a simple page for testing tracking functionalities.</p>
        <button><a href="test1.html">Click Me!</a></button>
      </section>
      <section id="features">
        <h2>Features Section</h2>
        <p>Scroll down to test scroll tracking or interact with this button.</p>
        <button>Click Me Too!</button>
      </section>
    </main>
    <footer>
      <p>Tracking Test Footer</p>
    </footer>
  </body>
  <script>
    (function (w, d, s, u) {
      w.myTracker =
        w.myTracker ||
        function () {
          (w.myTracker.q = w.myTracker.q || []).push(arguments);
        };
      w.myTrackerSettings = { id: "YOUR_TRACKER_ID" };
      var script = d.createElement(s);
      script.async = 1;
      script.src = u + "/tracker.js";
      d.getElementsByTagName("head")[0].appendChild(script);
    })(window, document, "script", "https://marketflowlab.com");
  </script>
</html>

  `;

  res.send(html);
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
