import { Cron } from './decorators';
import { Job } from './JobTypes';

export default class Application {
	@Cron(Job.EVERY_SECOND)
	async job1() {
		this.log('JOB 1');
	}

	@Cron(Job.EVERY_5_SECONDS)
	async job2() {
		this.log('JOB 2');
	}

	log(message: string) {
		console.log(message);
	}

	async init() {
		const test = {
			a: 1,
			b: 2,
		};
	}
}
