import {test} from 'node:test';import {strict as assert} from 'node:assert';import {newMatch,advance,touchdown,changePossession,tick,extraPoint} from './rules.js';
test('fourth down failure gives ball to opponent',()=>{const m=newMatch();m.phase='live';m.down=4;m.distance=4;advance(m,2);assert.equal(m.possession,1);assert.equal(m.down,1)});
test('gaining the line to gain resets down and distance',()=>{const m=newMatch();m.phase='live';m.distance=3;advance(m,3);assert.equal(m.down,1);assert.equal(m.distance,10)});
test('touchdown awards six and extra point one',()=>{const m=newMatch();touchdown(m);assert.equal(m.score[0],6);extraPoint(m);assert.equal(m.score[0],7)});
test('interception turnover flips possession and field position',()=>{const m=newMatch();changePossession(m,'Interception!');assert.equal(m.possession,1);assert.equal(m.ballOn,75)});
test('clock advances and halftime switches possession',()=>{const m=newMatch();m.phase='live';m.quarter=2;m.clock=1;tick(m);assert.equal(m.quarter,3);assert.equal(m.possession,1);assert.equal(m.clock,0)});
