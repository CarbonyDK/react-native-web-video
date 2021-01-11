export const openFullscreen = (el: HTMLVideoElement) => {
	if (el.requestFullscreen) {
		el.requestFullscreen();
		// @ts-ignore
	} else if (el.mozRequestFullScreen) {
		// @ts-ignore
		el.mozRequestFullScreen();
		// @ts-ignore
	} else if (el.webkitRequestFullscreen) {
		// @ts-ignore
		el.webkitRequestFullscreen();
		// @ts-ignore
	} else if (el.msRequestFullscreen) {
		// @ts-ignore
		el.msRequestFullscreen();
	}
};
