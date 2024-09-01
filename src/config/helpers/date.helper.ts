export class DateHelper {
	static calculateTimeLeft() {
		const now = new Date().getTime();
		const distance = new Date('2024-10-01T00:00:00').getTime() - now;


		if (distance <= 0) return null;

		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		return {
			days,
			hours,
			minutes,
			seconds
		};
	};

	static formatDate(date: Date) {
		return date.toLocaleDateString('es-ES', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		});
	}

	static formatTime(time: number) {
		return time ? `${time}`.padStart(2, '0') : '00';
	}
}