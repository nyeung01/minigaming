#pragma strict

/* taken from https://github.com/livperspective/pencils-vs-erasers */

// Firing speed
public var speed : int = 6;

function Start () {  
    GetComponent.<Rigidbody2D>().velocity.x = speed;
}

// Destroys enemies!
function OnBecameInvisible() {  
    Destroy(gameObject);
}