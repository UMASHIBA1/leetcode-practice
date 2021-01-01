// https://leetcode.com/problems/regular-expression-matching/

enum Kind {
	Dot,
	Asterisk,
	Normal
}

interface PToken {
	kind: Kind;
	value: string | PToken;
};

const splitP = (p:string) => {
	const pLst: PToken[] = [];
	for(const strToken of p.split("")) {
		if (strToken === ".") {
			pLst.push({
				kind: Kind.Dot,
				value: strToken
			});
		} else if (strToken === "*") {
				const previousToken = pLst.pop();
				pLst.push({
					kind: Kind.Asterisk,
					value: previousToken
				});
		} else {
			pLst.push({
				kind: Kind.Normal,
				value: strToken
			})
		}
	};
	return pLst;
}


const dfa = (s: string[], pLst: PToken[]): boolean => {
	const thisP = pLst[0];
	const thisS = s[0];
	const nextP = pLst.slice(1,);
	const nextS = s.slice(1,);

	// console.log("s: ", s, "p: ", pLst, "thisP: ", thisP, "thisS: ", thisS, "nextP: ", nextP, "nextS: ", nextS);


	if (s.length === 0 && pLst.length === 0) {
		return true;
	} else if (thisP) {
		switch (thisP.kind) {
			case Kind.Dot:
				if (thisS){
					return dfa(nextS, nextP);
				}
				break;
			case Kind.Asterisk:
				// console.log("Run out asterisk");
				if (typeof thisP.value !== "string") {
					if (thisS === thisP.value.value || thisP.value.kind === Kind.Dot && thisS) {
						// console.log("run asterisk if");
						return dfa(nextS, pLst) || dfa(nextS, nextP) || dfa(s, nextP);
					} else {
						// console.log("run asterisk else");
						return dfa(s, nextP);
					}
				}

				break;
			case Kind.Normal:
				if (thisS && thisS === thisP.value) {
					return dfa(nextS, nextP); 
				}
				break;
		}
	}
	return false;
}

const isMatch = (s: string, p: string): boolean => {
	return dfa(s.split(""), splitP(p));
};


console.log(isMatch("a", "ab*"));
console.log(isMatch("aa", "a"));
console.log(isMatch("aa", "a*"));
console.log(isMatch("aab", "c*a*b"));
console.log(isMatch("mississippi", "mis*is*p*."));
console.log(isMatch("bbbba", ".*a*a"));
console.log(isMatch("cababbbcbbcbaacbc", "b*a*c*a*.*c*.*.*.*a"));
console.log(isMatch("cababbbcbbcbaacbca", "b*a*c*a*.*c*.*.*.*a"));
