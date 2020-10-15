import React, { useContext } from 'react';

import './nav.scss';
import SettingMenu from '../menu/SettingMenu.js';
import { ThemeContext } from '../../context/ThemeContext.js';
import { FaUserCircle } from 'react-icons/fa';
import useProfileState from '../../hooks/useProfileState';
import avatarImg from '../../assets/linkedingAvatar.jpeg';

export default function NavBar() {
	const { theme } = useContext(ThemeContext);
	const { name, avatar_url } = useProfileState();
	const userAvatar = avatar_url ? true : false;

	return (
		<nav className={`${theme}-nav`}>
			<div className='main-header'>
				<div className={`${theme}-logo`}>
					<svg
						version='1.0'
						xmlns='http://www.w3.org/2000/svg'
						width='825.000000pt'
						height='486.000000pt'
						viewBox='0 0 825.000000 486.000000'
						preserveAspectRatio='xMidYMid meet'
						className='logo-icon'
					>
						<metadata>
							Created by potrace 1.10, written by Peter Selinger 2001-2011
						</metadata>
						<g
							transform='translate(0.000000,486.000000) scale(0.100000,-0.100000)'
							fill='#000000'
							stroke='none'
						>
							<path
								d='M0 2430 l0 -2430 4051 0 4051 0 52 54 c32 32 56 66 59 85 4 18 13 31
22 31 13 0 15 240 15 2250 0 2010 -2 2250 -15 2250 -9 0 -18 13 -22 31 -3 19
-27 53 -59 86 -30 30 -54 59 -54 64 0 5 -1620 9 -4050 9 l-4050 0 0 -2430z
m7702 2074 c59 -23 111 -75 131 -132 16 -44 17 -187 17 -1967 0 -2144 6 -1977
-69 -2048 -76 -72 71 -67 -1849 -67 -1928 0 -1784 -5 -1855 69 -73 77 -67 -93
-67 2044 0 2141 -5 1979 67 2049 75 72 -77 67 1850 67 1585 1 1736 0 1775 -15z
m-6345 -35 c118 -28 191 -56 268 -103 93 -57 195 -140 195 -160 0 -13 -13 -25
-132 -130 l-68 -58 -74 56 c-109 84 -190 115 -296 115 -213 1 -390 -128 -456
-331 -54 -164 -6 -340 126 -467 182 -174 449 -174 649 1 24 21 47 38 50 38 3
0 17 -10 31 -22 14 -13 58 -52 98 -87 39 -34 72 -69 72 -75 0 -37 -209 -185
-320 -227 -67 -25 -188 -49 -254 -49 -63 0 -198 25 -266 50 -163 60 -338 215
-414 367 -126 250 -101 556 62 775 120 162 248 242 482 306 49 14 191 14 247
1z m921 -51 c21 -36 102 -192 287 -553 140 -274 184 -357 196 -370 6 -6 14 -4
23 5 8 8 116 218 241 465 125 248 234 458 242 468 14 15 36 17 160 17 119 0
145 -3 149 -15 4 -8 2 -21 -4 -28 -5 -6 -154 -298 -330 -647 -176 -349 -333
-660 -348 -690 l-29 -55 -85 -3 c-47 -1 -90 1 -96 5 -5 5 -39 64 -73 133 -35
69 -94 184 -131 255 -115 222 -203 393 -305 590 -54 105 -125 242 -158 306
-38 72 -58 122 -54 132 6 15 25 17 151 17 l144 0 20 -32z m-1394 -1842 c100
-37 206 -105 206 -134 0 -13 -85 -82 -101 -82 -7 0 -33 13 -58 29 -25 17 -67
36 -93 42 -91 25 -195 -23 -251 -115 -26 -42 -30 -58 -30 -120 0 -87 23 -139
85 -189 80 -64 165 -75 252 -31 28 14 58 32 67 40 8 8 22 14 30 14 23 -1 100
-76 94 -93 -6 -15 -80 -72 -125 -95 -48 -26 -135 -52 -170 -52 -36 0 -119 26
-175 54 -76 38 -153 126 -189 216 -26 66 -24 209 4 275 50 118 139 197 269
241 85 29 104 29 185 0z m756 5 c101 -30 133 -46 194 -101 37 -34 67 -74 88
-118 31 -63 33 -73 33 -172 0 -96 -2 -110 -29 -163 -34 -67 -110 -149 -165
-176 -62 -32 -153 -61 -192 -61 -46 0 -160 41 -210 76 -202 140 -236 412 -74
592 49 55 120 96 208 122 79 23 71 23 147 1z m926 -28 c98 -33 186 -113 232
-212 23 -47 27 -70 27 -146 0 -80 -3 -97 -31 -155 -49 -103 -123 -168 -230
-204 -42 -14 -85 -16 -245 -14 l-194 3 -3 364 c-2 285 1 366 10 373 7 4 97 8
199 8 146 0 196 -3 235 -17z m1092 8 c9 -5 12 -27 10 -72 l-3 -64 -335 0 -335
0 -3 59 c-2 32 -1 65 2 72 4 11 65 14 328 14 178 0 329 -4 336 -9z m-73 -366
l0 -70 -220 -5 -220 -5 0 -70 0 -70 249 -3 c168 -1 254 -6 263 -14 10 -8 13
-30 11 -72 l-3 -61 -335 0 -335 0 -3 214 c-2 165 1 216 10 223 7 4 141 7 298
5 l285 -2 0 -70z m-220 -745 c227 -50 346 -136 429 -310 l41 -85 0 -130 0
-130 -43 -85 c-63 -128 -139 -200 -285 -268 -64 -31 -72 -32 -191 -32 -116 0
-128 2 -190 29 -176 80 -279 192 -326 358 -71 247 75 525 323 612 135 48 179
55 242 41z m-2195 -30 c120 -23 213 -91 268 -195 24 -44 27 -61 26 -150 0 -85
-3 -106 -23 -142 -39 -73 -98 -130 -169 -165 l-67 -33 -212 -3 c-201 -4 -214
-5 -224 -24 -6 -12 -10 -67 -8 -139 2 -74 -1 -123 -7 -129 -7 -7 -47 -10 -100
-8 l-89 3 -3 484 c-1 349 1 488 9 497 9 11 65 14 279 14 147 0 291 -5 320 -10z
m1148 -5 c309 -73 382 -452 122 -627 -30 -20 -56 -42 -58 -48 -3 -7 59 -74
137 -150 77 -75 141 -142 141 -148 0 -16 -11 -17 -145 -12 l-125 5 -170 170
-170 170 0 67 c0 38 5 70 11 74 6 3 59 7 118 8 119 2 154 14 192 68 17 23 23
46 23 83 0 58 -20 95 -68 124 -29 18 -51 20 -225 21 -107 1 -197 -2 -202 -7
-5 -5 -10 -182 -11 -393 l-3 -385 -95 0 -95 0 -3 484 c-1 349 1 488 9 497 17
21 529 20 617 -1z'
							/>
							<path
								d='M6059 4376 c-49 -15 -104 -59 -137 -109 -24 -36 -27 -50 -27 -121 1
-70 4 -86 27 -123 15 -23 42 -53 61 -67 37 -28 116 -56 160 -56 58 0 131 33
179 81 62 62 79 126 61 233 -9 56 -100 146 -166 164 -56 14 -109 14 -158 -2z'
							/>
							<path
								d='M6705 4376 c-104 -40 -174 -132 -174 -231 0 -41 22 -105 49 -140 43
-57 137 -105 207 -105 133 0 253 119 253 250 0 158 -186 283 -335 226z'
							/>
							<path
								d='M7350 4375 c-48 -17 -116 -79 -140 -126 -28 -54 -27 -154 1 -209 40
-77 140 -139 222 -140 137 -1 257 114 257 245 0 100 -81 208 -173 233 -58 15
-120 14 -167 -3z'
							/>
							<path
								d='M4774 2827 c-2 -7 -3 -78 -2 -157 l3 -145 328 -164 c243 -121 325
-167 317 -175 -5 -7 -76 -45 -157 -85 -82 -40 -155 -77 -163 -82 -8 -5 -22
-12 -30 -15 -60 -25 -282 -139 -291 -150 -11 -14 -16 -285 -5 -303 9 -14 34
-5 148 54 57 29 235 120 396 201 160 82 329 168 373 190 45 23 88 48 96 57 12
11 15 41 15 133 -1 66 -1 124 -1 130 -1 6 -74 48 -163 94 -155 78 -175 88
-215 109 -10 5 -121 62 -248 126 -126 64 -237 120 -245 125 -8 5 -22 11 -30
14 -8 4 -35 17 -59 31 -50 28 -60 30 -67 12z'
							/>
							<path
								d='M5864 1286 c-7 -30 -1 -252 7 -260 8 -8 1160 -8 1168 0 3 3 6 67 6
142 l0 137 -587 3 -588 2 -6 -24z'
							/>
							<path
								d='M1496 2424 c-54 -19 -102 -58 -134 -107 -24 -37 -27 -52 -27 -122 0
-88 12 -118 64 -171 113 -115 305 -89 387 52 35 59 39 157 10 216 -27 55 -83
106 -144 128 -61 23 -102 24 -156 4z'
							/>
							<path
								d='M2274 2407 c-2 -7 -3 -107 -2 -222 l3 -210 118 -3 c107 -2 123 0 164
20 60 30 97 77 117 147 14 51 14 62 1 107 -26 85 -63 126 -143 157 -54 21
-250 24 -258 4z'
							/>
							<path
								d='M3207 1232 c-76 -27 -147 -89 -185 -161 -31 -56 -34 -70 -33 -146 0
-70 4 -91 26 -136 32 -62 93 -122 155 -152 37 -17 64 -21 145 -22 113 0 152
14 229 85 69 63 91 119 91 225 0 80 -3 96 -30 149 -70 138 -251 209 -398 158z'
							/>
							<path
								d='M764 1196 c-3 -13 -4 -77 -2 -141 2 -89 6 -118 18 -126 9 -6 88 -9
201 -7 l186 3 37 29 c87 66 88 176 3 240 -34 26 -35 26 -235 26 l-202 0 -6
-24z'
							/>
						</g>
					</svg>
				</div>
				<div className='user-name'>{name}</div>
				<div className='user-avatar'>
					{userAvatar ? (
						<img src={avatarImg} alt='User Avatar' className='avatar-img' />
					) : (
						<FaUserCircle className='avatar-container' />
					)}
				</div>
			</div>
			<SettingMenu />
		</nav>
	);
}

/* 
<div className='user-avatar'>
					<img
						src='https://media-exp1.licdn.com/dms/image/C5103AQHPZg4WFrUCZQ/profile-displayphoto-shrink_100_100/0?e=1595462400&v=beta&t=IemcBrohIPQNvPsdndr3NJqK6M6BD075E552J77uNVI'
						alt='User Avatar'
						className='user-avatar avatar-img'
					/>
					<div className='avatar-container'></div>
				</div>
*/
