/**
 * New node file
 */

artc = window.androidRTCPeerConnection = function() {
	
};

artc.prototype.addIceCandidate = function() {
	pc_js2java.addIceCandidate();
};

artc.prototype.addStream = function() {
	pc_js2java.addStream();
};

artc.prototype.close = function() {
	pc_js2java.close();
};

artc.prototype.createAnswer = function(cb) {
	pc_js2java.createAnswer();
	artc.prototype.cb_createAnswer = cb;
};

artc.prototype.createDataChannel = function() {
	pc_js2java.createDataChannel();
};

artc.prototype.createOffer = function(cb) {
	pc_js2java.createOffer();
	artc.prototype.cb_createOffer = cb;
};

artc.prototype.getLocalStreams = function() {
	pc_js2java.getLocalStreams();
};

artc.prototype.getRemoteStreams = function() {
	pc_js2java.getRemoteStreams();
};

artc.prototype.getStats = function() {
	pc_js2java.getStats();
};

artc.prototype.getStreamById = function() {
	pc_js2java.getStreamById();
};

artc.prototype.removeStream = function() {
	pc_js2java.removeStream();
};

artc.prototype.setLocalDescription = function() {
	pc_js2java.setLocalDescription();
};

artc.prototype.setRemoteDescription = function() {
	pc_js2java.setRemoteDescription();
};

artc.prototype.updateIce = function() {
	pc_js2java.updateIce();
};
