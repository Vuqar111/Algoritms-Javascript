





function lengthOfLastWord(a)
{
	let len = 0;

	// String a is 'final'-- can
	// not be modified So, create
	// a copy and trim the
	// spaces from both sides
	x = a.trim();

	for (let i = 0; i < x.length; i++) {
		if (x[i] == ' ') {
			len = 0;
		}
		else {
			len++;
		}
	}

	return len;
}
