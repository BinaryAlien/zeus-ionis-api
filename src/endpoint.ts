import https from 'https';

const BASE_URL = 'https://zeus.ionis-it.com';

export class Endpoint {
    constructor(
        private readonly basepath: string,
        private readonly accessToken: string
    ) {}

    protected async query(
        target: string,
        options: https.RequestOptions,
        body?: any
    ): Promise<string> {
        options.headers ??= {};
        options.headers['Authorization'] = `Bearer ${this.accessToken}`;

        const url = new URL('/api' + this.basepath + target, BASE_URL);

        return await request(url, options, body);
    }
}

async function request(
    url: string | URL,
    options: https.RequestOptions,
    body?: any
): Promise<string> {
    return new Promise<any>((resolve, reject) => {
        const hasRequestFailed = (statusCode?: number) =>
            statusCode !== undefined && (statusCode < 200 || statusCode > 299);

        const request = https.request(url, options, response => {
            if (hasRequestFailed(response.statusCode)) {
                response.resume();
                reject(new Error(`Request failed with status code ${response.statusCode}`));
            }

            let body = '';

            response.setEncoding('utf8');

            response.on('data', chunk => { body += chunk; });
            response.on('end', () => resolve(body));
        });

        request.on('error', reject);

        if (body !== undefined)
            request.write(body);

        request.end();
    });
}
