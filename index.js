const md5 = require('md5');

function iframely(url) {
  var config = this.config.get('pluginsConfig.iframely');
  var endpoint = '//iframe.ly/api/oembed?';

  if (process.env.IFRAMELY_APIKEY) {
    endpoint += 'key=' + md5(process.env.IFRAMELY_APIKEY);
    endpoint += '&url=' + url.trim();

    return '<div class="iframely-wrapper" data-url="' +
     endpoint + '" style="margin: 1em 0;">' + url + '</div>';
  }

  return url;
}

module.exports = {
  website: {
    assets: './assets',
    js: ['scripts.js']
  },
  filters: {
    iframely: iframely,
    video: iframely,
  }
};
