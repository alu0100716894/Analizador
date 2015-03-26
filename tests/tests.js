var assert = chai.assert;

suite('Analizador', function() {
	setup(function(){
		if (typeof __html__ !== 'undefined') {
			document.body.innerHTML = __html__["tests/testsk.html"];
			INPUT = document.getElementById("INPUT");
			OUTPUT = document.getElementById("OUTPUT");
		}
	});

	test('Token correcto', function() {
	var texto1 = "{" +
    "\"value\": \"=\"," +
    "\"arity\": \"binary\"," +
    "\"first\": {" +
    "    \"value\": \"a\"," +
    "    \"arity\": \"name\"" +
    "}," +
    "\"second\": {" +
    "    \"value\": 1," +
    "    \"arity\": \"literal\"" +
    "}" +
	"}";

	INPUT.tokens();
	var a = 1;
	var b = 1;
	assert.equal(OUTPUT, texto1);
});
});