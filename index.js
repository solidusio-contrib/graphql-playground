var express = require('express');
var altairExpress = require('altair-express-middleware');

const server = express();

var port = process.env.PORT || 4000;
var endPoint = process.env.ENDPOINT || 'http://localhost:3000/graphql';

server.use('/', altairExpress.altairExpress({
  endpointURL: endPoint,
  initialQuery: `{
  products {
    nodes {
      name
    }
  }
}`
}));


server.listen(port, function () {
  console.log('Graphql ide listening on port ' + port);
  console.log("Endpoint url: " + endPoint)
});
