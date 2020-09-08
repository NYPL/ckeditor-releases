<<<<<<< HEAD
﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.plugins.setLang("a11yhelp","sr-latn",{title:"Accessibility Instructions",contents:"Help Contents. To close this dialog press ESC.",legend:[{name:"Opšte",items:[{name:"Editor Toolbar",legend:"Press ${toolbarFocus} to navigate to the toolbar. Move to the next and previous toolbar group with TAB and SHIFT-TAB. Move to the next and previous toolbar button with RIGHT ARROW or LEFT ARROW. Press SPACE or ENTER to activate the toolbar button."},{name:"Editor Dialog",legend:"Inside a dialog, press TAB to navigate to next dialog field, press SHIFT + TAB to move to previous field, press ENTER to submit dialog, press ESC to cancel dialog. For dialogs that have multiple tab pages, press ALT + F10 to navigate to tab-list. Then move to next tab with TAB OR RIGTH ARROW. Move to previous tab with SHIFT + TAB or LEFT ARROW. Press SPACE or ENTER to select the tab page."},
{name:"Editor Context Menu",legend:"Press ${contextMenu} or APPLICATION KEY to open context-menu. Then move to next menu option with TAB or DOWN ARROW. Move to previous option with SHIFT+TAB or UP ARROW. Press SPACE or ENTER to select the menu option. Open sub-menu of current option with SPACE or ENTER or RIGHT ARROW. Go back to parent menu item with ESC or LEFT ARROW. Close context menu with ESC."},{name:"Editor List Box",legend:"Inside a list-box, move to next list item with TAB OR DOWN ARROW. Move to previous list item with SHIFT + TAB or UP ARROW. Press SPACE or ENTER to select the list option. Press ESC to close the list-box."},
{name:"Editor Element Path Bar",legend:"Press ${elementsPathFocus} to navigate to the elements path bar. Move to next element button with TAB or RIGHT ARROW. Move to previous button with  SHIFT+TAB or LEFT ARROW. Press SPACE or ENTER to select the element in editor."}]},{name:"Commands",items:[{name:" Undo command",legend:"Press ${undo}"},{name:" Redo command",legend:"Press ${redo}"},{name:" Bold command",legend:"Press ${bold}"},{name:" Italic command",legend:"Press ${italic}"},{name:" Underline command",
legend:"Press ${underline}"},{name:" Link command",legend:"Press ${link}"},{name:" Toolbar Collapse command",legend:"Press ${toolbarCollapse}"},{name:" Access previous focus space command",legend:"Press ${accessPreviousSpace} to access the closest unreachable focus space before the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces."},{name:" Access next focus space command",legend:"Press ${accessNextSpace} to access the closest unreachable focus space after the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces."},
{name:" Accessibility Help",legend:"Press ${a11yHelp}"}]}],backspace:"Backspace",tab:"Tab",enter:"Enter",shift:"Shift",ctrl:"Ctrl",alt:"Alt",pause:"Pause",capslock:"Caps Lock",escape:"Escape",pageUp:"Page Up",pageDown:"Page Down",end:"End",home:"Home",leftArrow:"Left Arrow",upArrow:"Up Arrow",rightArrow:"Right Arrow",downArrow:"Down Arrow",insert:"Insert","delete":"Delete",leftWindowKey:"Left Windows key",rightWindowKey:"Right Windows key",selectKey:"Select key",numpad0:"Numpad 0",numpad1:"Numpad 1",
numpad2:"Numpad 2",numpad3:"Numpad 3",numpad4:"Numpad 4",numpad5:"Numpad 5",numpad6:"Numpad 6",numpad7:"Numpad 7",numpad8:"Numpad 8",numpad9:"Numpad 9",multiply:"Multiply",add:"Add",subtract:"Subtract",decimalPoint:"Decimal Point",divide:"Divide",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",numLock:"Num Lock",scrollLock:"Scroll Lock",semiColon:"Semicolon",equalSign:"Equal Sign",comma:"Comma",dash:"Dash",period:"Period",forwardSlash:"Forward Slash",
graveAccent:"Grave Accent",openBracket:"Open Bracket",backSlash:"Backslash",closeBracket:"Close Bracket",singleQuote:"Single Quote"});
=======
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'sr-latn', {
	title: 'Uputstva za pomoć',
	contents: 'Sadržaji za pomoć. Da bi ste zatvorili diјalog pritisnite ESC.',
	legend: [
		{
		name: 'Opšte',
		items: [
			{
			name: 'Alatke za uređivanje',
			legend: 'Pritisnite ${toolbarFocus} da bi označili alatke. Do sledeće i prethodne grupe alatki možete doći sa tasterom  TAB i SHIFT+TAB. Do tastera sledeće i predthodne grupe alatki možete doći sa tasterima STRELICA LEVO i STRELICA DESNO. Pritisnite  SPACE ili ENTER da bi aktivirali taster alatki.'
		},

			{
			name: 'Uređivač dijaloga',
			legend:
				'U prozoru dijalog pritisnite TAB da bi došli do sledećeg polja dijaloga, pritisnite ENTER za prihvatanje dijaloga, pritisnite ESC za odbijanje dijaloga. Kada dijalog ima više kartica, do njih možete doći pritiskom na ALT + F10 ili  TAB. Zatim sa TAB ili STRELICA  DESNO dolazite do naredne kartice.' 
		},

			{
			name: 'Uređivač lokalnog menija',
			legend: 'Pritisnite  ${contextMenu} ili APPLICATION TASTER za otvaranje lokalnog menija. Zatim sa TAB ili STRELICA DOLE možete preći na sledeću tačku menija.  Prethodnu opciju možete postići sa SHIFT+TAB ili STRELICA GORE. Pritisnite SPACE ili ENTER za odabir tačke menija. Pritisnite SPACE ili ENTER  da bi ste otvorili podmeni trenutne stavke menija. Za povratak u glavni meni pritisnite ESC ili STRELICA DESNO. Zatvorite lokalni meni pomoću tastera ESC.'
		},

			{
			name: 'Uređjivač liste',
			legend: 'Do sledećеg elementa liste možete doći sa TAB ili STERLICA DOLE. Za odabir prethodnog elementa  pritisnite SHIFT+TAB ili STREKICA DOLE. Za odabir elementa pritisnite SPACE ili ENTER. Sa pritiskom ESC zatvarate listu. '
		},

			{
			name: 'Uredjivač trake puta elemenata',
			legend: 'Pritisnite $ {elementsPathFocus} da bi ste označili traku puta elenementa. Do sledećеg elementa  možete doći sa TAB ili STRELICA DESNO. Do prethodnоg dolazite sa SHIFT+TAB ili STRELICA DESNO. Sa SPACE ili ENTER možete odbrati element u uredjivaču.'
		}
		]
	},
		{
		name: 'Komanda',
		items: [
			{
			name: 'Otkaži komandu',
			legend: 'Pritisni ${undo}'
		},
			{
			name: 'Prepoznavanje komande',
			legend: 'Pritisni ${redo}'
		},
			{
			name: 'Podebljana komanda',
			legend: 'Pritisni ${bold}'
		},
			{
			name: 'Kurziv komanda',
			legend: 'Pritisni ${italic}'
		},
			{
			name: 'Precrtana komanda',
			legend: 'Pritisni ${underline}'
		},
			{
			name: 'Link komanda',
			legend: 'Pritisni ${link}'
		},
			{
			name: 'Zatvori traku uredjivača komanda ',
			legend: 'Pritisni ${toolbarCollapse}'
		},
			{
			name: 'Pristup prethodnom fokus mestu komanda ',
			legend: 'Pritisni ${accessNextSpace} da bi pristupio najbližem nedostupnom fokus mestu pre znaka hiányjel, na primer: dva susedna HR elementa.Ponovi kombinaciju tastera da pronadješ fokus mesto koje se nalazi dalje.'
		},
			{
			name: 'Pristup sledećem fokus mestu komanda ',
			legend: 'Pritisni ${accessNextSpace} da bi pristupio najbližem nedostupnom fokus mestu posle znaka hiányjel, na primer: dva susedna HR elementa.Ponovi kombinaciju tastera da pronadješ fokus mesto koje se nalazi dalje.'
		},
			{
			name: 'Pomoć pristupačnosti',
			legend: 'Pritisni ${a11yHelp}'
		},
			{
			name: 'Nalepi kao običan tekst',
			legend: 'Pritisnite: ${pastetext}',
			legendEdge: 'Pritisnite ${pastetext}-t, zatim ${paste}-t'
		}
		]
	}
	],
	tab: 'Tab',
	pause: 'Pause',
	capslock: 'Caps Lock',
	escape: 'Escape',
	pageUp: 'Page Up',
	pageDown: 'Page Down',
	leftArrow: 'Strelica levo',
	upArrow: 'strelica gore',
	rightArrow: 'strelica desno',
	downArrow: 'strelica dole',
	insert: 'Insert',
	leftWindowKey: 'levi Windows-taster',
	rightWindowKey: 'desni Windows-taster',
	selectKey: 'Odabir tastera',
	numpad0: 'Tasteri sa brojevima 0',
	numpad1: 'Tasteri sa brojevima 1',
	numpad2: 'Tasteri sa brojevima 2',
	numpad3: 'Tasteri sa brojevima 3',
	numpad4: 'Tasteri sa brojevima 4',
	numpad5: 'Tasteri sa brojevima 5',
	numpad6: 'Tasteri sa brojevima 6',
	numpad7: 'Tasteri sa brojevima 7',
	numpad8: 'Tasteri sa brojevima 8',
	numpad9: 'Tasteri sa brojevima 9',
	multiply: 'Množenje',
	add: 'Sabiranje',
	subtract: 'Oduzimanje',
	decimalPoint: 'Decimalna tačka',
	divide: 'Deljenjje',
	f1: 'F1',
	f2: 'F2',
	f3: 'F3',
	f4: 'F4',
	f5: 'F5',
	f6: 'F6',
	f7: 'F7',
	f8: 'F8',
	f9: 'F9',
	f10: 'F10',
	f11: 'F11',
	f12: 'F12',
	numLock: 'Num Lock',
	scrollLock: 'Scroll Lock',
	semiColon: 'Tačka zarez',
	equalSign: 'Znak jednakosti',
	comma: 'Zarez',
	dash: 'Crtica',
	period: 'Tačka',
	forwardSlash: 'Kosa crta',
	graveAccent: 'Obrnuti znak akcenta',
	openBracket: 'Otvorena čoškasta zagrada',
	backSlash: 'Obrnuta kosa crta',
	closeBracket: 'Zatvorena ćoškasta zagrada',
	singleQuote: 'Simpli znak navoda'
} );
>>>>>>> 4.12.1
