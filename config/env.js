require('dotenv').config({path: '.env.local'});

const sanitized = (process.env.APP_PREFIX || '').replace(/^\/?(?<path>.*?)\/?$/u, '$1');
const APP_PREFIX = sanitized ? `/${sanitized}/` : '/';

const CATALOG = `${APP_PREFIX}${process.env.CATALOG}`;

module.exports = {
	NODE_ENV: process.env.NODE_ENV || 'production',
	APP_PREFIX,
	CATALOG,
	DEV_SERVER_PORT: process.env.DEV_SERVER_PORT,
};
