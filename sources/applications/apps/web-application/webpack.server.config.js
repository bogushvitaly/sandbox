const nodeExternals = require('webpack-node-externals');

var nodeModules = {};

module.exports = {
  target: 'node',
  externals: ["@angular-material-extensions/password-strength","@angular-mdc/web","@angular/animations","@angular/cdk","@angular/common","@angular/compiler","@angular/core","@angular/elements","@angular/fire","@angular/flex-layout","@angular/forms","@angular/http","@angular/language-service","@angular/material","@angular/platform-browser","@angular/platform-browser-dynamic","@angular/platform-server","@angular/pwa","@angular/router","@angular/service-worker","@angularclass/hmr","@nestjs/common","@nestjs/core","@nestjs/graphql","@nestjs/microservices","@nestjs/mongoose","@nestjs/ng-universal","@nestjs/schematics","@nestjs/swagger","@nestjs/typeorm","@nestjs/websockets","@nguniversal/common","@nguniversal/express-engine","@nguniversal/module-map-ngfactory-loader","@rdfjs/parser-jsonld","@rdfjs/serializer-jsonld","@tensorflow-models/coco-ssd","@tensorflow-models/mobilenet","@tensorflow-models/posenet","@tensorflow-models/speech-commands","@tensorflow/tfjs","@tensorflow/tfjs-node","aws-amplify","aws-amplify-angular","aws-appsync","express","express-rate-limit","express-serve-static-core","express-static-gzip","firebase","firebase-admin","firebase-functions","lodash","lodash-decorators","lodash-fun","ngx-auth-firebaseui","reflect-metadata","rxjs","ws","xhr2","zone.js","grpc"]
};
