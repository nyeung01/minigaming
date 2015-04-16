#pragma strict

// Destroy enemy on bullet hit

function OnTriggerEnter2D (hit : Collider2D){
	if(hit.gameObject.tag == "Bomb"){
    	Destroy(hit.gameObject);
    	Destroy(gameObject);
    }
}