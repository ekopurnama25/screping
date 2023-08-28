const fetch = require("node-fetch");

const getRequestHost = () =>
  new Promise((resolve, reject) => {
    fetch("http://one.posco.net/idms/webapps/jsp/one/login/login.jsp", {
      methode: "GET",
      head: {
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/103.0.5060.114",
      },
    })
      .then((res) => res.text())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
(async () => {
  const detailHost = await getRequestHost();
  console.log(detailHost);
})();
