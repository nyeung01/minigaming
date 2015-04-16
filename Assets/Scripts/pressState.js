#pragma strict
var initState : Sprite;
var pressedState : Sprite;

function SpriteChange () {
	GetComponent.<SpriteRenderer>().sprite = pressedState;
}

function Revert () {
	GetComponent.<SpriteRenderer>().sprite = initState;
}