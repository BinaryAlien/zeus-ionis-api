require('dotenv').config();

import { Zeus } from '../src/index';

if (!process.env.ZEUS_ACCESS_TOKEN) {
    console.error("Missing environment variable `ZEUS_ACCESS_TOKEN'.");
    process.exit(1);
}

const zeus = new Zeus(process.env.ZEUS_ACCESS_TOKEN);

export default zeus;
