if (process.env.INSTANA_ENABLE === 'true') {
  require('@instana/collector')();
}

const elasticsearch = require('elasticsearch');

console.log('###########################################################');
console.log('elasticsearch.Client.name:', elasticsearch.Client.name);
console.log('elasticsearch.Client.apis:', elasticsearch.Client.apis);
console.log('###########################################################');
