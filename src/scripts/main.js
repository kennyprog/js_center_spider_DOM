'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderHeight = spider.offsetHeight;
const spiderWidth = spider.offsetWidth;
const wallHeight = wall.offsetHeight;
const wallWidth = wall.offsetWidth;

const leftCoord = (wallWidth / 2) - (spiderWidth / 2);
const topCoord = (wallHeight / 2) - (spiderHeight / 2);

spider.style.left = `${leftCoord}px`;
spider.style.top = `${topCoord}px`;
