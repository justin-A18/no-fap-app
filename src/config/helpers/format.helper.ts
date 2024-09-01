export class FormatHelper {
	public static formatPhone(phone: string): string {
		return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
	}

	public static formatCutText(text: string, length: number): string {
		return text.length > length ? text.slice(0, length) + '...' : text;
	}

	public static formatFirstName(name: string): string {
		return name.slice(0, 1).toUpperCase();
	}
}