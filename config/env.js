require('dotenv').config({path: '.env.local'});

const {
	NODE_ENV,
	APP_PREFIX,
	DEV_SERVER_PORT,
	CATALOG,
// eslint-disable-next-line node/no-process-env
} = process.env;

module.exports = {
	NODE_ENV,
	APP_PREFIX,
	CATALOG: `${APP_PREFIX}${CATALOG}`,
	DEV_SERVER_PORT,
};
