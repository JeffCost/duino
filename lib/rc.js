/*
 * Main RC constructor
 * Process options
 * Tell the board to set it up
 */
var RC = function (options) {
  if (!options || !options.board) throw new Error('Must supply required options to RC');
  this.board       = options.board;
  this.pin         = this.board.normalizePin(options.pin || 10);
  this.codeOn      = options.codeOn || '0FFFFFFF0101';
  this.codeOff     = options.codeOff || '0FFFFFFF0110';
  this.protocol    = options.protocol || 1;
  this.pulseLength = options.pulseLength || 195;
}

/*
 * Send triState code
 */
RC.prototype.triState = function (val) {
  var msg = '96' + this.pin + val + this.protocol + this.pulseLength;
  this.board.write(msg);	
}

module.exports = RC;
