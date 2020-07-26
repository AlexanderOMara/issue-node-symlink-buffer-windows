'use strict';

const fs = require('fs');

fs.symlinkSync(Buffer.from('target'), `link_${Date.now()}`);
