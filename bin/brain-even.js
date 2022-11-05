#!/usr/bin/env node
import logic from '../src/index.js';
import { rules, gameData } from '../src/games/even.js';

logic(rules, gameData);
