//Spawn interval
var enemy : GameObject;
var min : float = 1.0;
var max : float = 5.0;
private var Timer : float;

function Awake() {
	var Timer = Time.time + Random.Range(min,max);
}

function Update() {
	 if (Timer < Time.time) { //This checks wether real time has caught up to the timer
         Instantiate(enemy, transform.position, Quaternion.identity); //This spawns the emeny
         Timer = Time.time + Random.Range(min,max); //This sets the timer 3 seconds into the future
     }
}