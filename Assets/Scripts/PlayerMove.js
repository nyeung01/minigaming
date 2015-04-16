#pragma strict

// change speed
var speed : float = 1.0;

// move player with arrow keys
function Update() {
	if (Input.GetKeyDown("w")) transform.position.y += 2;
	if (Input.GetKeyDown("s")) transform.position.y -= 2;
	if (transform.position.y > 4) transform.position.y = 4;
	if (transform.position.y < -4) transform.position.y = -4;
	//var move = Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0);
	//transform.position += move * speed * Time.deltaTime;
}