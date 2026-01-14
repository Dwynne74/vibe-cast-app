# Vibe cast project instructions

## Goal

Create a weather app with an animated character, todo-list, and clock/stop-watch. The background and animated character changes color based on the weather temperature.

## Instructions step by step

- Create different seasons of clothes for the animated character.
- Create different seasons of color pallet.
- Look at the proto-type of clock and decide if needed to make changes or create an svg for the clock
- Create the html and start with the background and layouts
  - Create a header, main, and footer inside the body
  - Inside the main, create a container to use for the main background layouts
  - The background container has class and id that can be used to change the color depending on the weather temperature
  - Use flex-box to align the todo-list, clock/stop-watch, weather widget and bunny animated character.
- Apply the clock code
- Apply the Weather code
- Apply the Bunny code
  - As the DOM loads, the bunny waves and says hi with a message then dissappears after 6 seconds
  - When the bunny is clicked, the color of the clothes change
- Make the DOM parts and sections to be animated as it loads

**HTML**

**CSS**

**JavaScript**

- .content-wrapper background should change based on the weather temp

## TODO-list

## Clock/Stop-watch

## Weather widget

## Bunny animated character

### Color pallets

Very Hot
Hat: RGB(43, 177, 124), #2bb17c, #238ebc, #a3d4e4, #be805c, #0f1c30, #342a40, #f12e90, #c2ff90, #f894d0
Shirt: RGB(144, 246, 245), #90f6f5, #238ebc, #a3d4e4, #be805c, #0f1c30, #342a40, #f12e90, #c2ff90, #f894d0
Pants: RGB(112, 130, 191), #7082bf, #238ebc, #a3d4e4, #be805c, #0f1c30, #342a40, #f12e90, #c2ff90, #f894d0

Hot
Shirt: RGB(252, 246, 245), #fcf6f5, #5c4e4e, #fdfaec, #eb7847, #005e94 , #2b18a3, #f353d5, #e9d8e1, #88c9fa
Pants: RGB(204, 149, 248),#cc95f8, #5c4e4e, #fdfaec, #eb7847, #005e94 , #2b18a3, #f353d5, #e9d8e1, #88c9fa
Shoes: RGB(115, 254, 254), #73fefe, #5c4e4e, #fdfaec, #eb7847, #005e94 , #2b18a3, #f353d5, #e9d8e1, #88c9fa

Warm
Shirt: RGB(255, 201, 73),#ffc949, #bcece0, #36eee0, #f652a0, #4c5270, #e8b4b8, #eed6d3, #a49393, #67595e
Pants: RGB(21, 107, 213), #156bd5, #bcece0, #36eee0, #f652a0, #4c5270, #e8b4b8, #eed6d3, #a49393, #67595e
Shoes: RGB(104, 79, 111), #684f6f, #bcece0, #36eee0, #f652a0, #4c5270, #e8b4b8, #eed6d3, #a49393, #67595e

Mild Cool
Shirt: RGB(27, 47, 236), #1b2fec, #050a30, #000c66, #0000ff, #7ec8e3, #988780, #ffffff, #05263b, #e7ded9
Pants: RGB(107, 112, 150), #6b7096, #050a30, #000c66, #0000ff, #7ec8e3, #988780, #ffffff, #05263b, #e7ded9
Shoes: RGB(193, 79, 111), #c14f6f, #050a30, #000c66, #0000ff, #7ec8e3, #988780, #ffffff, #05263b, #e7ded9

Chilly
Shirt: RGB(5, 161, 245), #05a1f5, #e08955, #0048a4, #483d3c, #689ab8, #181310, #060644, #727880, #ceb290
Pants: RGB(112, 130, 191), #7082bf, #e08955, #0048a4, #483d3c, #689ab8, #181310, #060644, #727880, #ceb290
Shoes: RGB(193, 244, 130), #c1f482, #e08955, #0048a4, #483d3c, #689ab8, #181310, #060644, #727880, #ceb290

Cold
Shirt: RGB(102, 17, 61), #66113d, #e9ddd4, #000000, #e9ddd4, #900020, #afbcd5, #6b7ea4, #1f232c, #162331
Pants: RGB(4, 0, 50), #040032, #e9ddd4, #000000, #e9ddd4, #900020, #afbcd5, #6b7ea4, #1f232c, #162331
Shoes: RGB(102, 17, 61), #02113d, #e9ddd4, #000000, #e9ddd4, #900020, #afbcd5, #6b7ea4, #1f232c, #162331
Hat: Main: RGB(14, 16, 118) Top: RGB(255, 245, 63), #fff53f, #e9ddd4, #000000, #e9ddd4, #900020, #afbcd5, #6b7ea4, #1f232c, #162331
Gloves: RGB(101, 96, 132), #656084, #e9ddd4, #000000, #e9ddd4, #900020, #afbcd5, #6b7ea4, #1f232c, #162331

Very cold
Shirt: RGB(248, 242, 168), #f8f2a8, #6e1a10, #ab9c80, #282f30, #ecb600, #e0e3d3, #b07d26, #bc0a0f, #00978a
Pants: RGB(10, 17, 13), #0a110d, #6e1a10, #ab9c80, #282f30, #ecb600, #e0e3d3, #b07d26, #bc0a0f, #00978a
Hat: RGB(0, 0, 7), #000007, #6e1a10, #ab9c80, #282f30, #ecb600, #e0e3d3, #b07d26, #bc0a0f, #00978a
Gloves: RGB(22, 72, 101), #164865, #6e1a10, #ab9c80, #282f30, #ecb600, #e0e3d3, #b07d26, #bc0a0f, #00978a

Freezing
Shirt: RGB(165, 1, 24), #a50118, #323432, #787069, #98a4b0, #aba6aa, #970c10, #666340, #acb4a0, #ffe9c0
Pants: RGB(10, 17, 13), #0a110d, #323432, #787069, #98a4b0, #aba6aa, #970c10, #666340, #acb4a0, #ffe9c0
Hat: RGB(72, 69, 231), #4845e7, #323432, #787069, #98a4b0, #aba6aa, #970c10, #666340, #acb4a0, #ffe9c0
Gloves: RGB(144, 72, 101), #904865, #323432, #787069, #98a4b0, #aba6aa, #970c10, #666340, #acb4a0, #ffe9c0
