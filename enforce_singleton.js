/*jslint node: true */
"use strict";

if (global._bExodusCoreLoaded)
    throw Error("Looks like you are loading multiple copies of exoduscore, which is not supported.\nRunnung 'npm dedupe' might help.");

global._bExodusCoreLoaded = true;
