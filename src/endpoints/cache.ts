import { Endpoint } from '../endpoint';

export class CacheEndpoint extends Endpoint {
    constructor(accessToken: string) {
        super('/Course', accessToken);
    }

    async get(): Promise<string[]> {
        const response = await this.query('', {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    async delete(): Promise<void> {
        await this.query('', {method: "DELETE"});
    }

    async reverseIdx(): Promise<any> {
        const response = await this.query('/reserveIdx', {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }
}
