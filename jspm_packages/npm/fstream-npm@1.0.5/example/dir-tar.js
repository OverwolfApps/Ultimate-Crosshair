/* */ 
(function(process) {
  var P = require("fstream").DirReader;
  var tar = require("tar");
  function f(entry) {
    return entry.basename !== '.git';
  }
  new P({
    path: './',
    type: 'Directory',
    Directory: true,
    filter: f
  }).on('package', function(p) {
    console.error('package', p);
  }).on('ignoreFile', function(e) {
    console.error('ignoreFile', e);
  }).on('entry', function(e) {
    console.error(e.constructor.name, e.path.substr(e.root.path.length + 1));
  }).pipe(tar.Pack()).pipe(process.stdout);
})(require("process"));
