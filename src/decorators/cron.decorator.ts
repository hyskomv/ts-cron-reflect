import { CronJob } from 'cron';

export interface CronOptions {
	name?: string;
	timeZone?: string;
	utcOffset?: string | number;
	unrefTimeout?: boolean;
}

export function Cron(cronTime: string | Date, options: CronOptions = {}): MethodDecorator {
	return (target, _propertyKey, descriptor) => {
		const isOriginalFunctions = descriptor.value && {}.toString.call(descriptor.value) === '[object Function]';

		if (!isOriginalFunctions) {
			return descriptor;
		}

		new CronJob(
			cronTime,
			() => descriptor.value!.apply(target),
			undefined,
			true,
			options.timeZone,
			undefined,
			undefined,
			options.utcOffset,
			options.unrefTimeout,
		);

		return descriptor;
	};
}
