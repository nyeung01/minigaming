#pragma strict

// Moves the enemies at different speeds
var min : float = 1.0;
var max : float = 3.0;

function Update() {
	var speed = Random.Range(min,max);
	transform.Translate(Vector3.left * speed * Time.deltaTime, Camera.main.transform);
}