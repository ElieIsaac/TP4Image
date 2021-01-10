#version 450

uniform vec3 cameraPosition;

uniform sampler2D myTextureSampler;
uniform mat4 MODEL;

in vec3 fragPosition;
in vec3 fragNormal;

out vec4 finalColor;

//code GLSL
uniform struct Light {
vec3 position ;
vec3 intensities;
float ambientCoefficient; 
} light;


void main() {

// Lumière ambiante

	vec4 ambiante = vec4(light.intensities * light.ambientCoefficient,1.);

// Lumière diffuse

	// Calcul Normale
	vec3 normal = normalize(transpose(inverse(mat3(MODEL))) * fragNormal);

	//Calcul Position
	vec3 position = vec3(MODEL*vec4(fragPosition,1.0));

	vec3 lightVector = normalize(light.position - position);
	float brightness = dot(lightVector, normal);

	vec4 diffuse = vec4(brightness,brightness,brightness,1.) ;

finalColor = (ambiante + diffuse) * vec4(1.,0.,1.,1.);

}