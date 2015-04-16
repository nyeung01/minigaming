#pragma strict

//End game if bombs reach the buttons' region

function OnTriggerEnter2D (other : Collider2D){
	if(other.gameObject.tag == "Bomb"){
		print ("Collided!");
    	Application.LoadLevel ("gameover");
    }
}