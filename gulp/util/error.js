const notify = require("gulp-notify");

module.exports = function(err) {
  let args = Array.prototype.slice.call(arguments);

  notify.onError(
    {
      title: 'Compile Error'
    }
  ).apply(this, args);

  this.emit('end');
};