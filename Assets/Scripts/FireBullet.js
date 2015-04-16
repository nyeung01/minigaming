#pragma strict
/* taken from https://github.com/livperspective/pencils-vs-erasers 
Modified to work with triggered collided controls

*/

// Fires bullet on space button
public var bullet : GameObject;
var speed : float = 1.0;
var offset : Transform;
var shotDelay : float;
private var active = false;

function OnTriggerEnter2D (other : Collider2D) {
	active = true;
	print ("FIYA!");
}

function OnTriggerExit2D (other : Collider2D) {
	active = false;
	print ("-.-");
}

function Update() {
	if (active){
		if (Input.GetKeyDown("space") && Time.time > shotDelay) {
			shotDelay = Time.time + 0.5;
    		Instantiate(bullet, offset.position, Quaternion.identity);
    		GetComponent(pressState).SpriteChange();
    	}
    }
    else GetComponent(pressState).Revert();
}