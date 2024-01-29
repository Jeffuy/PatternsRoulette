let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let segments = document.querySelectorAll('.number');
let resultText = document.querySelector('#resultText');
let numberOfSegments = segments.length;
let degreesPerSegment = 360 / numberOfSegments;

spinBtn.onclick = function () {
	segments.forEach((segment, index) => {
		segment.classList.remove('highlight');
	})

	let spins = Math.floor(Math.random() * 10 + 10);
	let degrees = spins * 360;
	let extraDegrees = Math.floor(Math.random() * 360);
	let totalDegrees = degrees + extraDegrees;


	wheel.style.transform = 'rotate(' + totalDegrees + 'deg)';


	setTimeout(() => {

		let winningSegment = Math.floor(((totalDegrees % 360) / degreesPerSegment) + 0.5) % numberOfSegments;
		winningSegment = (numberOfSegments - winningSegment) % numberOfSegments;


		segments.forEach((segment, index) => {
			if (index === winningSegment) {
				segment.classList.add('highlight');

				let winningText = segment.textContent || segment.innerText;
                resultText.innerText = `La forma elegida es ${winningText}!`;

			}
		});
	}, 3000);
};