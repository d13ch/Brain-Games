#!/usr/bin/env node
import logic from '../src/index.js';
import { rules, gameData } from '../src/games/prime.js';

logic(rules, gameData);
