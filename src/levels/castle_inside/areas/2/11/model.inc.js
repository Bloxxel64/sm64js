import * as Gbi from "../../../../../include/gbi"
import {
	texture_castle_light,
	inside_castle_seg7_texture_07000800,
	inside_castle_seg7_texture_07001000,
	inside_castle_seg7_texture_07002000,
	inside_castle_seg7_texture_07003000,
	inside_castle_seg7_texture_07003800,
	inside_castle_seg7_texture_07004800,
	inside_castle_seg7_texture_07005800,
	inside_castle_seg7_texture_07006000,
	inside_castle_seg7_texture_07006800,
	inside_castle_seg7_texture_07007000,
	inside_castle_seg7_texture_07007800,
	inside_castle_seg7_texture_07008000,
	inside_castle_seg7_texture_07008800,
	inside_castle_seg7_texture_07009000,
	inside_castle_seg7_texture_07009800,
	inside_castle_seg7_texture_0700A000,
	inside_castle_seg7_texture_0700A800,
	inside_castle_seg7_texture_0700B800,
	inside_castle_seg7_texture_0700C800,
	inside_castle_seg7_texture_0700D800,
	inside_castle_seg7_texture_0700E800,
	inside_castle_seg7_texture_0700F800,
} from "../../../texture.inc"
import {
	inside_09000000,
	inside_09001000,
	inside_09002000,
	inside_09003000,
	inside_09003800,
	inside_09004000,
	inside_09004800,
	inside_09005000,
	inside_09005800,
	inside_09006000,
	inside_09007000,
	inside_09008000,
	inside_09008800,
	inside_09009000,
	inside_0900A000,
	inside_0900B000,
	inside_0900B800,
} from "../../../../../textures/inside"
const inside_castle_seg7_vertex_070516E8 = [
	{ pos: [ 2081, 2970, 6091 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 1569, 2970, 6091 ], flag: 0, tc: [ 478, 0 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 1569, 2970, 5681 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ -2489, 2970, 6091 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ -1977, 3379, 6091 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ -2489, 3379, 6091 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ -1977, 2970, 6091 ], flag: 0, tc: [ 478, 0 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ -2489, 2970, 5681 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ -1977, 2970, 5681 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ -1977, 3379, 5681 ], flag: 0, tc: [ 478, 0 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ -2489, 3379, 5681 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 2081, 3379, 6091 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 2081, 2970, 5681 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 2900, 3021, 5989 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 2900, 3277, 5989 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 2900, 3277, 5784 ], flag: 0, tc: [ 480, 0 ], color: [ 255, 255, 255, 145 ] },
]

const inside_castle_seg7_vertex_070517E8 = [
	{ pos: [ 2081, 3379, 6091 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 1569, 3379, 6091 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 1569, 2970, 6091 ], flag: 0, tc: [ 478, 0 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 2081, 2970, 5681 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 1569, 2970, 5681 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 1569, 3379, 5681 ], flag: 0, tc: [ 478, 0 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 2081, 3379, 5681 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 2900, 3021, 5784 ], flag: 0, tc: [ 480, 990 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 3105, 3277, 5784 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 3105, 3021, 5784 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 2900, 3277, 5784 ], flag: 0, tc: [ 480, 0 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 2900, 3021, 5989 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 3105, 3277, 5989 ], flag: 0, tc: [ 478, 0 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 3105, 3021, 5989 ], flag: 0, tc: [ 478, 990 ], color: [ 255, 255, 255, 145 ] },
	{ pos: [ 2900, 3277, 5989 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 145 ] },
]

export const inside_castle_seg7_dl_070518D8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, texture_castle_light),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070516E8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  6,  3, 0x0),
	...Gbi.gsSP2Triangles( 7,  8,  6, 0x0,  5,  4,  9, 0x0),
	...Gbi.gsSP2Triangles( 5,  9, 10, 0x0, 10,  9,  8, 0x0),
	...Gbi.gsSP2Triangles(10,  8,  7, 0x0, 11,  1,  0, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070517E8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  6,  5,  1, 0x0),
	...Gbi.gsSP2Triangles( 6,  1,  0, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 10,  7, 0x0),
	...Gbi.gsSP2Triangles( 9,  8, 12, 0x0,  9, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(13, 14, 11, 0x0, 13, 12, 14, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_070519C8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_070518D8),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

